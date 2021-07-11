import React, {useState} from "react";
import styles from "./Pagination.module.css";
import cn from 'classnames'

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>{portionNumber > 1 && <button onClick={() => {
        setPortionNumber(portionNumber - 1)
    }}>PREV</button>}
        <span
            className={styles.pageNumber}>{pages.filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
                return <span className={cn({[styles.selectedPage]: currentPage === page}, styles.pageNumber)}
                             key={page}
                             onClick={() => {
                                 onPageChanged(page)
                             }}>{page} </span>
            })}</span>
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
}

export default Pagination;

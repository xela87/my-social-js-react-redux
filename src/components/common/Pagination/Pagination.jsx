import React from "react";
import styles from "./Pagination.module.css";

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>{pages.map(page => {
            return <span key={page.id} className={currentPage === page && styles.selectedPage}
                         onClick={() => {onPageChanged(page)}}>{page}</span>
        })}</div>
    </div>
}

export default Pagination;

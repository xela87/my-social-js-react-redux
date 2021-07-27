import React from "react";
// import styles from "./User.module.css";

import Pagination from "../common/Pagination/Pagination";
import User from "./User";
import {UserType} from '../../types/types';

type PropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (page: number) => void,
    users: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    followingInProgress: Array<number>
}

let Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, follow, unfollow, ...props}) => {

    return <div>
        <Pagination currentPage={currentPage}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    onPageChanged={onPageChanged}
                    portionSize={10}/>
        {users.map(user => <User key={user.id}
                                 user={user}
                                 follow={follow}
                                 unfollow={unfollow}
                                 followingInProgress={props.followingInProgress}/>)}
    </div>;
}

export default Users;

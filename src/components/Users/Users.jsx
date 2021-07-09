import React from "react";
// import styles from "./User.module.css";

import Pagination from "../common/Pagination/Pagination";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, follow, unfollow, ...props}) => {
    return <div>
        <Pagination currentPage={currentPage}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    onPageChanged={onPageChanged}/>
        {users.map(user => <User key={user.id}
                                 user={user}
                                 follow={follow}
                                 unfollow={unfollow}
                                 followingInProgress={props.followingInProgress}/>)}
    </div>;
}

export default Users;

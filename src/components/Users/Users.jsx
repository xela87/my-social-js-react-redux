import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../assets/images/extra-large.jpg";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>{pages.map(page => {
            return <span className={props.currentPage === page && styles.selectedPage}
                         onClick={() => {
                             props.onPageChanged(page);
                         }}>{page}</span>
        })}</div>
        {props.users.map(user => <div key={user.id}>
            <span><div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt=''/></NavLink></div>
        <div>
          {user.followed
              ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.toggleIsFollowingProgress(true, user.id);
                  userAPI.followUser(user.id).then(data => {
                      if (data.resultCode === 0) {
                          props.unfollow(user.id)
                      }
                      props.toggleIsFollowingProgress(false, user.id);
                  });
              }}>Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.toggleIsFollowingProgress(true, user.id);
                  userAPI.unfollowUser(user.id).then(data => {
                      if (data.resultCode === 0) {
                          props.follow(user.id)
                      }
                      props.toggleIsFollowingProgress(false, user.id);
                  });
              }}>Follow</button>}</div>
      </span>
            <span>
        <span> <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.cityName"}</div>
        </span>
      </span>
        </div>)
        }</div>;
}

export default Users;

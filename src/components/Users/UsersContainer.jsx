import React from 'react';
import Users from './Users';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Proloader/Preloader";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            /></>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress,
})(UsersContainer);

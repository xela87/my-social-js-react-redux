import React from 'react';
import Users from './Users';
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Proloader/Preloader";
import {compose} from "redux";
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getFetching,
    getFollowingInProgress, getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
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
                   followingInProgress={this.props.followingInProgress}
            /></>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers: requestUsers
    })
)(UsersContainer)

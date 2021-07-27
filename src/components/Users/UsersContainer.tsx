import React from 'react';
import Users from './Users';
import {
    follow,
    requestUsers,
    unfollow,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Preloader from '../common/Proloader/Preloader';
import {compose} from 'redux';
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getFetching,
    getFollowingInProgress, getUsers
} from '../../redux/usersSelectors';
import {UserType} from '../../types/types';
import {AppStateType} from '../../redux/redux-store';

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void,
    unfollow: (id: number) => void,
}

type OwnPropsType = {
    title: string,
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            <h2>{this.props.title}</h2>
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
      mapStateToProps, {
        follow, unfollow, getUsers: requestUsers
    })
)(UsersContainer)

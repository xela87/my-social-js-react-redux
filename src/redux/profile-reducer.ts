import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {PhotosType, PostType, ProfileType } from '../types/types';
import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

export type InitialStateType = typeof initialState;

const initialState = {
  posts: [
    {id: 1, message: 'Hi', like: 24},
    {id: 2, message: 'How are you?', like: 12},
    {id: 3, message: 'Whats up?', like: 456},
    {id: 4, message: 'Bye', like: 78},
    {id: 5, message: 'Good', like: 22},
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
};

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 6, message: action.post, like: 0,}],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos} as ProfileType
      }
    default:
      return state;
  }
};

type ActionsTypes = AddPostActionType | SetUserProfileActionType | SetStatusActionType | DeletePostType | SavePhotoSuccessType

type AddPostActionType = {
  type: typeof ADD_POST,
  post: string
}
export const addPostActionCreator = (post: string): AddPostActionType => ({type: ADD_POST, post});
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
type SetStatusActionType = {
  type: typeof SET_STATUS,
  status: string | null
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
type DeletePostType = {
  type: typeof DELETE_POST,
  postId: number,
}
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId})
type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfileInfo = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data));
}

export const getStatus = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
  try {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
  } catch (error) {
    console.log(error.status)
  }
}

export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file: any) => async (dispatch: Dispatch<ActionsTypes>) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)

  if (response.data.resultCode === 0) {
    dispatch(getProfileInfo(userId))
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0])
  }
}

export default profileReducer;

import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {Dispatch} from 'redux';

const SET_USER_DATA = 'network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

type InitialStateType = {
  userId: number | null,
  login: string | null,
  email: string | null,
  isFetching: boolean,
  isAuth: boolean,
  captchaUrl: string | null,
}

const initialState: InitialStateType = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

type SetAuthUserDataPayloadType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
}

type ActionsTypes = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataPayloadType,
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch: Dispatch<ActionsTypes>) => {
  let data = await authAPI.me();
  if (data.resultCode === 0) {
    let {id, email, login} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let error = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
    dispatch(stopSubmit('login', {_error: error}));
  }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: Dispatch<ActionsTypes>) => {
  let data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;

import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

const initialState = {
    UserId: null,
    login: null,
    email: null,
    messages: [],
    isFetching: false,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        let error = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: error}));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;

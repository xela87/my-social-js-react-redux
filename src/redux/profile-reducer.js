const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const initialState = {
  posts: [
    { id: 1, message: 'Hi', like: 24 },
    { id: 2, message: 'How are you?', like: 12 },
    { id: 3, message: 'Whats up?', like: 456 },
    { id: 4, message: 'Bye', like: 78 },
    { id: 5, message: 'Good', like: 22 },
  ],
  newPostText: 'nothing',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        message: state.newPostText,
        like: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.message,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  message: text,
});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;
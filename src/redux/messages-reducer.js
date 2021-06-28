const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
  dialogs: [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Ben' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Miranda' },
    { id: 5, name: 'Steven' },
  ],
  messages: [
    { id: 1, message: 'hi' },
    { id: 2, message: 'ku' },
    { id: 3, message: 'bye' },
    { id: 4, message: 'good morning' },
    { id: 5, message: 'tomorrow' },
  ],
  newMessageBody: '',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: state.newMessageBody }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body)=> ({
  type: UPDATE_NEW_MESSAGE_BODY,
  message: body,
});

export default messagesReducer;

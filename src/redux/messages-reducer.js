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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.messageBody
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (messageBody) => ({ type: SEND_MESSAGE , messageBody});

export default messagesReducer;

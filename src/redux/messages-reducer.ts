const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsType = {
  id: number, name: string
}

type MessagesType = {
  id: number, message: string
}

let initialState = {
  dialogs: [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Ben'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Miranda'},
    {id: 5, name: 'Steven'},
  ] as Array<DialogsType>,
  messages: [
    {id: 1, message: 'hi'},
    {id: 2, message: 'ku'},
    {id: 3, message: 'bye'},
    {id: 4, message: 'good morning'},
    {id: 5, message: 'tomorrow'},
  ] as Array<MessagesType>,
};

export type InitialStateType = typeof initialState;

const messagesReducer = (state = initialState, action: SendMessageCreatorActionType): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.messageBody
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}],
      };
    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE,
  messageBody: string,
}

export const sendMessageCreator = (messageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, messageBody});

export default messagesReducer;

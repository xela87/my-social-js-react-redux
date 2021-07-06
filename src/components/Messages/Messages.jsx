import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import style from './Messages.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {TextArea} from "../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(100)

const MessageForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Enter your message"} name={"messageBody"}
                           component={TextArea} validate={[required,maxLength]}/>
                </div>
                <div>
                    <button>Send message</button>
                </div>
            </form>
    )
}
const MessageReduxForm = reduxForm ({form: 'message'})(MessageForm)


const Messages = (props) => {
    const addNewMessage = (formData) => {
        props.sendMessage(formData.messageBody)
        console.log(formData.messageBody)
    }
    let dialogsArray = props.dialogs.dialogs.map((dialogName) => (
        <DialogItem name={dialogName.name} id={dialogName.id} key={dialogName.id}/>
    ));
    let messagesArray = props.dialogs.messages.map((message) => <Message message={message.message} key={message.id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>{dialogsArray}</div>
            <div className={style.messages}>{messagesArray}</div>
            <MessageReduxForm onSubmit={addNewMessage} />
        </div>
    );
};

export default Messages;

import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import style from './Messages.module.css';

const Messages = (props) => {
    let dialogsArray = props.dialogs.dialogs.map((dialogName) => (
        <DialogItem name={dialogName.name} id={dialogName.id} key={dialogName.id}/>
    ));
    let messagesArray = props.dialogs.messages.map((message) => <Message message={message.message} key={message.id}/>);
    let newMessageBody = props.dialogs.newMessageBody;
    const onSendMessageClick = () => {
        props.sendMessage()
    };
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    };
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>{dialogsArray}</div>
            <div className={style.messages}>{messagesArray}</div>
            <div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter message'/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;

import {connect} from 'react-redux';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/messages-reducer';
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

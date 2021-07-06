import {connect} from 'react-redux';
import {sendMessageCreator} from '../../redux/messages-reducer';
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageBody) => {
            dispatch(sendMessageCreator(messageBody));
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)

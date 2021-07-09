import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialiseApp} from "./redux/app-reducer";
import Preloader from "./components/common/Proloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initialiseApp();
    }

    render() {
        if (!this.props.initialised) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <section className="content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/messages" render={() => <MessagesContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialised: state.app.initialised
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initialiseApp}))
(App)


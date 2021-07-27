import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialiseApp} from "./redux/app-reducer";
import Preloader from "./components/common/Proloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspence";
import UsersContainer from "./components/Users/UsersContainer";

const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert(reason)
    }
    componentDidMount() {
        this.props.initialiseApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                    <Switch>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Redirect exact from="/" to="/profile" />

                    <Route path="/messages"
                           render={withSuspense(MessagesContainer)}/>
                    <Route path="/news"
                           render={() => <News/>}/>
                    <Route path="/music"
                           render={() => <Music/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer title={"Users"} /> }/>
                    <Route path="/settings"
                           render={() => <Settings/>}/>
                    <Route path="/login"
                           render={() => <Login/>}/>
                    <Route render={() => <div>404 PAGE NOT FOUND </div> } />
                </Switch>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialised: state.app.initialised
});

let AppContainer = compose(withRouter, connect(mapStateToProps, {initialiseApp}))(App)

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;

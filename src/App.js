import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <section className="content">
                <Route path="/profile" render={() => <ProfileContainer/>}/>
                <Route path="/messages" render={() => <MessagesContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </section>
        </div>
    );
};
export default App;

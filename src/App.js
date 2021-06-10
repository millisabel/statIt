import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Header from "./components/Header/Header";
import Scanner from "./components/Scanner/Scanner";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Statics from "./components/Statics/Statics";

import './assets/style/layout/layout.css';

function App() {
    return (
        <Router>
            <div className={'wrap'}>
                <Header/>
                <Nav/>
                <Switch>
                    <Redirect push from="/statIt"  to="/info"/>
                    <Route path="/statics" component={Profile} />
                    <Route path="/info" component={Scanner} />
                    <Route path="/profile" component={Statics} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;



import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from "./components/Header/Header";
import Scanner from "./components/Scanner/Scanner";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Statics from "./components/Statics/Statics";

import './assets/style/layout/layout.css';
import scanner from "./components/Scanner/Scanner.module.css";
import TestLinks from "./components/TestLinks/TestLinks";

function App() {
    return (
        <Router>
            <div className={'wrap'}>
                <Header/>
                <Nav/>
                <Route exact path="/statIt">
                    <p className={scanner.text}>Временный блок, эмуляция сканера</p>
                    <TestLinks/>
                </Route>
                <Switch>
                    <Route path="/statics" component={Profile} />
                    <Route path="/info" component={Scanner} />
                    <Route path="/profile" component={Statics} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;



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
import Statistics from "./components/Statistics/Statistics";

import './assets/style/layout/layout.css';

function App() {
    return (
        <Router>
            <div className={'wrap'}>
                <Header/>
                <Nav/>
                <Switch>
                    <Redirect push from="/statIt"  to="/api"/>
                    <Route path="/statistics" component={Statistics} />
                    <Route path="/api" component={Scanner} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;



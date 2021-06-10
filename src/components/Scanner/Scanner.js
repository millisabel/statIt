import React from 'react';
import TestLinks from "../TestLinks/TestLinks";

import scanner from "./Scanner.module.css";
import {Route, Switch} from "react-router-dom";
import InfoWithRouter from "../Info/Info";
import ThanksWithRouter from "../Thanks/Thanks";
import NoMatch from "../NoMatch/NoMatch";

const Scanner = () => {
    return (
        <div className={scanner.wrap}>
            <Switch>
                <Route exact path="/info">
                    <p className={scanner.text}>Временный блок, эмуляция сканера</p>
                    <TestLinks/>
                </Route>
                <Route path="/info/:businessId/:pointerId">
                    <InfoWithRouter/>
                </Route>
                <Route path="/info/thanks">
                    <ThanksWithRouter/>
                </Route>
                <Route>
                    <NoMatch/>
                </Route>
            </Switch>
        </div>
    );
};

export default Scanner;
import React from "react";
import Scanner from "./Scanner";
import {render } from '@testing-library/react';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

test('test', ()=>{
    render(
        <Router history={createMemoryHistory()}>
            <Scanner/>
        </Router>
    );
});
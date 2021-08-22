import React from "react";
import TestLinks from "./TestLinks";
import {render, screen } from '@testing-library/react';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

it('', ()=>{
    render(
        <Router history={createMemoryHistory()}>
            <TestLinks/>
        </Router>
    );
});
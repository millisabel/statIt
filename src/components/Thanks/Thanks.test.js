import Thanks from "./Thanks";
import {render, screen } from '@testing-library/react';
import {Router } from 'react-router-dom';
import {createMemoryHistory} from "history";
import React from "react";

test('test', ()=>{
    render(
        <Router history={createMemoryHistory()}>
            <Thanks />
        </Router>
    );
});
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {Router } from 'react-router-dom';
import {fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import GoBack from "./GoBack";

const myMockFn = jest.fn();

describe('render goBack component', ()=>{
    test('should render goBack', () => {
        render(
            <Router history={createMemoryHistory()}>
                <GoBack isShow={true}/>
            </Router>
        );
        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    test('should not render goBack', () => {
        render(
            <Router history={createMemoryHistory()}>
                <GoBack isShow={false}/>
            </Router>
        );
        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    test('should click to goBack', () => {
        render(
            <Router history={createMemoryHistory()}>
                <GoBack isShow={true} onClick={myMockFn}/>
            </Router>
        );
        fireEvent.click(screen.queryByRole('link', {target: {value: false}}));
        expect(myMockFn).toHaveBeenCalledTimes(1);
    });
});






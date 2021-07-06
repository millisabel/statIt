import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from "history";
import {fireEvent, render, screen} from '@testing-library/react';
import InfoWithRouter from "./Info";

describe('info', () => {

    it('send should be disabled on boot', () => {
        render(
            <Router history={createMemoryHistory()}>
                <InfoWithRouter/>
            </Router>
        );
        const btnSend = screen.getByRole('link', {
            name: /send/i
        });
        expect(btnSend).toHaveAttribute('disabled');
    });

    it('img click', async () => {
        render(
            <Router history={createMemoryHistory()}>
                <InfoWithRouter/>
            </Router>
        );
        const userImg = await jest.fn();
        const btnAddImage = screen.getByRole('button', {
            name: /maximum number of files \- 3, maximum size \- 5mb/i
        });
        fireEvent.click(btnAddImage);
    });

    it('mess', async () => {
        render(
            <Router history={createMemoryHistory()}>
                <InfoWithRouter/>
            </Router>
        );
        const btnAddImage = screen.getByText(/to send a message, select a rating/i);
    });

    it('rating', async () => {
        render(
            <Router history={createMemoryHistory()}>
                <InfoWithRouter/>
            </Router>
        );
        const rating = 0;
        const ratingChanged = await jest.fn();
    });
});
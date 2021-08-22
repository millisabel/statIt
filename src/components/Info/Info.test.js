import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from "history";
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import InfoWithRouter from "./Info";
import {act} from 'react-dom/test-utils';


import Feedback from "../Feedback/Feedback";

jest.mock("Feedback", () => ({
    Feedback: jest.fn(() => (
        <div data-testid="Feedback"/>
    ))
}));

const fakeUser = [
    [
        [
            {
                business: "silpo",
                address: "kyiv",
            }
        ],
        [
            {
                business: "silpo",
                address: "kyiv",
            }
        ],
    ],
    [
        [
            {
                object_address: "New York, Fifth Avenue",
            },
            {
                object_address: "New York, Fifth Avenue",
            }
        ]
    ]
];

describe('render info', () => {
    it('fetch', async () => {

        jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
            return Promise.resolve({
                json: () => Promise.resolve(fakeUser),
            })
        });

        render(
            <Router history={createMemoryHistory()}>
                <InfoWithRouter businessId='1' pointerId='1'/>
            </Router>
        );

        await waitFor(() => {
            expect(getByText("silpo")).toBeInTheDocument();
        });
        // expect(screen.getByText(/silpo/i)).toBeInTheDocument();
        // expect(screen.getByText(/New York, Fifth Avenue/i)).toBeInTheDocument();
        global.fetch.mockRestore();
    });
});


// it('send should be disabled on boot', () => {
//     render(
//         <Router history={createMemoryHistory()}>
//             <InfoWithRouter/>
//         </Router>
//     );
//     const btnSend = screen.getByRole('link', {
//         name: /send/i
//     });
//     expect(btnSend).toHaveAttribute('disabled');
// });

// it('img click', async () => {
//     render(
//         <Router history={createMemoryHistory()}>
//             <InfoWithRouter/>
//         </Router>
//     );
//
//     const setImg = await jest.fn();
//     const userImg = await jest.fn();
//     const btnAddImage = screen.getByRole('button', {
//         name: /maximum number of files \- 3, maximum size \- 5mb/i
//     });
//     fireEvent.change(btnAddImage);
//     userImg.mockReturnValueOnce({});
// });

// it('mess', async () => {
//     render(
//         <Router history={createMemoryHistory()}>
//             <InfoWithRouter/>
//         </Router>
//     );
//     const btnAddImage = screen.getByText(/to send a message, select a rating/i);
// });

// it('rating', async () => {
//     render(
//         <Router history={createMemoryHistory()}>
//             <InfoWithRouter/>
//         </Router>
//     );
//     screen.debug();
//     expect(screen.queryByTestId("Feedback"))
//         .toBeInTheDocument();
// });
import React from "react";
import {render, screen} from "@testing-library/react";
import Comment from "./Comment";

const getString = (length) => {
    let str = '';
    for (let i = 0; i < length; i++) {
        str += 'a';
    }
    return str;
};

describe('Message type, when entering a comment', () => {
    it('when the comment is empty', ()=>{
        render(<Comment userComment=''/>);
        const mess = screen.getByTestId('mess');
        expect(mess).toBeInTheDocument();
    });

    it('when the length of the comment is less than 3 characters, a message should appear', ()=>{
        render(<Comment userComment={getString(2)}/>);
        expect(screen.getByText('min 3 / max 200 characters')).toBeInTheDocument();
    });

    it('when comment length is more than 4 but less than 200, a message should be displayed', ()=>{
        render(<Comment userComment={getString(4)}/>);
        expect(screen.getByText(`${getString(4).length} / 200`)).toBeInTheDocument();
    });

    it('when the comment length is 200 characters, a message should appear', ()=>{
        render(<Comment userComment={getString(200)}/>);
        expect(screen.getByText('maximum number of characters')).toBeInTheDocument();
    });
});

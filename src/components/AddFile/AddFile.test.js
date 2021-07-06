import React from "react";
import AddFile from "./AddFile";
import {render, screen} from "@testing-library/react";

it('', ()=>{
    render(<AddFile/>);
    const btn = screen.getByRole('button', {
        name: /maximum number of files \- 3, maximum size \- 5mb/i
    });

    // screen.debug();
});
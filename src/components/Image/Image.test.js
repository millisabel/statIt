import React from "react";
import Image from "./Image";
import {render, screen} from "@testing-library/react";

test('render Image', ()=> {
    render(<Image alt={'text'}/>);
    expect(screen.getByAltText('text')).toBeInTheDocument();
});
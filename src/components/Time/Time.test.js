import React from "react";
import Time from "./Time";
import {render, screen} from "@testing-library/react";

jest.useFakeTimers();

test('should render the elements of the component About', () => {
    render(<Time/>);
    expect(setTimeout).toHaveBeenCalledTimes(1);
});
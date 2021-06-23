import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import Answer from "./Answer";

const myMockFn = jest.fn();

it('should render Answer', () => {
    render(<Answer/>);
    const checkbox = screen.getByLabelText('i want to get answer');
    expect(checkbox).toBeInTheDocument();
    checkbox.onClick={myMockFn};
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
});
import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import Answer from "./Answer";

const isAnswer = jest.fn();

it('should render Answer', () => {
    render(<Answer onClick = {isAnswer}/>);
    const checkbox = screen.getByRole('checkbox', {
        name: /i want to get answer/i
    });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
});



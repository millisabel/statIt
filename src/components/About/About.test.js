import React from "react";
import About from "./About";
import {render, screen} from "@testing-library/react";

const mockData = {
    businessName: 'testName',
    businessPoint: 'businessPoint',
    businessAddress: 'testAddress',
    businessLogo: 'logo',
};

test('should render the elements of the component About', () => {
    render(<About {...mockData}/>);
    expect(screen.getByText(mockData.businessName)).toHaveTextContent(mockData.businessName);
    expect(screen.getByText(mockData.businessPoint)).toHaveTextContent(mockData.businessPoint);
    // expect(screen.getByText(mockData.businessAddress)).toHaveTextContent(mockData.businessAddress);
    // expect(screen.getByAltText(mockData.businessLogo)).toBeInTheDocument();
});
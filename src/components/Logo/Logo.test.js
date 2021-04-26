import Logo from "./Logo";
import {render, screen } from '@testing-library/react';

test('renders learn react link', () => {
    render (<Logo/>);
    expect(screen.getByRole('heading', { name: /starit/i })).toHaveTextContent('starIT');
    expect(screen.getByRole('img', { name: /logotype/i })).toBeInTheDocument();
});
import Profile from "./Profile";
import {render, screen } from '@testing-library/react';

it('', ()=>{
    render(<Profile/>)
    expect(screen.getByText('Profile')).toBeInTheDocument();
});
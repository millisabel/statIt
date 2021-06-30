import Statistics from "./Statistics";
import {render, screen } from '@testing-library/react';

it('', ()=>{
    render(<Statistics/>)
    expect(screen.getByText('Statistics')).toBeInTheDocument();
});
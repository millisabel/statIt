import React from 'react';
import Header from "./Header";
import {render, screen} from '@testing-library/react';

test('test render Header', async () => {
    render(<Header isShow = {true}/>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
});
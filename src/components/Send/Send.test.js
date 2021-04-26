import Send from "./Send";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

const handleSubmit = jest.fn();

test('renders learn react link', async() => {
    // const {unmount} = render(<Send onSubmit = {handleSubmit}/>);
    // const btnSend = screen.getByRole('button', {name: /send/i});
    // expect(btnSend).toBeInTheDocument();
    // screen.debug(btnSend);
    // fireEvent.click(btnSend);
    // await waitFor(() => {
    //     expect(handleSubmit).toHaveBeenCalledTimes(1);
    // });
    // unmount();
});
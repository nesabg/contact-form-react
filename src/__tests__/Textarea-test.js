import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Textarea from '../models/Textarea';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Test textarea element when we add some text', () => {
    const { getByLabelText } = render(<Textarea labelText="Test" value="alfa" onChangeFunc={() => {}} />)

    const element = getByLabelText('Textarea')

    expect(element).toBeTruthy()

    // fireEvent.change(element, {target: {value: 'test value'}})

    // expect(element.value).toBe('test value')
})
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Text } from './Text.component';

test('if Text has a correct title and text', () => {
    const style = {
        color: '#FF88AD',
        fontStyle: 'normal',
    };
    const text =
        'some text here for testing component: jdkjdsjiaofjgoidfgiojdsoifgjsdkjfgsoigjoirjgiorjogijriojiogjdfgjodijgiorjgoirjgoiejogjeoirjgoiejgi';
    const { getByText } = render(
        <Text text={text} style={style} classType="" />
    );
    expect(getByText(text)).toHaveTextContent(text);
});

import React from 'react';
import { within, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header.component';

test('Header has pink logo', () => {
    const { getAllByTestId, getByTestId } = render(<Header color="pink" />);
    const header = getByTestId('app-header');
    const logoBlueInHeader = within(header).getAllByTestId('logoPink');
    expect(logoBlueInHeader.length).toBe(1);
});

test('Header has blue logo', () => {
    const { getAllByTestId, getByTestId } = render(
        <Header data-testid="app-header" color="blue" />
    );
    const header = getByTestId('app-header');
    const logoBlueInHeader = within(header).getAllByTestId('logoBlue');
    expect(logoBlueInHeader.length).toBe(1);
});

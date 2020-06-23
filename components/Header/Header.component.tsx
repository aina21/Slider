import React from 'react';
import styled from 'styled-components';
import LogoBlue from '@static/logoblue.svg';
import LogoPink from '@static/logopink.svg';

type HeaderProps = {
    color: string;
};

const StyledHeader = styled.div`
    width: 100%;
    height: 60px;
    text-align: center;
`;

function findLogo(color: string) {
    if (color == 'pink') {
        return <LogoPink data-testid="logoPink" />;
    }
    return <LogoBlue data-testid="logoBlue" />;
}
export const Header = ({ color }: HeaderProps) => (
    <StyledHeader data-testid="app-header">{findLogo(color)}</StyledHeader>
);

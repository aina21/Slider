import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/Icon/Icon';

type HeaderProps = {
    color: 'blue' | 'pink';
};

const StyledHeader = styled.div`
    width: 100%;
    height: 60px;
    text-align: center;
    background-color: black;
    padding-bottom: 30px;
    padding-top: 30px;
`;

export const Header = ({ color }: HeaderProps) => (
    <StyledHeader>
        <Icon name={color}></Icon>
    </StyledHeader>
);

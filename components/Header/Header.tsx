import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@components/Icon/Icon';

type HeaderProps = {
    color: 'blue' | 'pink';
};

const StyledHeader = styled.div<{ color: string }>`
    width: 100%;
    height: 60px;
    text-align: center;
    background-color: black;
    padding-bottom: 30px;
    padding-top: 30px;

    .a {
        fill: none;
        ${({ color }) =>
            color &&
            css`
                stroke: ${color === 'blue' ? '#88FFED' : '#FF88AD'};
            `};
    }
`;

export const Header = ({ color }: HeaderProps) => (
    <StyledHeader color={color}>
        <Icon name={color}></Icon>
    </StyledHeader>
);

import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
    width: 60px;
    height: 60px;
    text-align: center;
    &.center {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    padding: 10px;
`;

export const Icon = (props) => (
    <StyledIcon className="center">{props.children}</StyledIcon>
);

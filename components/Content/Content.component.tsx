import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    width: 100%;
    height: auto;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px 20px 10px 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Content = (props) => (
    <StyledSection>{props.children}</StyledSection>
);

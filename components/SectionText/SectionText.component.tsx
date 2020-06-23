import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    width: 60rem;
    height: auto;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px 20px 70px 20px;

    &.center {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const SectionText = (props) => (
    <StyledSection className="center">{props.children}</StyledSection>
);

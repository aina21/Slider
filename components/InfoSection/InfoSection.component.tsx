import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    width: 60rem;
    height: auto;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px 20px 10px 20px;
`;

export const InfoSection = (props) => (
    <StyledSection>{props.children}</StyledSection>
);

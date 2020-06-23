import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/Icon/Icon.component';
import HappyFace from '@static/happyface.svg';
import CupCake from '@static/cupcake.svg';

const StyledSection = styled.section`
    width: 60rem;
    height: auto;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px 20px 10px 20px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

function findLogo(logo: string) {
    if (logo === 'cupcake') {
        return <CupCake></CupCake>;
    } else {
        return <HappyFace></HappyFace>;
    }
}

export const InfoSection = (props) => (
    <StyledSection>
        <Icon>{findLogo(props.logo)}</Icon>
        {props.children}
    </StyledSection>
);

import React, { FC } from 'react';
import styled from 'styled-components';
import HappyFace from '@static/happyface.svg';
import CupCake from '@static/cupcake.svg';
import BlueLogo from '@static/logoblue.svg';
import PinkLogo from '@static/logopink.svg';

interface IconProps {
    name?: 'blue' | 'pink' | 'happyFace' | 'cupcake';
}

const getIcon = (name: string) => {
    switch (name) {
        case 'blue':
            return <BlueLogo />;
        case 'pink':
            return <PinkLogo />;
        case 'happyFace':
            return <HappyFace />;
        case 'cupcake':
            return <CupCake />;
        default:
            return <HappyFace />;
    }
};

const StyledIcon = styled.div`
    width: 60px;
    height: 60px;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;

    padding: 10px;
`;
true;

export const Icon: FC<IconProps> = ({ name }) => (
    <StyledIcon>{getIcon(name)}</StyledIcon>
);

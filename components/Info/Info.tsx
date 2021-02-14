import React, { FC } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/Icon/Icon';
import { Text } from '@components/Text/Text';

interface InfoProps {
    icon: string;
    company: string;
    infoText: string;
}

const StyledInfo = styled.section`
    width: 100%;
    height: auto;
    background-color: black;
    color: white;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    .infoText {
        display:flex;
        flex-direction:column;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const Info: FC<InfoProps> = ({ icon, infoText, company }) => {
    return (
        <StyledInfo>
            <Icon name={icon === 'face' ? 'happyFace' : 'cupcake'} />

            <div className="infoText">
                <Text size="h3" fontWeight="bolder">
                    {infoText}
                </Text>
                <Text size={icon === 'face' ? 'h4' : 'h3'} fontWeight={icon === 'face' ? 'light' : 'bolder'}>
                    {company}
                </Text>
            </div>
        </StyledInfo>
    );
};

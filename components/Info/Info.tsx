import React, { FC } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/Icon/Icon';
import { Text } from '@components/Text/Text';

interface InfoProps {
    icon: string;
}

const StyledInfo = styled.section`
    width: 100%;
    height: auto;
    background-color: black;
    color: white;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const Info: FC<InfoProps> = ({ icon }) => {
    return (
        <>
            {icon === 'face' ? (
                <StyledInfo>
                    <Icon name="happyFace" />
                    <Text size="h4" fontWeight="bolder">
                        Mr. Face
                    </Text>
                    <Text size="h4" fontWeight="light">
                        Karma Guru @ Face Co?
                    </Text>
                </StyledInfo>
            ) : (
                <StyledInfo>
                    <Icon name="cupcake" />
                    <Text size="h4" fontWeight="bolder">
                        The whole team
                    </Text>
                    <Text size="h4" fontWeight="bolder">
                        @ The Pancake Collective?
                    </Text>
                </StyledInfo>
            )}
        </>
    );
};

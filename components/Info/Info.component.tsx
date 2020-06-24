import React, { FC } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/Icon/Icon.component';
import { Text } from '@components/Text/Text.component';

interface InfoProps {
    isFace: boolean;
}

const StyledInfo = styled.section`
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

export const Info: FC<InfoProps> = ({ isFace }) => {
    return (
        <>
            {isFace ? (
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

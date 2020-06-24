import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/Text/Text.component';
import { Header } from '@components/Header/Header.component';
import { Info } from '@components/Info/Info.component';

interface SlideProps {
    isPink: boolean;
}

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

const SectionText = styled.section`
    width: 60rem;
    height: auto;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px 20px 70px 0px;

    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const Slide = ({ isPink }: SlideProps) => (
    <>
        {isPink ? (
            <StyledSection>
                <Header color="pink" />
                <SectionText>
                    <Text fontWeight="bolder" size="h1" letterSpacing={0.8}>
                        An experience that makes us feel like we?re covered in
                        maple syrup ?
                    </Text>
                    <Text
                        color="pink"
                        fontWeight="bolder"
                        size="h1"
                        letterSpacing={0.8}>
                        It?s a good thingfalse
                    </Text>
                </SectionText>
                <Info isFace={false} />
            </StyledSection>
        ) : (
            <StyledSection>
                <Header color="blue" />
                <SectionText>
                    <Text fontWeight="bolder" size="h1" letterSpacing={0.8}>
                        This piece of software is
                    </Text>
                    <Text
                        color="blue"
                        fontWeight="bolder"
                        fontStyle="italic"
                        size="h1">
                        {' '}
                        the shit
                    </Text>
                    <Text fontWeight="bolder" size="h1" letterSpacing={0.8}>
                        , I?ve never tried anything like it.
                    </Text>
                </SectionText>
                <Info isFace={true} />
            </StyledSection>
        )}
    </>
);

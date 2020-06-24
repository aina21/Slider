import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/Text/Text.component';
import { Header } from '@components/Header/Header.component';
import { Info } from '@components/Info/Info.component';

export interface SlideProps {
    color: 'blue' | 'pink';
    icon: 'face' | 'cupcake';
    text: string;
    highlightedText?: string;
    extendedText?: string;
}

const StyledSection = styled.div`
    height: 400px;
    background-color: black;
    color: white;
    text-align: center;
    flex-grow: 1;
    width: 120rem;
`;

const SectionText = styled.section`
    height: auto;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px 20px 70px 0px;
    margin-left: auto;
    margin-right: auto;
`;

export const Slide = ({
    color,
    icon,
    text,
    highlightedText,
    extendedText,
}: SlideProps) => (
    <StyledSection>
        <Header color={color} />
        <SectionText>
            <Text
                fontWeight="bolder"
                size="h1"
                letterSpacing={0.8}
                color="white">
                {text}
            </Text>
            <Text
                color={color}
                fontWeight="bolder"
                size="h1"
                fontStyle={color == 'pink' ? 'normal' : 'italic'}
                letterSpacing={0.8}>
                {highlightedText}
            </Text>
            <Text
                color="white"
                fontWeight="bolder"
                size="h1"
                letterSpacing={0.8}>
                {extendedText}
            </Text>
        </SectionText>
        <Info icon={icon} />
    </StyledSection>
);

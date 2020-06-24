import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface SliderContentProps {
    translate?: number;
    transition?: number;
    width?: number;
}

const SliderContentStyled = styled.div<SliderContentProps>`
    // ${({ translate, transition, width }) => css`
    //     transform: translateX(-${translate}px);
    //     transition: transform ease-out ${transition}s;
    //     width: ${width}px;
    // `}
    width: fit-content;
    height: 500px;
    display:flex;
    align-items: center;
    background-color: black;
    flex-wrap: wrap;
    flex-direction:column;
`;

export const SliderContent: FC<SliderContentProps> = ({ children }) => (
    <SliderContentStyled>{children}</SliderContentStyled>
);

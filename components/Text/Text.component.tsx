import React, { FC, Children } from 'react';
import styled, { css } from 'styled-components';

interface TextProps {
    color?: 'blue' | 'pink';
    fontStyle?: 'italic' | 'normal';
    size?: 'h1' | 'h4';
    fontWeight?: 'light' | 'bolder' | 'normal';
    letterSpacing?: number;
}

const getColor = (color: string) => {
    switch (color) {
        case 'blue':
            return '#88FFED';
        case 'pink':
            return '#FF88AD';
        default:
            return '#FFFFFF';
    }
};

const getSize = (size: string) => {
    switch (size) {
        case 'h1':
            return 40;
        case 'h4':
            return 22;
        default:
            return 40;
    }
};

const StyledText = styled.div<TextProps>`
    color: ${({ color }) => getColor(color)}};
    
    ${({ size, fontStyle, fontWeight, letterSpacing = 0 }) => css`
        font-weight: ${fontWeight};
        font-size: ${getSize(size)}px;
        font-style: ${fontStyle};
        letter-spacing: ${letterSpacing};
    `}
}
    text-align: center;
    text-align-last: center;
    display: block;    
    width:100%;
`;

export const Text: FC<TextProps> = ({
    children,
    color,
    fontStyle,
    size,
    fontWeight,
}) => {
    return (
        <StyledText
            color={color}
            fontStyle={fontStyle}
            size={size}
            fontWeight={fontWeight}>
            {children}
        </StyledText>
    );
};

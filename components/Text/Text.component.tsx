import React from 'react';
import styled from 'styled-components';

type TextProps = {
    text: string;
    style: object;
    classType: string;
};

const StyledText = styled.span`
    color: ${(props) => props.style.color};

    &.content {
        text-align: center;
        font-size: 40px;
        font-weight: bolder;
        font-style: ${(props) => props.style.fontStyle};
    }

    &.footNote {
        font-size: 22px;
        font-weight: 200;
        text-align-last: center;
        font-weight: ${(props) => props.style.fontWeight};
    }
`;

export const Text = ({ text, style, classType }: TextProps) => (
    <StyledText style={style} className={classType}>
        {text}
    </StyledText>
);

Text.defaultProps = {
    text: '',
    style: {
        color: 'white',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    classType: '',
};

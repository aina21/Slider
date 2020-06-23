import React, { FunctionComponent } from 'react';
import { Text } from '@components/Text/Text.component';

export const TextHighlight: FunctionComponent<{
    text: string;
    color: string;
}> = ({ text = '', color = 'blue' }) => {
    const stylePink = {
        color: '#FF88AD',
        fontStyle: 'normal',
    };

    const styleBlue = {
        color: '#88FFED',
        fontStyle: 'italic',
    };

    if (color == 'pink') {
        return <Text style={stylePink} text={text} classType="content"></Text>;
    }
    return <Text style={styleBlue} text={text} classType="content"></Text>;
};

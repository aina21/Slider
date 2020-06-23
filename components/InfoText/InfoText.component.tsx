import React, { FunctionComponent } from 'react';
import { Text } from '@components/Text/Text.component';

export const InfoText: FunctionComponent<{
    text: string;
    fontWeight: number;
}> = ({ text = '', fontWeight = 700 }) => {
    const style = {
        fontWeight: fontWeight,
    };
    return (
        <div>
            <Text style={style} text={text} classType="footNote"></Text>
        </div>
    );
};

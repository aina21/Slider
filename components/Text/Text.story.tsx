import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './Text.component';

const style = {
    color: 'black',
    fontStyle: 'normal',
};
storiesOf('Text', module).add('Text', () => (
    <Text
        text="An experience that makes us feel like we?re covered in maple syrup"
        style={style}
        classType="content"
    />
));

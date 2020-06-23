import React from 'react';
import { storiesOf } from '@storybook/react';
import { SectionText } from './SectionText.component';
import { Text } from '@components/Text/Text.component';
import { TextHighlight } from '@components/TextHighlight/TextHighlight.component';

storiesOf('SectionText/SectionTextPink', module).add('SectionText', () => (
    <SectionText>
        <Text
            text="An experience that makes us feel like we?re covered in maple syrup ? "
            classType="content"
        />
        <TextHighlight color="pink" text="It's a good thing" />
    </SectionText>
));
storiesOf('SectionText/SectionTextBlue', module).add('SectionText', () => (
    <SectionText>
        <Text text="This piece of software is " classType="content" />
        <TextHighlight color="blue" text="the shit" />
        <Text text=", I?ve never tried anything like it." classType="content" />
    </SectionText>
));

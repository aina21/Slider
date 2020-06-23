import React from 'react';
import { storiesOf } from '@storybook/react';
import { InfoText } from './InfoText.component';

storiesOf('InfoText/InfoText', module).add('TextHighlight', () => (
    <InfoText fontWeight={100} text="Karma Guru @ Face Co?" />
));

storiesOf('InfoText/InfoText-MrFace', module).add('TextHighlight', () => (
    <InfoText fontWeight={700} text="Mr. Face" />
));
storiesOf('InfoText/InfoText-Cupcake', module).add('TextHighlight', () => (
    <InfoText
        fontWeight={700}
        text="The whole team @ The Pancake Collective?"
    />
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextHighlight } from './TextHighlight.component';

storiesOf('TextHighlight/TextHighlightPink', module).add(
    'TextHighlight',
    () => <TextHighlight color="pink" text="It's a good thing" />
);

storiesOf('TextHighlight/TextHighlightBlue', module).add(
    'TextHighlight',
    () => <TextHighlight color="blue" text="the shit" />
);

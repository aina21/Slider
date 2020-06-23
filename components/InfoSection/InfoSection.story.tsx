import React from 'react';
import { storiesOf } from '@storybook/react';
import { InfoSection } from './InfoSection.component';
import { InfoText } from '@components/InfoText/InfoText.component';

storiesOf('InfoSection/HappyFace', module).add('SectionText', () => (
    <InfoSection logo="happyface">
        <InfoText fontWeight={700} text="Mr. Face" />
        <InfoText fontWeight={100} text="Karma Guru @ Face Co?" />
    </InfoSection>
));
storiesOf('InfoSection/Cupcake', module).add('SectionText', () => (
    <InfoSection logo="cupcake">
        <InfoText fontWeight={700} text="The whole team" />
        <InfoText fontWeight={700} text="@ The Pancake Collective?" />
    </InfoSection>
));

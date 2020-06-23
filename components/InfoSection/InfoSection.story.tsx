import React from 'react';
import { storiesOf } from '@storybook/react';
import { InfoSection } from './InfoSection.component';
import { InfoText } from '@components/InfoText/InfoText.component';
import { Icon } from '@components/Icon/Icon.component';
import HappyFace from '@static/happyface.svg';
import CupCake from '@static/cupcake.svg';

storiesOf('InfoSection/cupCake', module).add('SectionText', () => (
    <InfoSection>
        <Icon>
            <HappyFace></HappyFace>
        </Icon>
        <InfoText fontWeight={700} text="Mr. Face" />
        <InfoText fontWeight={100} text="Karma Guru @ Face Co?" />
    </InfoSection>
));
storiesOf('InfoSection/HappyFace', module).add('SectionText', () => (
    <InfoSection>
        <Icon>
            <CupCake></CupCake>
        </Icon>
        <InfoText fontWeight={700} text="The whole team" />
        <InfoText fontWeight={700} text="@ The Pancake Collective?" />
    </InfoSection>
));

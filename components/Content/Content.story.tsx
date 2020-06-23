import React from 'react';
import { storiesOf } from '@storybook/react';
import { InfoText } from '@components/InfoText/InfoText.component';
import { Content } from './Content.component';
import { SectionText } from '@components/SectionText/SectionText.component';
import { InfoSection } from '@components/InfoSection/InfoSection.component';
import { Text } from '@components/Text/Text.component';
import { TextHighlight } from '@components/TextHighlight/TextHighlight.component';

storiesOf('Content', module).add('SectionText', () => (
    <Content>
        <SectionText>
            <Text text="This piece of software is " classType="content" />
            <TextHighlight color="blue" text="the shit" />
            <Text
                text=", I?ve never tried anything like it."
                classType="content"
            />
        </SectionText>
        <InfoSection logo="happyface">
            <InfoText fontWeight={700} text="Mr. Face" />
            <InfoText fontWeight={100} text="Karma Guru @ Face Co?" />
        </InfoSection>
    </Content>
));

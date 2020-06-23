import Head from 'next/head';
import { Layout } from '@components/Layout/Layout.component';
import { SectionText } from '@components/SectionText/SectionText.component';
import { Content } from '@components/Content/Content.component';
import { TextHighlight } from '@components/TextHighlight/TextHighlight.component';
import { InfoSection } from '@components/InfoSection/InfoSection.component';
import { InfoText } from '@components/InfoText/InfoText.component';
import { Text } from '@components/Text/Text.component';

export default function Index() {
    return (
        <Layout color="blue">
            <Content>
                <SectionText>
                    <Text
                        text="This piece of software is "
                        classType="content"
                    />
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
        </Layout>
    );
}

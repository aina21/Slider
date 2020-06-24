import Head from 'next/head';
import { Slide } from '@components/Slide/Slide.component';

export default function Index() {
    return (
        // <Layout color="blue">
        //     <Content>
        //         <SectionText>
        //             <Text
        //                 text="This piece of software is "
        //                 classType="content"
        //             />
        //             <TextHighlight color="blue" text="the shit" />
        //             <Text
        //                 text=", I?ve never tried anything like it."
        //                 classType="content"
        //             />
        //         </SectionText>
        //         <InfoSection logo="happyface">
        //             <InfoText fontWeight={700} text="Mr. Face" />
        //             <InfoText fontWeight={100} text="Karma Guru @ Face Co?" />
        //         </InfoSection>
        //     </Content>
        // </Layout>
        <Slide isPink={false}></Slide>
    );
}

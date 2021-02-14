import Head from 'next/head';
import { SlideProps } from '@components/Slide/Slide';
import { Slider } from '@components/Slider/Slider';

export default function Index() {
    const slides: SlideProps[] = [
        {
            color: 'blue',
            icon: 'face',
            text: 'This piece of software is',
            highlightedText: ' the shit',
            extendedText: ', I’ve never tried anything like it.',
            infoText: "Mr. Face",
            company:"Karma Guru @ Face Co™",
        },
        {
            color: 'blue',
            icon: 'face',
            text: 'This piece of software is',
            highlightedText: ' the shit',
            extendedText: ', I’ve never tried anything like it.',
            infoText: "Mr. Face",
            company:"Karma Guru @ Face Co™",
        },
        {
            color: 'blue',
            icon: 'cupcake',
            text: 'This piece of software is',
            highlightedText: ' the shit',
            extendedText: ', I’ve never tried anything like it.',
            infoText: "Mr. Face",
            company:"Karma Guru @ Face Co™",
        },
        {
            color: 'pink',
            icon: 'cupcake',
            text: 'An experience that makes us feel like we’re covered in maple syrup –',
            highlightedText: ' It’s a good thing',
            infoText: "The whole team ",
            company:"@ The Pancake Collective™"
        },
        {
            color: 'pink',
            icon: 'cupcake',
            text: 'An experience that makes us feel like we’re covered in maple syrup –',
            highlightedText: ' It’s a good thing',
            infoText: "The whole team ",
            company:"@ The Pancake Collective™"
        },
    ];
    return (
        <>
            <Head>
                <title>Slider</title>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/izy8aoj.css"
                />
            </Head>
            <Slider slides={slides} />
        </>
    );
}

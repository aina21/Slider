import Head from 'next/head';
import { SlideProps } from '@components/Slide/Slide.component';
import { Slider } from '@components/Slider/Slider.component';

export default function Index() {
    const slides: SlideProps[] = [
        {
            color: 'blue',
            icon: 'face',
            text: 'slide 1, blue',
            highlightedText: 'sgfsgfdgdf',
            extendedText: 'sdfsdfsd',
        },
        {
            color: 'pink',
            icon: 'cupcake',
            text: 'slide 2',
            highlightedText: 'sgfsgfdgdf',
        },
        {
            color: 'blue',
            icon: 'face',
            text: 'slide 3',
            highlightedText: 'sgfsgfdgdf',
            extendedText: 'sdfsdfsd',
        },
        {
            color: 'pink',
            icon: 'face',
            text: 'slide 4',
            highlightedText: 'sgfsgfdgdf',
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

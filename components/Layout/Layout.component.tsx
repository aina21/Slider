import React from 'react';
import { Header } from '@components/Header/Header.component';
import { NavBar } from '@components/NavBar/NavBar.component';
import styled from 'styled-components';
import { InfoSection } from '@components/InfoSection/InfoSection.component';
import { SectionText } from '@components/SectionText/SectionText.component';
import { Content } from '@components/Content/Content.component';
import Head from 'next/head';

const StyledLayout = styled.div`
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
`;

export const Layout = (props, color) => (
    <StyledLayout>
        <Head>
            <title>Test</title>
            <link rel="stylesheet" href="https://use.typekit.net/izy8aoj.css" />
        </Head>
        <Header color={color} />
        <Content>{props.children}</Content>
        <NavBar />
    </StyledLayout>
);

import React from 'react';
import Link from 'gatsby-link';
import SectionHeader from '../layouts/SectionHeader';
import fluidValue from '../layouts/fluid-value';
import Section from '../layouts/Section';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import ColumnLayout from '../layouts/ColumnLayout';
import Paragraph from '../layouts/Paragraph';
import CaseHeader from '../layouts/CaseHeader';
import styled from 'styled-components';
import bgImage from './anojo/pack.jpg';
import bgImageMobile from './anojo/pack_mobile.jpg';
import spoonsImage from './anojo/spoon.jpg';
import spoonsImageMobile from './anojo/spoon_mobile.jpg';
import appImage from './anojo/app.png';
import appImageMobile from './anojo/app_mobile.png';
import webshopImage from './anojo/webshop.png';
import webshopImageMobile from './anojo/webshop_mobile.png';
import bagImage from './anojo/branding/bag.png';
import birdImage from './anojo/branding/bird.png';
import brandingImageMobile from './anojo/branding_mobile.png';
import brandingImage from './anojo/branding/branding_anojo_left.jpg';
import logo from './anojo/logo.svg';
import logoInverse from './anojo/logo-inverse.svg';

const grayTheme = {
    bgColor: '#4A4A4A',
    textColor: '#FFFFFF',
};

const lightTheme = {
    bgColor: '#FFFFFF',
    textColor: '#4A4A4A',
};

const beigeTheme = {
    bgColor: '#CEC2B2',
    textColor: '#4A4A4A',
};

const blueTheme = {
    bgColor: '#88c2d7',
    textColor: '#4A4A4A',
};

const SpoonImage = styled.div`
    width: 100%;
    background-image: url(${spoonsImageMobile});
    @media screen and (min-width: 650px) {
        background-image: url(${spoonsImage});
    }
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 50vw;
`;

const LogoGrid = styled.div`
    display: flex;
`;
const LogoGridItem = styled.div`
    width: 50%;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    img {
        width: 100%;
        max-width: 300px;
    }
`;

const AppImage = styled.div`
    width: 100%;
    background-image: url(${appImageMobile});
    @media screen and (min-width: 650px) {
        background-image: url(${appImage});
    }
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 55vw;
`;

const Image = styled.img`
    max-width: 100%;
    display: block;
    margin: 0 auto;
`;

const Picture = styled.picture`
    max-width: 100%;
    display: block;
    margin: 0 auto;
`;

const headerTheme = {
    bgImage,
    bgImageMobile,
    bgImagePosition: '10%',
    overlayColor: 'rgba(255, 255, 255, 0.20);',
    textColor: '#4A4A4A',
};

const menuTheme = {
    textColor: '#4A4A4A',
    textColorUnfixed: '#4A4A4A',
    logoColor: '#6e7881',
    logoColorUnfixed: '#6e7881',
};

export default () => (
    <div>
        <Menu theme={menuTheme} />
        <CaseHeader theme={headerTheme}>Branding</CaseHeader>
        <Section theme={grayTheme}>
            <ColumnLayout>
                <Paragraph>
                    “Ano jo!” meaning “Ah, yes!” in the local language, was a
                    project created to promote local craftsmanship of the region
                    of Suwalszczyzna, a region located in north-east Poland.
                </Paragraph>
                <Paragraph>
                    The webshop came to being as an alternative gift shop,
                    giving possibility to buy quality, handmade products with
                    their unique stories.
                </Paragraph>
            </ColumnLayout>
        </Section>
        <SpoonImage />
        <Section theme={lightTheme} spaced>
            <SectionHeader>Logo</SectionHeader>
        </Section>
        <LogoGrid>
            <LogoGridItem bgColor="#FFFFFF">
                <Image src={logo} />
            </LogoGridItem>
            <LogoGridItem bgColor="#4A4A4A">
                <Image src={logoInverse} />
            </LogoGridItem>
        </LogoGrid>
        <Section theme={blueTheme} spaced>
            <Paragraph>
                I designed Anojo’s logo with the following guidelines from the
                founders: it had to be playful, neutral, connect with the
                products sold in the shop and speaking to a broad audience of
                customers. Having that in mind, I did the following:
            </Paragraph>
        </Section>
        <Section theme={beigeTheme} spaced>
            <SectionHeader>Branding</SectionHeader>
            <Picture>
                <source media="(min-width: 650px)" srcSet={brandingImage} />
                <Image src={brandingImageMobile} />
            </Picture>
        </Section>
        <Section theme={lightTheme} spaced>
            <SectionHeader>Webshop</SectionHeader>
            <Paragraph>
                The web shop allows easy access to buying products. Each product
                page contains specific information on who made that product, its
                measurements and specifications.
            </Paragraph>
            <Picture>
                <source media="(min-width: 650px)" srcSet={webshopImage} />
                <Image src={webshopImageMobile} maxWidth="100%" />
            </Picture>
        </Section>
        <AppImage />
        <Footer theme={blueTheme} />
    </div>
);

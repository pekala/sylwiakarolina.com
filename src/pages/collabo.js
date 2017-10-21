import React from 'react';
import Link from 'gatsby-link';
import SectionHeader from '../layouts/SectionHeader';
import fluidValue from '../layouts/fluid-value';
import Section from '../layouts/Section';
import ColumnLayout from '../layouts/ColumnLayout';
import Paragraph from '../layouts/Paragraph';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import CaseHeader from '../layouts/CaseHeader';
import styled from 'styled-components';
import bgImage from './collabo/background.jpg';
import bgImageMobile from './collabo/background_mobile.jpg';
import logoImage from './collabo/logo.svg';
import screen from './collabo/collabo_comp.png';
import screenMobile from './collabo/collabo_comp_mobile.png';
import uiImage from './collabo/library_list.svg';
import videoMP4 from './collabo/video.mp4';
import videoWEBM from './collabo/video.webm';
import indentityLogo from './collabo/identity_logo.svg';
import appLogo from './collabo/collabo_app.svg';
import appLogo2 from './collabo/collabo_app_neg.svg';
import rollup from './collabo/rollup_1.png';
import rollupMobile from './collabo/rollup_1_mobile.png';
import rollup2 from './collabo/rollup_2.png';
import rollup2Mobile from './collabo/rollup_2_mobile.png';
import magazine from './collabo/magazine.png';
import magazineMobile from './collabo/magazine_mobile.png';
import icon1 from './collabo/icon/design_icon.svg';
import icon2 from './collabo/icon/production_icon.svg';
import icon3 from './collabo/icon/quote_icon.svg';
import icon4 from './collabo/icon/sample_icon.svg';

const lightTheme = {
    bgColor: '#FFFFFF',
    textColor: '#283D50',
};
const greenTheme = {
    bgColor: 'linear-gradient(-206deg, #84D8CB 0%, #4DAF9C 74%)',
    textColor: '#FFFFFF',
};
const lightGrayTheme = {
    bgColor: '#F7F7F7',
    textColor: '#4A4A4A',
};
const grayTheme = {
    bgColor: '#CCD5DA',
    textColor: '#FFFFFF',
};
const darkGrayTheme = {
    bgColor: '#5A646D',
    textColor: '#FFFFFF',
};

const Image = styled.img`
    max-width: 100%;
`;

const Picture = styled.picture`
    max-width: ${props => props.maxWidth || '100%'};
    display: block;
    margin: 0 auto;
`;

const ScreenImage = styled.picture`
    width: 500px;
    max-width: 100%;
    transform: translateY(40px);
    margin-top: -40px;
`;

const ImageWithTextColumn = styled.div`
    display: flex;
`;

const IconsListItem = styled.div`
    background-color: ${props => props.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const LabelsListItem = styled.div`
    ${fluidValue('font-size', 9, 18)};
    ${fluidValue('padding', 2, 10)};
    font-family: 'Gloria Hallelujah', sans-serif;
    color: #a8a8a8;
    text-transform: uppercase;
`;

const IconsList = styled.div`
    display: flex;
    > * {
        width: calc(100% / 4);
        text-align: center;
    }
    img {
        max-width: 60px;
    }
`;
const LabelsList = styled.div`
    display: flex;
    > * {
        width: calc(100% / 4);
        text-align: center;
    }
`;

const ScreenImageSpacer = styled.div`
    height: 40px;
    background-color: #f7f7f7;
`;

const IconsGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    > * {
        width: calc(100% / 2 - 20px);
        max-width: 300px;
        margin: 10px;
    }
`;

const Rollups = styled.div`
    width: 100%;
    ${fluidValue('margin-top', 15, 40)};
    > * {
        max-width: 300px;
        margin: 10px auto;
    }
    @media screen and (min-width: 550px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        > * {
            width: calc(100% / 2 - 20px);
        }
    }
`;

const headerTheme = {
    bgImage,
    bgImageMobile,
    overlayColor: 'rgba(0, 0, 0, 0.40)',
    textColor: 'white',
};

const menuTheme = {
    textColor: '#4A4A4A',
    textColorUnfixed: '#FFFFFF',
    logoColor: '#6e7881',
    logoColorUnfixed: '#FFFFFF',
};

export default () => (
    <div>
        <Menu theme={menuTheme} />
        <CaseHeader logo={logoImage} theme={headerTheme}>
            UI, Branding
        </CaseHeader>
        <Section theme={greenTheme}>
            <ColumnLayout>
                <Paragraph>
                    Collabo is a visual collaboration platform for apparel and
                    lifestyle brands and their suppliers. The platform cover the
                    whole product cycle from the design to making sure the
                    finish product arrives at the company.
                </Paragraph>
                <Paragraph>
                    I joined Collabo as a lead UX/UI designer. The goal was to
                    make the platform more user-friendly and create a coherent
                    user interface.
                </Paragraph>
            </ColumnLayout>
        </Section>
        <div>
            <IconsList>
                <IconsListItem bgColor="#92D5C8">
                    <img src={icon1} />
                </IconsListItem>
                <IconsListItem bgColor="#5CC4B0">
                    <img src={icon2} />
                </IconsListItem>
                <IconsListItem bgColor="#81B5D5">
                    <img src={icon3} />
                </IconsListItem>
                <IconsListItem bgColor="#D8D8D8">
                    <img src={icon4} />
                </IconsListItem>
            </IconsList>
            <LabelsList>
                <LabelsListItem>Design</LabelsListItem>
                <LabelsListItem>Negotiation</LabelsListItem>
                <LabelsListItem>Sampling</LabelsListItem>
                <LabelsListItem>Production</LabelsListItem>
            </LabelsList>
        </div>
        <Section theme={lightTheme} style={{ paddingBottom: 0 }}>
            <SectionHeader>User Interface</SectionHeader>
            <ScreenImage>
                <source media="(min-width: 650px)" srcSet={screen} />
                <Image src={screenMobile} maxWidth="100%" />
            </ScreenImage>
        </Section>
        <ScreenImageSpacer />
        <Section theme={lightGrayTheme} spaced>
            <Paragraph>
                Collabo is a visual collaboration platform for apparel and
                lifestyle brands and their suppliers. The platform cover the
                whole product cycle from the design to making sure the finish
                product arrives at the company.
            </Paragraph>
            <Paragraph>
                I joined Collabo as a lead UX/UI designer. The goal was to make
                the platform more user-friendly and create a coherent user
                interface.
            </Paragraph>
        </Section>
        <Section theme={greenTheme}>
            <video muted autoPlay loop playsInline src={videoMP4} width="100%">
                <source src={videoMP4} type="video/mp4" />
                <source src={videoWEBM} type="video/ogg" />
            </video>
        </Section>
        <Section theme={darkGrayTheme} spaced>
            <SectionHeader>Identity & Branding</SectionHeader>
            <Image src={indentityLogo} />
        </Section>
        <Section theme={lightTheme} spaced>
            <Paragraph>
                Because of the two very different user profiles the platform
                serves, the visual feeling of marketing aids was kept in neutral
                colors and shapes. The “Collabo Green” was the primary color
                used for brochures and on the website. A great amount of white
                and breathing space was added to serve a good understanding of
                the content.
            </Paragraph>
            <IconsGrid>
                <Image src={appLogo} />
                <Image src={appLogo2} />
            </IconsGrid>
        </Section>
        <Section theme={grayTheme} spaced>
            <Picture maxWidth="500px">
                <source media="(min-width: 650px)" srcSet={magazine} />
                <Image src={magazineMobile} />
            </Picture>
            <Rollups>
                <Picture>
                    <source media="(min-width: 650px)" srcSet={rollup} />
                    <Image src={rollupMobile} maxWidth="100%" />
                </Picture>
                <Picture>
                    <source media="(min-width: 650px)" srcSet={rollup2} />
                    <Image src={rollup2Mobile} maxWidth="100%" />
                </Picture>
            </Rollups>
        </Section>
        <Footer theme={darkGrayTheme} />
    </div>
);

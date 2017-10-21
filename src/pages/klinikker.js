import React from 'react';
import Link from 'gatsby-link';
import SectionHeader from '../layouts/SectionHeader';
import fluidValue from '../layouts/fluid-value';
import SectionSubHeader from '../layouts/SectionSubHeader';
import Section from '../layouts/Section';
import Paragraph from '../layouts/Paragraph';
import ColumnLayout from '../layouts/ColumnLayout';
import CaseHeader from '../layouts/CaseHeader';
import CenteredList from '../layouts/CenteredList';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import styled from 'styled-components';
import logoMeasurement from './klinikker/logo_measure.svg';
import image from './klinikker/klinikker_sketch.jpg';
import imageMobile from './klinikker/klinikker_sketch_mobile.jpg';
import logo from './klinikker/logo.svg';
import mainImage from './klinikker/klinikker_main.png';
import mainImageMobile from './klinikker/klinikker_main_mobile.png';
import pageImage from './klinikker/klinikker_page.png';
import pageImageMobile from './klinikker/klinikker_page_mobile.png';
import chairImage from './klinikker/chair.jpg';
import bookingFlow from './klinikker/user-flows/booking.svg';
import contactFlow from './klinikker/user-flows/contact.png';
import contactFlowMobile from './klinikker/user-flows/contact_mobile.png';
import signupFlow from './klinikker/user-flows/signup.svg';
import icon1 from './klinikker/icons/website_icons-01.svg';
import icon2 from './klinikker/icons/website_icons-02.svg';
import icon3 from './klinikker/icons/website_icons-03.svg';
import icon4 from './klinikker/icons/website_icons-04.svg';
import icon5 from './klinikker/icons/website_icons-05.svg';
import icon6 from './klinikker/icons/website_icons-06.svg';
import logoExplanationMobile from './klinikker/logo-explanation/logo_line.svg';
import logoExplanationDesktop from './klinikker/logo-explanation/desktop.svg';
import logoExplanation1 from './klinikker/logo-explanation/check_mobile.svg';
import logoExplanation2 from './klinikker/logo-explanation/heartfull_mobile.svg';
import logoExplanation3 from './klinikker/logo-explanation/ste_mobile.svg';
import logoExplanation4 from './klinikker/logo-explanation/location_mobile.svg';
import logoOld from './klinikker/logo-old-new/old_logo.png';
import logoNew from './klinikker/logo-old-new/kdk_logo_mix_text.svg';
import arrow from './klinikker/logo-old-new/arrow_logo.svg';

const lightTheme = {
    bgColor: '#FFFFFF',
    textColor: '#283D50',
};

const darkTheme = {
    bgColor: '#5D7DA4',
    textColor: '#FFFFFF',
};

const grayTheme = {
    bgColor: '#4A4A4A',
    textColor: '#FFFFFF',
};

const grayOverlayTheme = {
    bgColor: 'rgba(74, 74, 74, 0.90)',
    bgImage: chairImage,
    textColor: '#FFFFFF',
};

const lightBlueTheme = {
    bgColor: '#EAF0F8',
    textColor: '#4A4A4A',
};

const Image = styled.img`
    max-width: ${props => props.maxWidth || '500px'};
`;

const Picture = styled.picture`
    max-width: 100%;
    display: block;
    margin: 0 auto;
`;

const NewLogo = styled.img`
    ${fluidValue('margin-top', 8, 23)};
`;

const LogoComparison = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    > * {
        width: 40%;
    }
`;

const LogoComparisonItem = styled.div`
    font-family: 'AmericanTypewriter', sans-serif;
    color: #c7f4ff;
    ${fluidValue('font-size', 15, 18)};
    text-align: ${props => (props.inverse ? 'right' : 'left')};
    text-transform: uppercase;
    > img {
        width: 100%;
        max-width: 300px;
    }
`;

const LogoComparisonLabel = styled.div`
    ${fluidValue('margin-bottom', 15, 30)};
    ${fluidValue('margin-left', -10, 30)};
    ${fluidValue('margin-right', -10, 30)};
`;

const LogoComparisonArrow = styled.img`
    transform: translateY(8px) scaleX(${props => (props.inverse ? -1 : 1)});
    width: 40px;
    margin: 0 4px;
`;

const IconGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    > * {
        width: calc(100% / 2 - 20px);
        margin: 10px;
        min-height: 15vw;

        @media screen and (min-width: 550px) {
            width: calc(100% / 3 - 20px);
        }
    }
`;

const LogoExplanationFull = styled.picture`
    width: 40%;
    display: block;
    margin: 0 auto;
    @media screen and (min-width: 550px) {
        width: 85%;
        margin-bottom: 15px;
    }
`;

const LogoExplanationGrid = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
`;

const LogoExplanationItem = styled.div`
    width: calc(100% / 2);
    padding: 5px;
    margin-bottom: 20px;
    @media screen and (min-width: 550px) {
        width: calc(100% / 4);
        margin-bottom: 0;
    }
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    text-align: center;
    line-height: 1.4;
    img {
        width: 100%;
        max-width: 120px;
        max-height: 120px;
        @media screen and (min-width: 550px) {
            display: none;
        }
    }
    div {
        font-family: 'AmericanTypewriter', sans-serif;
        color: #c7f4ff;
        ${fluidValue('font-size', 18, 20)};
    }
`;

const headerTheme = {
    bgImage: image,
    bgImageMobile: imageMobile,
    bgImagePosition: 'bottom',
    overlayColor: 'rgba(255, 255, 255, 0.75)',
    textColor: '#283D50',
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
        <CaseHeader logo={logo} theme={headerTheme}>
            Rebranding, Web Design, UX
        </CaseHeader>
        <Section theme={lightTheme}>
            <ColumnLayout>
                <Paragraph>
                    Klinikker.dk is a Danish search and scheduling platform for
                    medical care. I worked with the Klinikker team on the
                    company’s identity, web design and user experience.
                </Paragraph>
                <Paragraph>
                    The company’s goal was to gain a broad audience of patients
                    and clinic owners. To do so they needed a reliable visual
                    image and well functioning platform.
                </Paragraph>
                <Paragraph>
                    I started my work with a detailed research within the
                    company and among its users to define the persona and
                    establish the company’s values. That gave me a good starting
                    base and a solid point to come back to during my work.
                </Paragraph>
                <Paragraph>
                    I created a design system containing visual guidelines of
                    color scheme, icons, symbols and other graphic elements. The
                    main user experience focus was put on the user flow of the
                    search engine, simplicity of signup and accessibility of the
                    platform.
                </Paragraph>
            </ColumnLayout>
        </Section>
        <Section theme={darkTheme} spaced>
            <SectionHeader>Logo</SectionHeader>
            <LogoComparison>
                <LogoComparisonItem>
                    <LogoComparisonLabel>
                        Old <LogoComparisonArrow src={arrow} />
                    </LogoComparisonLabel>
                    <Image src={logoOld} />
                </LogoComparisonItem>
                <LogoComparisonItem inverse>
                    <LogoComparisonLabel>
                        <LogoComparisonArrow src={arrow} inverse /> New
                    </LogoComparisonLabel>
                    <NewLogo src={logoNew} />
                </LogoComparisonItem>
            </LogoComparison>
            <Paragraph>
                The old logo contained a symbol of horizontally placed spine, as
                the Klinikker’s starting target group were physical therapists.
                Once the company grew bigger, Klinikker needed to expand their
                focus onto other medical professionals. The redesign process
                ended up with a logo that combines company’s values, vision and
                mission.
            </Paragraph>
        </Section>
        <Section theme={lightTheme}>
            <Image src={logoMeasurement} />
        </Section>
        <Section theme={grayTheme}>
            <LogoExplanationFull>
                <source
                    media="(min-width: 550px)"
                    srcSet={logoExplanationDesktop}
                />
                <Image src={logoExplanationMobile} maxWidth="100%" />
            </LogoExplanationFull>
            <LogoExplanationGrid>
                <LogoExplanationItem>
                    <img src={logoExplanation1} />
                    <div>Quality</div>
                </LogoExplanationItem>
                <LogoExplanationItem>
                    <img src={logoExplanation2} />
                    <div>Care</div>
                </LogoExplanationItem>
                <LogoExplanationItem>
                    <img src={logoExplanation3} />
                    <div>Medical Treatment</div>
                </LogoExplanationItem>
                <LogoExplanationItem>
                    <img src={logoExplanation4} />
                    <div>Location Search</div>
                </LogoExplanationItem>
            </LogoExplanationGrid>
        </Section>
        <Section theme={lightTheme}>
            <SectionHeader>Webdesign</SectionHeader>
            <Picture>
                <source media="(min-width: 650px)" srcSet={mainImage} />
                <Image src={mainImageMobile} maxWidth="100%" />
            </Picture>
        </Section>
        <Section theme={grayOverlayTheme} spaced>
            <Paragraph>
                The company has two user types: clinics and patients. The needs
                of both had to be addressed differently. When I was entering the
                project the problem I had to solve was to optimize the website
                for the clinics. That part was especially important due to the
                fact that clinic owners were the paying users. I worked on the
                presentation of the business value of the premium account,
                optimizing the conversion rate of the page. The{' '}
                <a href="https://www.klinikker.dk/virksomhed/" target="_blank">
                    final page that I designed
                </a>, tested and built can be found online.
            </Paragraph>
            <Picture>
                <source media="(min-width: 650px)" srcSet={pageImage} />
                <Image src={pageImageMobile} maxWidth="100%" />
            </Picture>
        </Section>
        <Section theme={lightTheme}>
            <IconGrid>
                <Image src={icon1} />
                <Image src={icon2} />
                <Image src={icon3} />
                <Image src={icon4} />
                <Image src={icon5} />
                <Image src={icon6} />
            </IconGrid>
        </Section>
        <Section theme={lightBlueTheme} spaced>
            <SectionHeader>User Experience</SectionHeader>
            <Paragraph>
                During the project at Klinikker I worked with the following
                tools to optimize user experience of the website:
            </Paragraph>
            <CenteredList>
                <li>A/B testing with Optimizely</li>
                <li>1-on-1 moderated interviews</li>
                <li>Field research</li>
                <li>Google Analytics</li>
                <li>Screen recording</li>
            </CenteredList>
            <SectionSubHeader>Booking Flow</SectionSubHeader>
            <Image src={bookingFlow} maxWidth="100%" />
            <SectionSubHeader>Signup A/B Testing</SectionSubHeader>
            <Image src={signupFlow} maxWidth="100%" />
            <SectionSubHeader>Contact Flow</SectionSubHeader>
            <Picture>
                <source media="(min-width: 650px)" srcSet={contactFlow} />
                <Image src={contactFlowMobile} maxWidth="100%" />
            </Picture>
        </Section>
        <Footer theme={grayTheme} />
    </div>
);

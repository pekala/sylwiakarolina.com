import React, { Component } from 'react';
import Link from 'gatsby-link';
import Slider from 'react-slick';
import Headroom from 'react-headroom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollableAnchor, { removeHash, goToTop } from 'react-scrollable-anchor';
import Section from '../layouts/Section';
import SectionHeader from '../layouts/SectionHeader';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import fluidValue from '../layouts/fluid-value';
import Paragraph from '../layouts/Paragraph';
import styled, { ThemeProvider } from 'styled-components';
import Sylwer from '../components/Sylwer';
import Signature from './home/Signature';
import sketchLogo from './home/tools/sketch.png';
import psLogo from './home/tools/photoshop.png';
import invisionLogo from './home/tools/invision.png';
import indesignLogo from './home/tools/indesign.png';
import illustratorLogo from './home/tools/illustrator.png';
import collaboLogo from './home/projects/collabo.svg';
import klinikkerLogo from './home/projects/klinikker.svg';
import anojoLogo from './home/projects/anojo.svg';
import baseRangeLogo from './home/companies/baserange.png';
import kateSheridanLogo from './home/companies/katesh.png';
import robotixLogo from './home/companies/robotix.png';
import leneublackLogo from './home/companies/leneublack.png';
import klinikkerLogo2 from './home/companies/klinikker.svg';
import collaboLogo2 from './home/companies/collabo.svg';
import quote from './home/quote.svg';

const ScrollTarget = ({ id, children }) => (
    <ScrollableAnchor id={id}>
        <div>{children}</div>
    </ScrollableAnchor>
);

const IntroScreen = styled.div`
    background: ${props => props.theme.bgColor};
    height: 100vh;
    display: flex;
    align-items: flex-start;
    padding-top: 50px;
    ${fluidValue('padding-bottom', 10, 20)};
    padding-left: 15px;
    padding-right: 15px;

    @media screen and (min-width: 650px) {
        padding-left: 30px;
        padding-right: 30px;
        align-items: center;
    }
`;

const IntroLayout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: flex-start;

    @media screen and (min-width: 650px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;

const IntroDescription = styled.div`
    text-align: left;
    @media screen and (min-width: 650px) {
        max-width: 500px;
        ${fluidValue('margin-left', 20, 50)};
    }
    > * + * {
        ${fluidValue('margin-top', 15, 40)};
    }
`;

const IntroDescriptionHeader = styled.div`
    ${fluidValue('font-size', 28, 35)};
    color: ${props => props.theme.textColor};
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
    margin: 0 auto;
    margin-bottom: 10px;
    line-height: 1.2em;
    font-weight: 600;
    text-transform: uppercase;
`;
const IntroDescriptionSubHeader = styled.div`
    ${fluidValue('font-size', 16, 26)};
    color: ${props => props.theme.textColor};
    opacity: 0.6;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
    margin: 0 auto;
    margin-bottom: 10px;
    line-height: 1.2em;
    font-weight: 600;
    text-transform: uppercase;
`;

const IntroImage = styled.div`
    min-width: 40vw;
    @media screen and (min-width: 800px) {
        width: auto;
    }
`;

const FullPageSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-around;
`;

const SignatureWrapper = styled.div`
    ${fluidValue('max-width', 100, 200)};
    margin-left: auto;
    text-align: right;
    color: ${props => props.theme.textColor};
`;

const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SocialLink = styled.div`
    ${fluidValue('width', 75, 120)};
    ${fluidValue('height', 75, 120)};
    ${fluidValue('margin', 10, 20)};
    flex-shrink: 0;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    transition: background-color 300ms ease-in-out;
    color: ${props => props.theme.textColor};
    &:hover {
        background-color: white;
    }
    svg {
        fill: ${props => props.theme.bgColor};
        width: 100%;
        height: 100%;
    }
`;

const ApproachItem = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    ${fluidValue('margin-top', 20, 40)};
    ${fluidValue('margin-bottom', 20, 40)};
`;
const Approach = styled.div`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        ${fluidValue(
            'width',
            40,
            100
        )};
        background: linear-gradient(-134deg, #8D6A7E 0%, #738DBB 100%);
        z-index: 0;
        border-radius: 100px;
    }
`;
const ApproachContent = styled.div`
    > p {
        margin: 0;
    }
`;
const ApproachNumber = styled.div`
    ${fluidValue('font-size', 40, 72)} font-family: 'Montserrat';
    color: white;
    ${fluidValue('width', 40, 100)} text-align: center;
    flex-shrink: 0;
    ${fluidValue('margin-right', 20, 60)};
`;

const ApproachTitle = styled.h2`
    margin-top: 0;
    ${fluidValue('font-size', 20, 30)};
    ${fluidValue('margin-bottom', 5, 10)};
    font-family: 'Montserrat';
    font-weight: 300;
    color: ${props => props.color};
`;

const SkillsLogos = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    > * {
        max-width: 125px;
        display: block;
        ${fluidValue('padding', 5, 20)};
    }
    img {
        width: 100%;
    }
`;

const SkillsSliders = styled.div`
    width: 100%;
    ${fluidValue('margin-top', 30, 40)};
`;
const Skill = styled.div`
    display: flex;
    width: 100%;
    ${fluidValue('margin-bottom', 20, 30)};
`;
const SkillLabel = styled.div`
    color: ${props => props.theme.textColor};
    font-family: 'Montserrat';
    ${fluidValue('font-size', 18, 25)};
    width: 25%;
    min-width: 150px;
`;

const grayTheme = {
    bgColor: 'linear-gradient(-225deg, #939EA6 0%, #5A646D 100%)',
    textColor: '#FFFFFF',
};

const darkGrayTheme = {
    bgColor: '#313131',
    textColor: '#F7F7F7',
};

const whiteTheme = {
    bgColor: '#FFFFFF',
    textColor: '#4A4A4A',
};

const beigeTheme = {
    bgColor: '#D4D4D4',
    textColor: '#4A4A4A',
};

const navyBlueTheme = {
    bgColor: '#3E505E',
    textColor: '#FFFFFF',
};

const redTheme = {
    bgColor: '#CF3A3A',
    textColor: '#FFFFFF',
};

const darkRedTheme = {
    bgColor: '#BD3E3E',
    textColor: '#FFFFFF',
};

const SkillTags = styled.div`
    text-align: center;
    ${fluidValue('margin-top', 30, 40)};
`;

const SkillTag = styled.span`
    display: inline-block;
    background-color: #67748e;
    ${fluidValue('padding', 3, 6)};
    ${fluidValue('margin', 2, 4)};
    font-family: 'Montserrat';
    ${fluidValue('font-size', 11, 18)};
    color: #ececec;
`;

const Projects = styled.div`
    width: 100%;
    @media screen and (min-width: 550px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const Project = styled.div`
    background-color: ${props => props.background};
    position: relative;
    width: 50%;
    margin: 0 auto;
    ${fluidValue('padding', 20, 70)};

    @media screen and (min-width: 550px) {
        margin: 0;
        width: 33%;
    }

    img {
        transition: all 200ms ease-in-out;
    }

    &:hover {
        img {
            transform: scale(1.3);
        }
    }
`;

const ProjectOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: hsla(0, 0%, 0%, 0.7);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    ${fluidValue('padding', 10, 20)};
    line-height: 1.3;
    text-transform: uppercase;
    font-family: 'Montserrat';
    ${fluidValue('font-size', 12, 18)};
    opacity: 0;

    .touch & {
        opacity: 1;
    }

    &:hover {
        opacity: 1;
        transition: all 200ms ease-in-out;
    }
`;

const Quote = styled.blockquote`
    font-family: 'Montserrat';
    line-height: 1.5;
    color: ${props => props.theme.textColor};
    margin: 0;
    font-weight: 200;
    ${fluidValue('font-size', 15, 20)} padding: 10px;
`;
const QuoteAuthor = styled.footer`
    margin-top: 15px;
    ${fluidValue('font-size', 13, 18)};
`;
const QuoteImage = styled.img`
    max-width: 50px;
    position: absolute;
    transform: translateX(-100%);
    display: none;
    @media screen and (min-width: 800px) {
        display: initial;
    }
`;
const Quotes = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    position: relative;

    .custom-dot {
        display: flex !important;
        margin: 0;
        margin-top: 10px;
        padding: 0;
        justify-content: center;
    }

    .custom-dot li {
        list-style: none;
        margin: 0px 10px;
    }

    .custom-dot button {
        border: none;
        background-color: #d8d8d8;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        font-size: 0;
        transition: background-color 300ms ease-in-out;
    }

    .slick-active button {
        background-color: #b18ca1;
    }
`;

const Companies = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    ${fluidValue('margin-top', 30, 50)};

    > img {
        max-width: 50%;
        ${fluidValue('padding', 20, 30)};
        opacity: 0.3;
        transition: opacity 300ms ease-in-out;
        -webkit-backface-visibility: hidden;

        @media screen and (min-width: 550px) {
            max-width: 33%;
        }

        &:hover {
            opacity: 1;
        }
    }
`;

const SliderWrapper = styled.div`
    flex: 1;
`;
const SliderBar = styled.div`
    width: ${props => props.value}%;
    ${fluidValue('height', 25, 40)};
    border-radius: 20px;
    background: linear-gradient(-1deg, #d7b0c6 2%, #b18ca1 100%);
`;
const SkillSlider = ({ value }) => (
    <SliderWrapper>
        <SliderBar value={value} />
    </SliderWrapper>
);

const menuTheme = {
    textColor: '#4a4a4a',
    textColorUnfixed: '#ffffff',
    logoColor: '#6e7881',
    logoColorUnfixed: '#ffffff',
};

export default class Page extends Component {
    componentDidMount() {
        document.documentElement.className +=
            'ontouchstart' in document.documentElement ? ' touch' : ' no-touch';
    }
    render() {
        return (
            <div>
                <Menu theme={menuTheme} />
                <ThemeProvider theme={grayTheme}>
                    <IntroScreen>
                        <IntroLayout>
                            <IntroImage>
                                <Sylwer />
                            </IntroImage>
                            <IntroDescription>
                                <IntroDescriptionHeader>
                                    Sylvia K. D.
                                </IntroDescriptionHeader>
                                <IntroDescriptionSubHeader>
                                    Designing Experiences
                                </IntroDescriptionSubHeader>
                                <Paragraph>
                                    I’m a user-oriented aesthetic addict with a
                                    problem solving attitude and an urgent need
                                    to create and improve lives; always looking
                                    for new and exciting opportunities.
                                </Paragraph>
                                <SignatureWrapper>
                                    <Signature />
                                </SignatureWrapper>
                            </IntroDescription>
                        </IntroLayout>
                    </IntroScreen>
                </ThemeProvider>
                <ScrollTarget id="approach">
                    <Section theme={whiteTheme} fullPage>
                        <FullPageSection>
                            <SectionHeader noUnderline>Approach</SectionHeader>
                            <Approach>
                                <ApproachItem>
                                    <ApproachNumber>1</ApproachNumber>
                                    <ApproachContent>
                                        <ApproachTitle color="#8D6A7E">
                                            Simplify -{' '}
                                        </ApproachTitle>
                                        <Paragraph>
                                            keep features basic. This is the
                                            time for user and field research.
                                            Refer to primary users’ needs and
                                            look for patterns in their
                                            behaviour.
                                        </Paragraph>
                                    </ApproachContent>
                                </ApproachItem>
                                <ApproachItem>
                                    <ApproachNumber>2</ApproachNumber>
                                    <ApproachContent>
                                        <ApproachTitle color="#827A9A">
                                            Engage users -
                                        </ApproachTitle>
                                        <Paragraph>
                                            design the journey together with the
                                            user from the early stage. Avoid
                                            assumptions - ask questions. Test as
                                            much as possible.
                                        </Paragraph>
                                    </ApproachContent>
                                </ApproachItem>
                                <ApproachItem>
                                    <ApproachNumber>3</ApproachNumber>
                                    <ApproachContent>
                                        <ApproachTitle color="#758BB9">
                                            Work with system -
                                        </ApproachTitle>
                                        <Paragraph>
                                            document and organize your work.
                                            Create component libraries.
                                            Establish common language with your
                                            coworkers to work efficiently.
                                        </Paragraph>
                                    </ApproachContent>
                                </ApproachItem>
                            </Approach>
                        </FullPageSection>
                    </Section>
                </ScrollTarget>
                <ScrollTarget id="skills">
                    <Section theme={darkGrayTheme} fullPage>
                        <FullPageSection>
                            <SectionHeader noUnderline>
                                Tools & Skills
                            </SectionHeader>
                            <SkillsLogos>
                                <div>
                                    <img src={sketchLogo} />
                                </div>
                                <div>
                                    <img src={invisionLogo} />
                                </div>
                                <div>
                                    <img src={illustratorLogo} />
                                </div>
                                <div>
                                    <img src={psLogo} />
                                </div>
                                <div>
                                    <img src={indesignLogo} />
                                </div>
                            </SkillsLogos>
                            <SkillsSliders>
                                <Skill>
                                    <SkillLabel>DTP design</SkillLabel>
                                    <SkillSlider value={100} />
                                </Skill>
                                <Skill>
                                    <SkillLabel>UX design</SkillLabel>
                                    <SkillSlider value={75} />
                                </Skill>
                                <Skill>
                                    <SkillLabel>HTML/CSS</SkillLabel>
                                    <SkillSlider value={50} />
                                </Skill>
                                <Skill>
                                    <SkillLabel>Video editing</SkillLabel>
                                    <SkillSlider value={50} />
                                </Skill>
                            </SkillsSliders>
                            <SkillTags>
                                <SkillTag>agile</SkillTag>
                                <SkillTag>SaaS</SkillTag>
                                <SkillTag>MVP</SkillTag>
                                <SkillTag>atomic design</SkillTag>
                                <SkillTag>RWD</SkillTag>
                                <SkillTag>wire framing</SkillTag>
                                <SkillTag>Material Design</SkillTag>
                                <SkillTag>Front-end</SkillTag>
                                <SkillTag>WordPress</SkillTag>
                                <SkillTag>A/B testing</SkillTag>
                                <SkillTag>bounce rate</SkillTag>
                                <SkillTag>conversion rate</SkillTag>
                                <SkillTag>Google Analytics</SkillTag>
                                <SkillTag>MailChimp</SkillTag>
                                <SkillTag>story telling </SkillTag>
                            </SkillTags>
                        </FullPageSection>
                    </Section>
                </ScrollTarget>
                <ScrollTarget id="projects">
                    <Section theme={beigeTheme} fullPage>
                        <FullPageSection>
                            <SectionHeader noUnderline>Projects</SectionHeader>
                            <Projects>
                                <Project background="#0C80B9">
                                    <img src={klinikkerLogo} />
                                    <Link to="/klinikker">
                                        <ProjectOverlay>
                                            <div>klinniker.dk</div>
                                            <div>
                                                Rebranding, <br />Web Design, UX
                                            </div>
                                        </ProjectOverlay>
                                    </Link>
                                </Project>
                                <Project background="#FFFFFF">
                                    <img src={collaboLogo} />
                                    <Link to="/collabo">
                                        <ProjectOverlay>
                                            <div>collabo.dk</div>
                                            <div>Branding</div>
                                        </ProjectOverlay>
                                    </Link>
                                </Project>
                                <Project background="#4A4A4A">
                                    <img src={anojoLogo} />
                                    <Link to="/anojo">
                                        <ProjectOverlay>
                                            <div>Anojo</div>
                                            <div>
                                                Branding, <br />Web Design
                                            </div>
                                        </ProjectOverlay>
                                    </Link>
                                </Project>
                            </Projects>
                        </FullPageSection>
                    </Section>
                </ScrollTarget>
                <ScrollTarget id="together">
                    <Section theme={navyBlueTheme} fullPage>
                        <FullPageSection>
                            <SectionHeader noUnderline>
                                We worked together
                            </SectionHeader>

                            <Quotes>
                                <QuoteImage src={quote} />
                                <Slider
                                    {...{
                                        dots: true,
                                        infinite: true,
                                        speed: 500,
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        dotsClass: 'custom-dot',
                                        arrows: false,
                                    }}
                                >
                                    <Quote>
                                        Sylvia has shown great dedication in her
                                        work and has good technical skills. We
                                        have appreciated her creative work,
                                        social skills and the ability to work in
                                        a team.
                                        <QuoteAuthor>
                                            —{' '}
                                            <strong>Bodil Christine Reumert</strong>,
                                            Le Neu Black
                                        </QuoteAuthor>
                                    </Quote>
                                    <Quote>
                                        She is always ready to put all her
                                        energy and time to get the job done in
                                        the best possible way.
                                        <QuoteAuthor>
                                            —{' '}
                                            <strong>Aleksandra Lozinska</strong>,
                                            Robotix
                                        </QuoteAuthor>
                                    </Quote>
                                    <Quote>
                                        Sylwia helped us move from taking steps
                                        to taking leaps forward once she joined
                                        our team.
                                        <QuoteAuthor>
                                            — <strong>Lise Lin</strong>, Collabo
                                        </QuoteAuthor>
                                    </Quote>
                                </Slider>
                            </Quotes>

                            <Companies>
                                <img src={klinikkerLogo2} />
                                <img src={collaboLogo2} />
                                <img src={robotixLogo} />
                                <img src={kateSheridanLogo} />
                                <img src={baseRangeLogo} />
                                <img src={leneublackLogo} />
                            </Companies>
                        </FullPageSection>
                    </Section>
                </ScrollTarget>
                <ScrollTarget id="contact">
                    <Section theme={redTheme}>
                        <SectionHeader noUnderline>Contact</SectionHeader>
                        <Paragraph centered>
                            Interested in working together? Or just want to say
                            ‟Hi!”? Let’s get in touch:
                        </Paragraph>
                        <SocialLinks>
                            <SocialLink>
                                <a
                                    href="mailto:dluzniewska@gmail.com?subject=Hi!"
                                    target="_blank"
                                    title="Email"
                                >
                                    <svg viewBox="0 0 512 512">
                                        <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z" />
                                    </svg>
                                </a>
                            </SocialLink>
                            <SocialLink>
                                <a
                                    href="https://www.linkedin.com/in/sylwia-dluzniewska"
                                    target="_blank"
                                    title="LinkedIn"
                                >
                                    <svg viewBox="0 0 512 512">
                                        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                                    </svg>
                                </a>
                            </SocialLink>
                            <SocialLink>
                                <a
                                    href="https://dribbble.com/sylakarola"
                                    target="_blank"
                                    title="Dribbble"
                                >
                                    <svg viewBox="0 0 512 512">
                                        <path d="M256 68.4C152.4 68.4 68.4 152.4 68.4 256c0 103.6 84 187.6 187.6 187.6S443.6 359.6 443.6 256C443.6 152.4 359.6 68.4 256 68.4zM410.6 247.3c-40.3-6.6-77.3-7-111-1.1 -3.8-8.8-7.8-17.6-12-26.3 36.1-15.6 65.1-36.9 86.7-63.8C395.4 181 408.6 212.6 410.6 247.3zM350.5 133.4c-18.8 24.3-44.8 43.5-78 57.5 -15.9-29.1-34-57.5-54.5-85 12.2-3.1 24.9-4.9 38-4.9C291.6 101 324.3 113.2 350.5 133.4zM186.1 117.9c20.8 27.2 39.3 55.3 55.3 84.1 -38 11.2-83.4 16.9-135.8 17.3C116.4 175 146.3 138.1 186.1 117.9zM101 256c0-1.3 0.2-2.7 0.2-4 60.2-0.1 112.1-7 155.6-20.7 3.6 7.4 7.1 14.9 10.5 22.4 -52.8 16.5-96.4 50.4-130.3 101.3C114.5 328.2 101 293.6 101 256zM160.9 378.1c30.8-48.3 70.1-79.7 118.8-94.2 14.5 37.8 25.2 76.8 31.9 116.6 -17.3 6.7-36 10.5-55.6 10.5C220.1 411 187.2 398.6 160.9 378.1zM342 384.8c-6.9-36.8-16.9-72.8-30-107.8 29.3-4.1 61.6-3.1 96.9 3.1C402.1 323.6 377.2 361.3 342 384.8z" />
                                    </svg>
                                </a>
                            </SocialLink>
                        </SocialLinks>
                    </Section>
                </ScrollTarget>
                <Footer theme={darkRedTheme} />
            </div>
        );
    }
}

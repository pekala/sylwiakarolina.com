import React from 'react';
import styled from 'styled-components';
import fluidValue from './fluid-value';
import { ThemeProvider } from 'styled-components';

const WidthLimiter = styled.div`
    max-width: 900px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Spacer = styled.div`
    width: 100%;

    > * {
        ${fluidValue('margin-bottom', 20, 60)};
    }

    > *:last-child {
        margin-bottom: 0;
    }
`;

const BackgroundContainer = styled.div`
    background-image: url(${props => props.theme.bgImage});
    background-size: cover;
    width: 100%;
`;

const Section = styled.div`
    background: ${props => props.theme.bgColor};
    min-height: ${props => (props.fullPage ? '100vh' : 'auto')};
    display: flex;
    align-items: center;
    ${fluidValue('padding-top', 30, 60)} ${fluidValue(
            'padding-bottom',
            30,
            60
        )} padding-left: 15px;
    padding-right: 15px;

    @media screen and (min-width: 550px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;

const Inner = ({ spaced, children, ...rest }) => (
    <Section {...rest}>
        <WidthLimiter>
            {spaced ? <Spacer>{children}</Spacer> : children}
        </WidthLimiter>
    </Section>
);

export default ({ theme, ...rest }) => (
    <ThemeProvider theme={theme}>
        {theme.bgImage ? (
            <BackgroundContainer>
                <Inner {...rest} />
            </BackgroundContainer>
        ) : (
            <Inner {...rest} />
        )}
    </ThemeProvider>
);

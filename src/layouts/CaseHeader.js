import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import fluidValue from './fluid-value';

const Container = styled.div`
    background-image: url(${props => props.theme.bgImageMobile});
    @media screen and (min-width: 650px) {
        background-image: url(${props => props.theme.bgImage});
    }
    background-size: cover;
    background-position-y: ${props => props.theme.bgImagePosition || 'center'};
    background-position-x: center;
    background-repeat: no-repeat;
`;

const CaseType = styled.div`
    text-transform: uppercase;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.textColor};
    ${fluidValue('font-size', 12, 18)};
`;

const DimmerContainer = styled.div`
    background: ${props => props.theme.overlayColor};
    padding: 20px;
    padding-top: 70px;
    height: 100vw;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    max-width: 500px;
    margin: 0;
    width: 100%;
`;

const LogoWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const CaseHeader = ({ logo, children, theme }) => (
    <ThemeProvider theme={theme}>
        <Container>
            <DimmerContainer>
                <CaseType>{children}</CaseType>
                <LogoWrapper>
                    <Logo src={logo} />
                </LogoWrapper>
            </DimmerContainer>
        </Container>
    </ThemeProvider>
);

CaseHeader.propTypes = {
    background: PropTypes.string,
};

export default CaseHeader;

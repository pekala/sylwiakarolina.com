import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fluidValue from './fluid-value';

const SectionHeader = styled.h1`
    ${fluidValue('font-size', 20, 36)} color: ${props => props.theme.textColor};
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
    margin: 0 auto;
    max-width: 900px;
    line-height: 1.2em;
    position: relative;
    text-transform: uppercase;

    &:after {
        content: '';
        width: 100%;
        ${fluidValue('height', 3, 6)} position: absolute;
        background: ${props =>
            !props.noUnderline ? '#EADD9E' : 'transparent'};
        ${fluidValue('bottom', -8, -30)} left: 0;
    }
`;

const Wrapper = styled.div`
    text-align: center;
    ${props =>
        !props.noUnderline
            ? fluidValue('margin-bottom', 30, 70)
            : fluidValue('margin-bottom', 20, 50)};
`;

export default ({ children, level, noUnderline }) => (
    <Wrapper noUnderline={noUnderline}>
        <SectionHeader noUnderline={noUnderline}>{children}</SectionHeader>
    </Wrapper>
);

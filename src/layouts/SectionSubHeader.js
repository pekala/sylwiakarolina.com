import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fluidValue from './fluid-value';

const SectionSubHeader = styled.h2`
    ${fluidValue('font-size', 15, 25)} color: ${props => props.theme.textColor};
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    margin: 0 auto;
    max-width: 900px;
    position: relative;
    text-transform: uppercase;

    &:after {
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        background: #eadd9e;
        ${fluidValue('bottom', -4, -20)} left: 0;
    }
`;

const Wrapper = styled.div`
    ${fluidValue('margin-bottom', 20, 50)};
`;

export default ({ children, level }) => (
    <Wrapper>
        <SectionSubHeader>{children}</SectionSubHeader>
    </Wrapper>
);

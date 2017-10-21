import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import fluidValue from './fluid-value';

export default styled.p`
    ${fluidValue('font-size', 15, 20)};
    color: ${props => props.theme.textColor};
    line-height: 1.4;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    text-align: ${props => (props.centered ? 'center' : 'left')};
    margin: 0;
    ${fluidValue('margin-bottom', 15, 40)};
    a {
        color: white;
    }
`;

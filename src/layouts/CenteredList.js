import React from 'react';
import styled from 'styled-components';
import fluidValue from './fluid-value';

const List = styled.ul`
    display: inline-block;
    color: ${props => props.theme.textColor};
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    ${fluidValue('font-size', 15, 20)} margin: 0;
    padding: 0;
`;
const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default ({ children }) => (
    <ListWrapper>
        <List>{children}</List>
    </ListWrapper>
);

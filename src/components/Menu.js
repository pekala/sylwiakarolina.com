import React from 'react';
import Headroom from 'react-headroom';
import styled, { css, ThemeProvider } from 'styled-components';
import fluidValue from '../layouts/fluid-value';
import Signature from './Signature';

const MenuBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    padding: 10px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.89);
    transition: all 250ms ease-in-out;
    backdrop-filter: blur(10px);

    .headroom--unfixed & {
        background-color: transparent;
        backdrop-filter: none;
    }

    .headroom--pinned & {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04), 0 3px 6px rgba(0, 0, 0, 0.06);
    }
`;

const MenuBarSignature = styled.a`
    height: 100%;
    color: ${props => props.theme.logoColor};
    transition: color 250ms ease-in-out;
    .headroom--unfixed & {
        color: ${props => props.theme.logoColorUnfixed};
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    left: 0;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.89);
    color: #4a4a4a;
    backdrop-filter: blur(10px);
    z-index: 3;
    ${fluidValue('font-size', 30, 60)};
    display: flex;
    opacity: ${props => (props.open ? 1 : 0)};
    pointer-events: ${props => (props.open ? 'all' : 'none')};
    transition: opacity 300ms ease-in-out;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a {
        ${fluidValue('font-size', 30, 60)};
        line-height: 1.3em;
        margin-bottom: 40px;
    }
    a:last-of-type {
        margin-bottom: 0;
    }
`;

const Menu = styled.div`
    display: none;

    @media screen and (min-width: 550px) {
        display: flex;
    }
`;

const MenuItem = styled.a`
    text-decoration: none;
    color: ${props => props.theme.textColor};
    margin: 0 10px;
    font-family: 'Montserrat';
    font-weight: 300;
    ${fluidValue('font-size', 12, 20)};
    letter-spacing: 1px;
    position: relative;
    transition: color 250ms ease-in-out;

    .headroom--unfixed & {
        color: ${props => props.theme.textColorUnfixed};
    }

    &:after {
        content: '';
        width: 100%;
        ${fluidValue('height', 2, 4)};
        position: absolute;
        background-color: transparent;
        ${fluidValue('bottom', -2, -7)};
        left: 0;
        transition: background-color 100ms ease-in-out;
    }

    &:hover:after {
        background-color: #eadd9e;
        transition: background-color 400ms ease-in-out;
    }
`;

const CloseIcon = styled.div`
    width: 30px;
    height: 16px;
    position: fixed;
    right: 10px;
    top: 15px;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    display: initial;

    @media screen and (min-width: 550px) {
        display: none;
    }
`;

const CloseIconLine = styled.span`
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background: ${props => props.theme.logoColor};
    border-radius: 1px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    .headroom--unfixed & {
        background: ${props => props.theme.textColorUnfixed};
    }

    &:nth-child(1) {
        top: 0px;
    }

    &:nth-child(2) {
        top: 8px;
    }

    &:nth-child(3) {
        top: 16px;
    }

    ${props =>
        props.open
            ? css`
                  &:nth-child(1) {
                      top: 8px;
                      transform: rotate(135deg);
                  }

                  &:nth-child(2) {
                      opacity: 0;
                      left: -60px;
                  }

                  &:nth-child(3) {
                      top: 8px;
                      transform: rotate(-135deg);
                  }
              `
            : ''};
`;

export default class extends React.Component {
    constructor() {
        super();
        this.toggleOpen = this.toggleOpen.bind(this);
        this.state = {
            open: false,
        };
    }
    toggleOpen() {
        this.setState({ open: !this.state.open });
    }
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <div>
                    <Headroom
                        style={{
                            zIndex: 2,
                        }}
                        disable={this.state.open}
                        wrapperStyle={{
                            position: 'absolute',
                            width: '100%',
                        }}
                    >
                        <MenuBar>
                            <MenuBarSignature href="/#">
                                <Signature />
                            </MenuBarSignature>
                            <Menu>
                                <MenuItem href="/#approach">Approach</MenuItem>
                                <MenuItem href="/#skills">Skills</MenuItem>
                                <MenuItem href="/#projects">Projects</MenuItem>
                                <MenuItem href="/#contact">Contact</MenuItem>
                            </Menu>
                            <CloseIcon onClick={this.toggleOpen}>
                                <CloseIconLine open={this.state.open} />
                                <CloseIconLine open={this.state.open} />
                                <CloseIconLine open={this.state.open} />
                            </CloseIcon>
                        </MenuBar>
                    </Headroom>
                    <Overlay
                        open={this.state.open}
                        innerRef={overlay => (this.overlay = overlay)}
                    >
                        <CloseIcon onClick={this.toggleOpen}>
                            <CloseIconLine open={this.state.open} />
                            <CloseIconLine open={this.state.open} />
                            <CloseIconLine open={this.state.open} />
                        </CloseIcon>
                        <MenuItem onClick={this.toggleOpen} href="/#approach">
                            Approach
                        </MenuItem>
                        <MenuItem onClick={this.toggleOpen} href="/#skills">
                            Skills
                        </MenuItem>
                        <MenuItem onClick={this.toggleOpen} href="/#projects">
                            Projects
                        </MenuItem>
                        <MenuItem onClick={this.toggleOpen} href="/#contact">
                            Contact
                        </MenuItem>
                    </Overlay>
                </div>
            </ThemeProvider>
        );
    }
}

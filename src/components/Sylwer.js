import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = (x, y) => keyframes`
    from {
        transform: translate(0, 0px);
    }
    40% {
        transform: translate(${x}px, ${y}px);
    }
    to {
        transform: translate(0, -0px);
    }  
`;

const AnimatedTriangle = styled.path`
    animation-name: ${float(
        (Math.random() > 0.5 ? 1 : -1) * Math.random() * 3,
        (Math.random() > 0.5 ? 1 : -1) * Math.random() * 3
    )};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: ${() => Math.random() * -10}s;
    transform-origin: center;
`;

const Sylwer = styled.svg`
    width: 100%;
    max-height: 45vh;

    @media screen and (min-width: 650px) {
        max-height: 75vh;
    }
`;

export default () => (
    <Sylwer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 154">
        <path fill="#3A322E" d="M77.4 100.1l30.9 26.5L90 99.7l-12.6.4" />
        <path fill="#574B41" d="M100.7 106.1l7.6 20.5L90 99.7l10.7 6.4" />
        <path fill="#CEB3A9" d="M59 49l6.5 2.7-2 3.6" />
        <path fill="#DDCAC0" d="M59 49l.4 8.2 4.1-1.9" />
        <path fill="#CEB3A9" d="M63.5 55.3l2.4 5.4-6.5-3.5" />
        <path fill="#CAA99E" d="M59.4 57.2l-2.3 4.6 6-2.6" />
        <path fill="#B89B92" d="M57.1 61.8l-2.8 5.1 6.6-3.8" />
        <path fill="#D3ACA5" d="M60.4 60.4l5.5.3-2.8-1.5" />
        <path fill="#CAA99E" d="M60.4 60.4l.5 2.7-3.8-1.3" />
        <path fill="#DFBBB3" d="M60.9 63.1l4.2.5-4.7-3.2" />
        <path fill="#D2ADA5" d="M65.1 63.6l.8-2.9-5.5-.3" />
        <path fill="#CBA79F" d="M54.3 66.9l-1.1 3h3.5" />
        <path fill="#C8ABA2" d="M60.9 63.1l-4.2 6.8-2.4-3" />
        <path fill="#BF9488" d="M56.7 69.9v2.4l-3.5-2.4" />
        <path fill="#D1C3BD" d="M57.1 69.1l4.1-1.9-.3-4.1" />
        <path fill="#B09088" d="M65.1 63.6l.8-2.9 2.3 3.6" />
        <path fill="#F0D2CE" d="M61.2 67.2l-.3-4.1 4.2.5" />
        <path fill="#E7C3BC" d="M65.1 63.6l3.1.7-7 2.9" />
        <path fill="#D6C6C3" d="M61.2 67.2l.5 2.3-2.3-1.5" />
        <path fill="#E0D2CE" d="M61.7 69.5l5.2-1.2-5.7-1.1" />
        <path fill="#EED7D3" d="M68.2 64.3l-1.3 4-5.7-1.1" />
        <path fill="#A78F89" d="M68.2 64.3l.7 4.1-2-.1" />
        <path fill="#AD9089" d="M68.9 68.4l-.7 2.6-1.3-2.7" />
        <path fill="#A07873" d="M68.2 71l-2.3.8 1-3.5" />
        <path fill="#BF988D" d="M56.7 72.3v-2.4l.4-.8" />
        <path fill="#8F716F" d="M56.7 72.3l2.3-1.8-1.9-1.4" />
        <path fill="#615759" d="M59 70.5l.4-2.5-2.3 1.1" />
        <path fill="#A08283" d="M59 70.5l.4-2.5 2.3 1.5" />
        <path fill="#B79C92" d="M61.7 69.5l2.4 1.8 2.8-3" />
        <path fill="#7B5750" d="M64.1 71.3l1.8.5 1-3.5" />
        <path fill="#B7968E" d="M64.1 71.3l-5.1-.8 2.7-1" />
        <path fill="#C6A59C" d="M59 70.5l-2.3 1.8 7.4-1" />
        <path fill="#CAB7AD" d="M59 49l10.4-2.1-3.9 4.8" />
        <path fill="#CEC3BF" d="M69.4 46.9l4.1-.9-5.8 3" />
        <path fill="#584946" d="M67.7 49l5-.3.8-2.7" />
        <path fill="#706664" d="M73.5 46l3.8-.8-4.6 3.5" />
        <path fill="#544542" d="M77.3 45.2l2.4.8v1.5" />
        <path fill="#706161" d="M79.7 47.5l-7 1.2 4.6-3.5" />
        <path fill="#8B7A71" d="M65.5 51.7l2.2-2.7 5-.3" />
        <path fill="#968078" d="M65.9 60.7l-.4-9-2 3.6" />
        <path fill="#B29E92" d="M65.7 55.6l.2 5.1 6.1-3.5" />
        <path fill="#AA9C90" d="M79.7 47.5l1.7 4.7-8.7-3.5" />
        <path fill="#C2B0A3" d="M59.4 57.2L59 49l-5.7 6.5" />
        <path fill="#D4BEAF" d="M59.4 57.2l-2.3 4.6-3.8-6.3" />
        <path fill="#E1C7BD" d="M57.1 61.8l-2.8 5.1-8.9-9.7" />
        <path fill="#C1A49D" d="M57.1 61.8l-3.8-6.3-7.9 1.7" />
        <path fill="#BFA79A" d="M72 57.2l-3.8 7.1-2.3-3.6" />
        <path fill="#B2988E" d="M72 57.2l3.9.9 4.2 6.5" />
        <path fill="#CDB7B0" d="M80.1 64.6l-11.9-.3 3.8-7.1" />
        <path fill="#938070" d="M75.9 58.1l5.2-3.3 1.1 7.7" />
        <path fill="#AA9A8B" d="M80.1 64.6l2.1-2.1-6.3-4.4" />
        <path fill="#7F6C62" d="M77.1 50.5l4 4.3.3-2.6" />
        <path fill="#D9BCB2" d="M68.9 68.4l11.2-3.8-11.9-.3" />
        <path fill="#BCB2AB" d="M82.2 62.5v7.3l-2.1-5.2" />
        <path fill="#DBC4B7" d="M82.2 69.8l-13.3-1.4 11.2-3.8" />
        <path fill="#D4BDB1" d="M82.2 69.8l-1.4 7.1-8.7-8.2" />
        <path fill="#D1B5AE" d="M72.1 68.7L68.2 71l.7-2.6" />
        <path fill="#E8CDC3" d="M68.2 71l12.6 5.9-8.7-8.2" />
        <path fill="#A08D85" d="M79.7 46l-2.4-10v9.2" />
        <path fill="#E1CFC7" d="M59 49l5.2-9.6 5.2 7.5" />
        <path fill="#E4D0C9" d="M59 49l5.2-9.6-11.5-.4" />
        <path fill="#E6DBD9" d="M56.6 45.2l-10.4-3.1 6.5-3.1" />
        <path fill="#DACAC2" d="M46.2 42.1l-5.6 1.6 4.2-4.7" />
        <path fill="#E5D2D1" d="M44.8 39h7.9l-6.5 3.1" />
        <path fill="#96857C" d="M57.7 46.9l-1.4 2.4L59 49" />
        <path fill="#BFAA9E" d="M56.3 49.3l-3 6.2L59 49" />
        <path fill="#E8D9D6" d="M64.2 39.4l9.3 6.6-4.1.9" />
        <path fill="#CEBEB7" d="M77.3 45.2l-3.8.8-1.9-7.6" />
        <path fill="#E1CABF" d="M71.6 38.4l-7.4 1 9.3 6.6" />
        <path fill="#CAB3A8" d="M71.6 38.4l5.7-2.4v9.2" />
        <path fill="#9E8C85" d="M56.3 49.3l1.4-2.4-1.1-1.7" />
        <path fill="#76645D" d="M50.1 46.4l6.2 2.9.3-4.1" />
        <path fill="#92807E" d="M50.1 46.4l6.5-1.2-10.4-3.1" />
        <path fill="#75635F" d="M50.1 46.4l-6.7-1.2 2.8-3.1" />
        <path fill="#927F79" d="M43.4 45.2l-4.8 1.2 7.6-4.3" />
        <path fill="#C5B1A5" d="M38.1 55.3l7.3 1.9-7.8 5.3" />
        <path fill="#DECEC6" d="M37.6 62.5l16.7 4.4-8.9-9.7" />
        <path fill="#F8E1D6" d="M54.3 66.9l-7.5 6.8-9.2-11.2" />
        <path fill="#AC907F" d="M77.3 36l-6.7-8.9 1 11.3" />
        <path fill="#9A8D81" d="M28.4 46.9l-3.6 19.2 6-17.1" />
        <path fill="#CFBFAE" d="M37.7 62.5l-12.9 3.6 6-17.1" />
        <path fill="#C5B3A4" d="M24.8 66.1l8.8 3.2 4-6.8" />
        <path fill="#EDDBCC" d="M33.6 69.3l13.2 4.4-9.2-11.2" />
        <path fill="#AF9C8E" d="M24.8 66.1l3.6 11.4 5.2-8.2" />
        <path fill="#D9C2B6" d="M33.6 69.3l13.2 4.4-18.4 3.8" />
        <path fill="#C1AE9E" d="M80.8 76.9L78 87.1 68.2 71" />
        <path fill="#E6CFC3" d="M28.4 77.5l4.2 9.8 14.2-13.6" />
        <path fill="#EAD6C9" d="M46.8 73.7l2.4 9.9-10.3-2.5" />
        <path fill="#D3C3B4" d="M49.2 83.6l-16.6 3.7 6.3-6.2" />
        <path fill="#E6D2C6" d="M48.8 82.3l11.3-4.4-13.3-4.2" />
        <path fill="#DBC2B6" d="M60.1 77.9l3 .6 1-7.2" />
        <path fill="#E2C5BB" d="M64.1 71.3l-17.3 2.4 13.3 4.2" />
        <path fill="#D6B5AD" d="M63.1 78.5l3.1-1-2.1-6.2" />
        <path fill="#C7B0A5" d="M66.2 77.5l7.5 2.5-9.6-8.7" />
        <path fill="#BEA399" d="M65.9 71.8l3.4 4.3-5.2-4.8" />
        <path fill="#B8948D" d="M68.2 71l-2.3.8 3.6 1.3" />
        <path fill="#C6ABA1" d="M69.5 73.1l-.2 3-3.4-4.3" />
        <path fill="#C7B4A7" d="M69.5 73.1l4.3 7-4.5-4" />
        <path fill="#B4A390" d="M73.7 80l-2.9 3.3 7.2 3.8" />
        <path fill="#C8BBAC" d="M32.6 87.3l10.9 9.3 1.8-12.1" />
        <path fill="#D3C4B5" d="M43.5 96.6l10.8 4.7-5.1-17.7" />
        <path fill="#E0CEBE" d="M43.5 96.6l5.7-13-3.9.9" />
        <path fill="#DCC8B6" d="M54.3 101.3l2-15-7.1-2.7" />
        <path fill="#AD9B8B" d="M70.8 83.3l-4.9 3.5 12.1.3" />
        <path fill="#B3A492" d="M78 87.1L73.5 96l-3.3-9.1" />
        <path fill="#DCCBC2" d="M54.3 101.3l6.6 1-5-12.5" />
        <path fill="#DFBFB1" d="M55.9 89.8l5.3-1.7-.3 14.2" />
        <path fill="#E8C4BD" d="M61.2 88.1l6.1 7.9-6.3-.6" />
        <path fill="#C5B5AD" d="M60.9 102.3l6.4-6.3 2.2 4.4" />
        <path fill="#B8A899" d="M69.5 100.4l4-4.4-3.3-9.1" />
        <path fill="#D0B9AE" d="M70.2 86.9L67.3 96l2.2 4.4" />
        <path fill="#E1CFC3" d="M70.2 86.9l-9 1.2 6.1 7.9" />
        <path fill="#D5BCAE" d="M56.3 86.3l4.9 1.8-5.3 1.7" />
        <path fill="#BEB0A6" d="M65.9 86.8l-4.7 1.3 9-1.2" />
        <path fill="#BE9F95" d="M65.9 86.8l-4.8-.3.1 1.6" />
        <path fill="#B88F91" d="M65.9 86.8l4.9-3.5-6.9 3.4" />
        <path fill="#C4A99E" d="M61.1 86.5l-7.9-1.3 8 2.9" />
        <path fill="#CA969C" d="M60.1 77.9l2.6 3.6h-5.5" />
        <path fill="#CCA4AA" d="M60.1 77.9l-6.7 2.6 3.8 1" />
        <path fill="#AC938F" d="M53.4 80.5l-4.5 1.8 8.3-.8" />
        <path d="M49.2 83.6l8.1-2.1-8.1 2.1z" />
        <path fill="#AE888B" d="M57.2 81.5l-4 3.7-4-1.6" />
        <path fill="#CC899B" d="M57.2 81.5l3.9 5-7.9-1.3" />
        <path fill="#C79197" d="M62.7 81.5l.4-3-3-.6" />
        <path fill="#BA8489" d="M62.7 81.5l3.5-4-3.1 1" />
        <path fill="#AB7B80" d="M62.7 81.5l11-1.5-7.5-2.5" />
        <path fill="#DD9FAF" d="M62.7 81.5l-1.6 5-3.9-5" />
        <path fill="#C78C9B" d="M62.7 81.5l6.2-.8-1.2 4.1" />
        <path fill="#D499A4" d="M67.7 84.8l-3.8 1.9-1.2-5.2" />
        <path fill="#C88D94" d="M63.9 86.7l-2.8-.2 1.6-5" />
        <path fill="#AC7784" d="M67.7 84.8l3.1-1.5-1.9-2.6" />
        <path fill="#957875" d="M70.8 83.3l2.9-3.3-4.8.7" />
        <path fill="#C2B0A2" d="M38.1 55.3l.5-8.9-6.2 4" />
        <path fill="#847168" d="M40.6 43.7l-8.2 6.7 6.2-4" />
        <path fill="#CAB09E" d="M39 39l1.6 4.7 4.2-4.7" />
        <path fill="#AF9E8B" d="M34.1 35.5l-5.7 11.4L39 39" />
        <path fill="#B8A08B" d="M40.6 43.7l-12.2 3.2L39 39" />
        <path fill="#BCB0A0" d="M40.6 43.7l-8.2 6.7-4-3.5" />
        <path fill="#C7B7A6" d="M30.8 49l7.3 6.3-.5 7.2" />
        <path fill="#9E9082" d="M32.6 87.3l10.9 9.3-6.9 9.5" />
        <path fill="#A99F8D" d="M43.5 96.6l4.2 13.4 6.6-8.7" />
        <path fill="#C5B4A1" d="M47.7 110l-11.1-3.9 6.9-9.5" />
        <path fill="#1A1817" d="M32.6 87.3l-1.4 18.2 5.4.6" />
        <path fill="#DECDB4" d="M31.2 105.5l-10.1 7.6 14.2 11.7" />
        <path fill="#C1B09D" d="M21.1 113.1l-6.6 3.4 8.9 8.3" />
        <path fill="#D7C7B4" d="M23.4 124.8h11.9l-14.2-11.7" />
        <path fill="#C5C1AE" d="M47.7 110l12.4 2.3-5.8-11" />
        <path fill="#A9A08F" d="M60.1 112.3l.8-10-6.6-1" />
        <path fill="#C5AD92" d="M33 114.1l3.6-8-5.4-.6" />
        <path fill="#B1A99A" d="M60.1 112.3l5.8-11.1-5 1.1" />
        <path fill="#736155" d="M69.5 100.4l-1.4 8.1-2.2-7.3" />
        <path fill="#8E7F6F" d="M68.1 108.5l-8 3.8 5.8-11.1" />
        <path fill="#C7B8A6" d="M68.1 108.5l-2.4 15.6-5.7-5.5" />
        <path fill="#BFB6A6" d="M68.1 108.5l-8 3.8-.1 6.3" />
        <path fill="#E0CFBA" d="M47.7 110L33 114.1l3.6-8" />
        <path fill="#D4C7B1" d="M47.7 110l-12.4 14.8-2.3-10.7" />
        <path fill="#C1A794" d="M35.3 124.8l18.6 4.2-18.6 4" />
        <path fill="#AF9B8A" d="M35.3 124.8H23.4l11.9 8.2" />
        <path fill="#CBB3A7" d="M35.3 133l18.2 8.4.4-12.4" />
        <path fill="#D6BDB0" d="M53.9 129l16.1-.7-3.8 12" />
        <path fill="#C4B3A9" d="M53.9 129l12.3 11.3-12.7 1.1" />
        <path fill="#BCA599" d="M70 128.3l4.1 3.9-7.9 8.1" />
        <path fill="#896D63" d="M74.1 132.2l-7.8-12.7-.6 4.6" />
        <path fill="#E0D1BE" d="M50.8 119.5l-15.5 5.3L47.7 110" />
        <path fill="#D9D0C0" d="M60 118.6L47.7 110l12.4 2.3" />
        <path fill="#E1D6C7" d="M50.8 119.5l3.1 9.5-18.6-4.2" />
        <path fill="#EDDED1" d="M60 118.6L53.9 129l16.1-.7" />
        <path fill="#CDC0AF" d="M60 118.6L47.7 110l6.2 19" />
        <path fill="#CEB8AB" d="M25.3 63.4L22.6 60l-2.1 2.5" />
        <path fill="#9B8678" d="M25.3 63.4l-.5 2.7-2-3.2" />
        <path fill="#A68F82" d="M22.6 60L20 58.7l.5 3.8" />
        <path fill="#896455" d="M20 58.7l-2.5 2.6 3 1.2" />
        <path fill="#DAC8B4" d="M28.4 77.5l-3.1 1.7 1.6-6.4" />
        <path fill="#D6BEAE" d="M26.9 72.8l-6.8 1.8 5.2 4.6" />
        <path fill="#CDB1A8" d="M25.3 79.2l-3.6-.7-1.6-3.9" />
        <path fill="#CCAAA0" d="M20.2 74.6l1-3.3-3-1.8" />
        <path fill="#B38F85" d="M21.2 71.3l-2.3-5.8-.7 4" />
        <path fill="#BD8B7C" d="M18.9 65.5l-1.8-1.2 1.1 5.2" />
        <path fill="#D4A591" d="M18.9 65.5l-1.4-4.2-.4 3" />
        <path fill="#956761" d="M20.5 62.5l-3-1.2 1.4 4.2" />
        <path fill="#6B5952" d="M50.3 23.1l-6.5-1.9-.4 2.1" />
        <path fill="#635146" d="M43.8 21.2l-9.7 14.3 9.3-12.2" />
        <path fill="#1A1616" d="M43.8 21.2l8.9-1.5-2.4 3.4" />
        <path fill="#2D2725" d="M52.7 19.7l7.3 1.5-9.7 1.9" />
        <path fill="#49403B" d="M60 21.2l-9.7 1.9 9-.3" />
        <path fill="#3C3431" d="M60 21.2l10.6 5.9-11.3-4.3" />
        <path fill="#635146" d="M43.8 21.2h-4.3L26.8 46.4" />
        <path fill="#413D3A" d="M34.1 35.5l-5.7 11.4-1.6-.5" />
        <path fill="#231F1E" d="M26.8 46.4l-1.5 17 3.1-16.5" />
        <path fill="#191816" d="M26.8 46.4l-8.5-1.2L22.6 60" />
        <path fill="#100E0F" d="M26.8 46.4l-1.5 17-2.7-3.4" />
        <path fill="#130F0F" d="M18.3 45.2L20 58.7l2.6 1.3" />
        <path fill="#171311" d="M18.3 45.2l-.8 16.1 2.5-2.6" />
        <path fill="#1E1B18" d="M18.3 45.2l-2 8.2 1.2 7.9" />
        <path fill="#3E3A39" d="M39.5 21.2l-7.1-.7L23.9 41" />
        <path fill="#342E29" d="M39.5 21.2L26.8 46.4 23.9 41" />
        <path fill="#211C1A" d="M32.4 20.5L18.3 45.2l5.6-4.2" />
        <path fill="#191412" d="M23.9 41l-5.6 4.2 8.5 1.2" />
        <path fill="#312727" d="M19.2 72.1l1.3 13.1 1.2-6.7" />
        <path fill="#1A1616" d="M43.8 21.2l22.1-3.7-26.4 3.7" />
        <path fill="#1A1616" d="M65.9 17.5l1.2-2.9-27.6 6.6" />
        <path fill="#131112" d="M65.9 17.5L60 21.2l-7.3-1.5" />
        <path fill="#111" d="M32.4 20.5l21-13.6-13.9 14.3" />
        <path fill="#2A2926" d="M39.5 21.2l33.6-8-7.6-4.5" />
        <path fill="#2B2522" d="M65.9 17.5l16.7 3.7-15.5-6.6" />
        <path fill="#4C4641" d="M67.1 14.6l15.5 6.6-9.5-8" />
        <path fill="#47413B" d="M82.6 21.2l5.3 7.1-22-10.8" />
        <path fill="#110F0E" d="M60 21.2l10.6 5.9-4.7-9.6" />
        <path fill="#171311" d="M70.6 27.1l17.3 1.2-22-10.8" />
        <path fill="#453C35" d="M70.6 27.1l22.9 18.1-3.5-6.8" />
        <path fill="#1F1813" d="M87.9 28.3l-14.1.7-3.2-1.9" />
        <path fill="#4E4744" d="M90 38.4l-10.9-9.7-5.3.3" />
        <path fill="#2D2721" d="M70.6 27.1l22.9 18.1L77.3 36" />
        <path fill="#4C433B" d="M93.5 45.2v4.9L77.3 36" />
        <path fill="#2D2624" d="M77.3 36l18.6 22.1-17.2-15.9" />
        <path fill="#27201B" d="M93.5 50.1l2.4 8L77.3 36" />
        <path fill="#4A3E38" d="M78.7 42.2l1 3.8 4.2.9" />
        <path fill="#302B28" d="M83.9 46.9L90 58.5l-8.6-6.3" />
        <path fill="#453835" d="M83.9 46.9l-4.2-.9 1.7 6.2" />
        <path fill="#362F29" d="M90 58.5l5.9-.4-12-11.2" />
        <path fill="#352E29" d="M81.4 52.2l15.5 11.4 1.6 1.2-17.4-10" />
        <path fill="#4C4137" d="M95.9 58.1l2.6 6.7-8.5-6.3" />
        <path fill="#211E1B" d="M81.1 54.8l1.1 7.7 16.3 2.3" />
        <path fill="#2C241D" d="M98.5 64.8l-.2 5-16.1-7.3" />
        <path fill="#141110" d="M82.2 62.5v7.3l12.3-1.7" />
        <path fill="#3E342D" d="M98.3 69.8H82.2l12.3-1.7" />
        <path fill="#2B221B" d="M82.2 69.8l19.2 8.1-3.1-8.1" />
        <path fill="#392D24" d="M82.2 69.8l-1.4 7.1 20.6 9.4" />
        <path fill="#332C25" d="M101.4 77.9v8.4L82.2 69.8" />
        <path fill="#564B44" d="M80.8 76.9l26.2 24.4-5.6-15" />
        <path fill="#40372E" d="M80.8 76.9l26.2 24.4-27.4-20" />
        <path fill="#544944" d="M79.6 81.3l21.1 24.8 6.3-4.8" />
        <path fill="#3A312B" d="M79.6 81.3L90 99.7l10.7 6.4" />
        <path fill="#3B342E" d="M79.6 81.3L78 87.1l12 12.6" />
        <path fill="#403B38" d="M90 99.7L78 87.1 73.5 96" />
        <path fill="#39302B" d="M67.3 113.3l-1 6.2 7.8 12.7" />
        <path fill="#191412" d="M90 99.7l-20.5.7 4-4.4" />
        <path fill="#271F17" d="M108.3 126.6l-8.6 10-22.3-36.5" />
        <path fill="#14110E" d="M69.5 100.4l4.6 31.8-6.8-18.9" />
        <path fill="#463B36" d="M77.4 100.1l-7.9.3 15.9 36.2" />
        <path fill="#41352D" d="M77.4 100.1l22.3 36.5H85.4" />
        <path fill="#3A322E" d="M74.1 132.2l11.3 4.4-15.9-36.2" />
        <path fill="#2B2825" d="M51.1 15.6l2.3-8.7-13.9 14.3" />
        <path fill="#191816" d="M51.1 15.6l2.3-8.7 12.1 1.8" />
        <path fill="#201D1C" d="M21.7 78.5l3.6.7 1.6 20.7" />
        <path fill="#423D3B" d="M21.7 78.5l-1.2 6.7 6.4 14.7" />
        <path fill="#29221F" d="M32.6 87.3l-5.7 12.6 4.3 5.6" />
        <path fill="#252221" d="M32.6 87.3l-7.3-8.1 1.6 20.7" />
        <path fill="#100E0F" d="M32.6 87.3l-7.3-8.1 3.1-1.7" />
        <path fill="#2D3649" d="M23.4 124.8l11.9 8.2-11.6 7.3" />
        <path
            fill="#2D3649"
            d="M35.3 133l18.2 8.4-14.5 5.7m14.5-5.7l12.7-1.1-3.7 10.1m3.7-10.1l13.9 1.1-6-9.2"
        />
        <path fill="#1B1D26" d="M85.4 136.6l-5.3 4.8-6-9.2" />
        <path fill="#39302B" d="M99.7 136.6l-5.2 6.2-9.1-6.2" />
        <path fill="#DBB5A9" d="M54.3 66.9l-1.1 3-6.4 3.8" />
        <path fill="#DFBCB1" d="M56.7 72.3l-9.9 1.4 6.4-3.8" />
        <path fill="#AC9B93" d="M34.5 96.4l-3.3 9.1 5.4.6" />
        <path fill="#443A35" d="M22.6 60l.2 2.9 2.5.5" />
        <path fill="#CAA598" d="M21.2 71.3l1.1 2.7-2.1.6" />
        <path fill="#A38E89" d="M46.2 42.1l-7.6 4.3 2-2.7" />
        <path fill="#675A51" d="M79.7 46v1.5l1.7 4.7" />
        <path fill="#D9C2BB" d="M61 95.4l-.1 6.9 6.4-6.3" />
        <path fill="#907369" d="M48.8 82.3l.4 1.3 8-2.1" />
        <path fill="#32302B" d="M32.4 20.5l-12.1 15-2 9.7" />
        <path fill="#2E2D28" d="M53.4 6.9l-14.6 5.7-6.4 7.9" />
        <path fill="#3F352C" d="M107 101.3l1.3 25.3-7.6-20.5" />
        <path fill="#30496D" d="M62.5 150.4L39 147.1l14.5-5.7" />
        <path fill="#455A77" d="M23.7 140.3l15.3 6.8-3.7-14.1" />
        <path fill="#1F2D3D" d="M14.5 116.5H4l19.4 8.3" />
        <path fill="#517096" d="M23.7 140.3l-.3-15.5-8 4.2" />
        <path fill="#32383F" d="M4 116.5L15.4 129l8-4.2" />
        <path fill="#2C3F54" d="M66.2 140.3l13.9 1.1-17.6 9" />
        <path fill="#BBAA9D" d="M24.8 66.1L22.2 74l4.7-1.2" />
        <path fill="#B8988F" d="M22.2 74l2.6-7.9-5.9-.6" />
        <path fill="#BCA29B" d="M20.5 62.5l2.3.4-3.9 2.6" />
        <path fill="#CFBBB2" d="M24.8 66.1l-2-3.2-3.9 2.6" />
        <path fill="#403A38" d="M90 38.4l-10.9-9.7 8.8-.4" />
        <path fill="#D5CAC7" d="M38.6 46.4l-.5 8.9 5.3-10.1" />
        <path fill="#B49E8E" d="M56.3 49.3l-2.1 4.4-4.1-7.3" />
        <path fill="#C4AFA2" d="M40.6 50.5l9.5-4.1-6.7-1.2" />
        <path fill="#A28E81" d="M52.2 50.2l-7-1.7 4.9-2.1" />
        <path fill="#6F7072" d="M44.4 51.6l-2.3.7-1.5 1.8" />
        <path fill="#E2E2E2" d="M44.8 55.5l-1.3-1.8-2.9.4" />
        <path fill="#C9C9C9" d="M44.4 51.6l-.9 2.1-2.9.4" />
        <path fill="#D1D1D1" d="M48.3 51.5l.8 2.2 2.4 1.3" />
        <path fill="#E2E2E2" d="M48 55.3l3.5-.3-2.4-1.3" />
        <path fill="#554C4A" d="M46.2 53.3l-1.4 2.2-1.3-1.8" />
        <path fill="#5B5352" d="M48 55.3l-3.2.2 1.4-2.2" />
        <path fill="#605858" d="M46.2 53.3l-1.8-1.7-.9 2.1" />
        <path fill="#352B2A" d="M48.3 51.5l-2.1 1.8-1.8-1.7" />
        <path fill="#5D5249" d="M49.1 53.7L48 55.3l-1.8-2" />
        <path fill="#473B34" d="M48.3 51.5l.8 2.2-2.9-.4" />
        <path fill="#5F514A" d="M40.6 50.5l1.5 1.8-1.5 1.8" />
        <path fill="#56413A" d="M38.1 55.3l2.5-1.2v-3.6" />
        <path fill="#9A857B" d="M44.8 55.5l-6.7-.2 2.5-1.2" />
        <path fill="#B49895" d="M45.4 57.2l-.6-1.7-6.7-.2" />
        <path fill="#AC8581" d="M53.3 55.5l-1.8-.5-6.1 2.2" />
        <path fill="#B3979B" d="M51.4 55l-6.6.5.6 1.7" />
        <path fill="#6D6763" d="M40.6 50.5l3.8 1.1.8-3.1" />
        <path fill="#615858" d="M48.3 51.5l-3.1-3-.8 3.1" />
        <path fill="#887979" d="M52.2 50.2l-7-1.7 3.1 3" />
        <path fill="#AA8676" d="M53.3 55.5l.9-1.8-5.9-2.2" />
        <path fill="#896155" d="M51.5 55l-3.2-3.5 5 4" />
        <path fill="#7A5B51" d="M52.2 50.2l2 3.5-5.9-2.2" />
        <path fill="#534649" d="M40.6 50.5l3.8 1.1-2.3.7" />
        <path fill="#A28583" d="M65.7 55.6l11.4 1.7-1.2.8" />
        <path fill="#9F8A7C" d="M65.7 55.6l7-6.9-7.2 3" />
        <path fill="#C9C9C9" d="M67.4 55.9l4.8-3.2-.7 2.4" />
        <path fill="#E2E2E2" d="M72.8 56.7l-1.3-1.6-4.1.8" />
        <path fill="#605858" d="M72.2 52.7l1.6 2.1-2.3.3" />
        <path fill="#302627" d="M75.3 52.7l-1.5 2.1-1.6-2.1" />
        <path fill="#463D36" d="M76.2 54.9l-.9-2.2-1.5 2.1" />
        <path fill="#483A3A" d="M73.8 54.8l-1 1.9-1.3-1.6" />
        <path fill="#493932" d="M73.8 54.8l1.5 1.8.9-1.7" />
        <path fill="#5B514B" d="M73.8 54.8l1.5 1.8-2.5.1" />
        <path fill="#D1D1D1" d="M75.3 52.7l2.4 2.1-1.5.1" />
        <path fill="#E2E2E2" d="M75.3 56.6l2-.1-1.1-1.6" />
        <path fill="#BCBCBC" d="M77.7 54.8l-.4 1.7-1.1-1.6" />
        <path fill="#917C71" d="M70.3 51.1l6.8-.6-4.4-1.8" />
        <path fill="#77655A" d="M78.7 56.3l1.6-2.5.8 1" />
        <path fill="#7B6764" d="M72.2 52.7l3.1-2-5 .4" />
        <path fill="#634A4C" d="M65.7 55.6l6.5-2.9-1.9-1.6" />
        <path fill="#89656B" d="M67.4 55.9l4.8-3.2-6.5 2.9" />
        <path fill="#938886" d="M77.1 57.3l.2-.8-4.5.2" />
        <path fill="#59494A" d="M75.3 52.7v-2l-3.1 2" />
        <path fill="#726364" d="M77.1 50.5l.6 4.3-2.4-2.1" />
        <path fill="#856D6B" d="M77.1 50.5l-1.8 2.2v-2" />
        <path fill="#604F4C" d="M77.7 54.8l2.6-1-3.2-3.3" />
        <path fill="#5D4643" d="M77.1 57.3l1.6-1-1-1.5" />
        <path fill="#45322E" d="M80.3 53.8l-1.6 2.5-1-1.5" />
        <path fill="#AC9481" d="M38.6 29.7L39 39l-4.9-3.5" />
        <path fill="#E0C6B9" d="M52.7 39l5.8-8.7 5.7 9.1" />
        <path fill="#DFC5B5" d="M58.5 30.3l13.1 8.1-7.4 1" />
        <path fill="#D2B6A2" d="M47.6 29.7L39 39h5.8" />
        <path fill="#DFC2B1" d="M47.6 29.7l5.1 9.3h-7.9" />
        <path fill="#C4AA94" d="M38.6 29.7h9L39 39" />
        <path fill="#E6C9BA" d="M52.7 39l5.8-8.7-10.9-.6" />
        <path fill="#D0B5A2" d="M47.6 29.7l11.7-6.9-.8 7.5" />
        <path fill="#CAAB98" d="M71.6 38.4l-1-11.3-12.1 3.2" />
        <path fill="#B29783" d="M59.3 22.8l11.3 4.3-12.1 3.2" />
        <path fill="#AE9482" d="M47.6 29.7l-4.2-6.4-4.8 6.4" />
        <path fill="#BDA18D" d="M59.3 22.8l-11.7 6.9-4.2-6.4" />
        <AnimatedTriangle fill="#423D3B" d="M14 88.2l5.9 14.1-7.1-8" />
        <AnimatedTriangle fill="#171311" d="M86.9 14.6l5.3 6.6.4-4.6" />
        <AnimatedTriangle fill="#517096" d="M84.4 142.6l-5.3 4.9 13.3.6" />
        <AnimatedTriangle fill="#61574F" d="M112.6 131.6l-8.5 10 7.6-3.6" />
        <AnimatedTriangle fill="#564B44" d="M113.4 69.7l-4.4 3.9 2.5 5.1" />
        <AnimatedTriangle fill="#3E3A39" d="M12.4 38.8l-1 8.4L9.8 42" />
        <AnimatedTriangle fill="#635146" d="M45.1 5.2L37.6 9 41 4.8" />
        <AnimatedTriangle fill="#3E3A39" d="M24.5 14.4l-7.2 12.2 4.8-3" />
        <AnimatedTriangle fill="#211E1B" d="M112.6 89.8l-.6 7.6 4.4 6.2" />
        <AnimatedTriangle fill="#453C35" d="M105.7 49.1l-1.7 6.3 4.3-3.3" />
        <AnimatedTriangle fill="#2A2926" d="M68.7 6.9l5.8 4.3-1-4.3" />
        <AnimatedTriangle fill="#453C35" d="M100.7 33.3l4.4 5.1 1-4.5" />
    </Sylwer>
);

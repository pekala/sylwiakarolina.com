import { css } from 'styled-components';

export default (
    property,
    minSize,
    maxSize,
    minWidth = 330,
    maxWidth = 1200
) => css`
    ${property}: ${minSize}px;

    @media screen and (min-width: ${minWidth}px) {
        ${property}: calc(${minSize}px + ${maxSize -
    minSize} * (100vw - ${minWidth}px) / ${maxWidth - minWidth});
    }

    @media screen and (min-width: ${maxWidth}px) {
        ${property}: ${maxSize}px;
    }
`;

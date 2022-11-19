import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const SpinnerContainer = styled.span`
    display: inline-block;

    &.fullScreen {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.fullContainer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spinner {
        animation: ${animate} 2.5s linear infinite, 1 !important;
    }

    .small {
        font-size: 2rem;
    }

    .medium {
        font-size: 4rem;
    }

    .large {
        font-size: 6rem;
    }

    .inherit {
        font-size: inherit;
    }
`;

export default SpinnerContainer;

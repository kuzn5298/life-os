import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        transform: rotate(0deg);
    }
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

    .loader {
        border: 0.25rem solid;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: ${animate} 1s linear infinite;

        &.primary {
            border-color: ${({ theme }) => theme.palette.primary.main};
            border-bottom-color: transparent;
        }

        &.secondary {
            border-color: ${({ theme }) => theme.palette.secondary.main};
            border-bottom-color: transparent;
        }

        &.appContrast {
            border-color: ${({ theme }) =>
                theme.palette.getContrastText(theme.palette.background.app)};
            border-bottom-color: transparent;
        }

        &.paperContrast {
            border-color: ${({ theme }) =>
                theme.palette.getContrastText(theme.palette.background.paper)};
            border-bottom-color: transparent;
        }

        &.backdropContrast {
            border-color: ${({ theme }) =>
                theme.palette.getContrastText(theme.palette.background.backdrop)};
            border-bottom-color: transparent;
        }

        &.small {
            width: 2rem;
            height: 2rem;
        }

        &.medium {
            width: 3rem;
            height: 3rem;
        }

        &.large {
            width: 4rem;
            height: 4rem;
        }
    }
`;

export default SpinnerContainer;

import styled from 'styled-components';

const MainLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .header {
        display: flex;
        gap: ${({ theme }) => theme.spacing(2)};
        justify-content: flex-end;
        padding: ${({ theme }) => theme.spacing(2)};
        padding-top: ${({ theme }) => theme.spacing(1)};
    }

    .body {
        flex: 1;
    }
`;

export default MainLayoutContainer;

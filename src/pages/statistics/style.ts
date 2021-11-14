import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1.5rem;
    height: 100vh;
    width: 100%;

    header {
        padding: 2rem 0;
    }

    a {
        display: flex;
        align-items: center;
        color: #eb5569;
        text-decoration: none;
        font-size: 1.5rem;

        svg {
            margin-right: 1rem;
        }
    }
`;

export const StatisticsContainer = styled.div``;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;

    h1 {
        font-size: 3.5rem;
        color: #fff;
    }
`;

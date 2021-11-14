import styled from 'styled-components';
import backgroundImage from '../../styles/img/backgroundcovid.png';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 3.5rem;
    }

    p {
        color: #8391a7;
        font-size: 1.5rem;
    }

    button {
        width: 30rem;
        padding: 2rem;
        border-radius: 1rem;
        background: transparent;
        border-style: none;
        font-weight: bold;
        font-size: 2rem;
        cursor: pointer;
        border: 2px solid #eb5569;
        color: #eb5569;
        transition: all 0.2s;

        &:hover {
            background: #eb5569;
            color: #222b45;
        }
    }
`;

export const InputSearch = styled.div`
    width: 40rem;
    background: #8391a7;
    padding: 2rem 1rem;
    border-radius: 0.8rem;
    display: flex;
    margin: 2rem 0;

    input {
        width: 100%;
        background: transparent;
        border-style: none;
        outline: 0;
        color: #fff;
        font-family: 'Oxygen', sans-serif;
        color: #222b45;
        font-weight: bold;
        font-size: 1.5rem;

        &::placeholder {
            color: #3b486e;
        }
    }

    svg {
        margin-right: 1rem;
        color: #222b45;
    }
`;

export const ErrorComponent = styled.div`
    position: relative;
    transition: 0.2s;
    p {
        font-size: 1.5rem;
        background: #eb5569;
        color: #000;
        margin: 0.5rem;
        padding: 1rem 0.5rem;
        border-radius: 0.2rem;
    }

    div {
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;

        border-top: 15px solid #eb5569;
        position: absolute;
        top: 4rem;
        left: 80%;
    }
`;

export const SquareLink = styled.a`
    text-decoration: none;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    color: #222b45;
    padding: 2rem;
    width: 35rem;
    font-size: 2rem;
    text-align: center;
    border-radius: 0.5rem;
    font-weight: bold;

    svg {
        margin-left: 1rem;
    }
`;

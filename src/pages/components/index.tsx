import React from 'react';
import { Container } from './style';

interface SquareStatistics {
    title: string;
    number: string;
}

const SquareStatistics = ({ title, number }: SquareStatistics) => {
    return (
        <Container>
            <h3>{title}</h3>
            <h1>{number}</h1>
        </Container>
    );
};

export default SquareStatistics;

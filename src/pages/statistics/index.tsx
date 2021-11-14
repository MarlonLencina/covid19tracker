import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Container, StatisticsContainer, Title } from './style';
import SquareStatistics from '../components';
import api from '../../services/clientAPI';

interface propsDataCountry {
    country: string;
    confirmed: string;
    deaths: string;
    population: string;
}

interface iparams {
    country: string;
}

const Statistics = () => {
    const [dataCountry, setDataCountry] = useState<propsDataCountry | null>(
        null,
    );
    const { country }: iparams = useParams();

    useEffect(() => {
        const getData = async () => {
            const [response] = await Promise.all([
                api.get(`/cases?country=${country}`),
            ]);
            setDataCountry(response.data.All);
        };
        getData();
    }, [country]);

    return (
        <Container>
            <header>
                <a href="/">
                    <FaArrowLeft /> Voltar
                </a>
            </header>
            <Title>
                <h3>Covid-19 Tracker</h3>
                <h1>Statistics: {dataCountry?.country}</h1>
            </Title>
            <StatisticsContainer>
                <SquareStatistics
                    title="Ativos"
                    number={dataCountry?.confirmed ?? ''}
                />
                <SquareStatistics
                    title="Mortes"
                    number={dataCountry?.deaths ?? ''}
                />
                <SquareStatistics
                    title="População"
                    number={dataCountry?.population ?? ''}
                />
            </StatisticsContainer>
        </Container>
    );
};

export default Statistics;

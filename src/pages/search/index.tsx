import React, { useState } from 'react';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import api from '../../services/clientAPI';
import { Container, InputSearch, ErrorComponent, SquareLink } from './style';

interface Iresults {
    countryName: string;
}

const Search = () => {
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');
    const [results, setResults] = useState();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
        e: React.FormEvent<HTMLFormElement>,
    ) => {
        e.preventDefault();
        try {
            const response = await api.get(`/cases?country=${country}`);
            if (!response.data.All || !country)
                throw Error('Revise o dado colocado, e tente novamente');
            setError('');
            window.location.replace(`/result/${country}`);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Container>
            <h1>Covid-19 Tracker</h1>
            <p>
                Pesquise pelo nome de seu pais, para conferir suas estatisticas.
            </p>
            <form onSubmit={handleSubmit}>
                {error && (
                    <ErrorComponent>
                        <p>{error}</p>
                        <div> </div>
                    </ErrorComponent>
                )}
                <InputSearch>
                    <FaSearch size={20} />
                    <input
                        onChange={e => setCountry(e.target.value)}
                        type="text"
                        name=""
                        id=""
                        placeholder="Brazil"
                    />
                </InputSearch>
                <button type="submit">PESQUISAR</button>
            </form>
        </Container>
    );
};

export default Search;

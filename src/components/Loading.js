import React from 'react';
import LoadingPokemon from '../assets/loading.svg';
import styled from '@emotion/styled'

const Loading = () => {

    const LoadingComp = styled.div`
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px 36px;
        display: inline-flex;
        vertical-align: middle;
        align-content: center;
        align-items: center;
        height: 400px;

        img{
            max-width: 200px;
            padding: 10px;
            width: 100%;
        }
    `;

    return (
        <LoadingComp>
            <img src={LoadingPokemon} alt="logo"></img>
        </LoadingComp>
    )
}

export default Loading;
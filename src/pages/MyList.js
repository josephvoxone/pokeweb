import React from 'react';
import CardOwned from '../components/CardOwned';
// import Loading from '../components/Loading';
import styled from '@emotion/styled'
import { DiscardPokemon, getPokemon } from '../service/providers/Pokemon';
import { useHistory } from 'react-router-dom';

const MyList = () => {

    const history = useHistory()
    const mypokemons = getPokemon

    const Empty = styled.div`
        min-height: 400px;
        display: grid;
        justify-content: center;
        align-content: center;
    `;
    const Title = styled.h1`
        text-transform: capitalize;
        margin-top: 0;
        margin-bottom: 5px;
        color: white;
    `;
    const Subtitle = styled.h4`
        margin-top: 0;
        margin-bottom: 5px;
        color: white;
        font-weight: 400;
    `;
    const List = styled.div`
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: 100%;
        min-height: 400px;
        display: flex;
        width: 1000px;
        margin: 0 auto;
    `;

    const OnDelete = (nickname) => {
        DiscardPokemon(nickname)
        history.go(0)
        console.log(getPokemon)
    }

    if (!mypokemons.length) {
        return (
            <Empty key='1'>
                <Title>Oops!</Title>
                <Subtitle>seems you doesn't have any pokemon.</Subtitle>
            </Empty>
        )
    };
    if (mypokemons) {
        const datapokemon = mypokemons.map(({ id, nickname, pokemon }, index) => {
            return <CardOwned
                key={nickname}
                index={index}
                id={id}
                pokemon={pokemon}
                nickname={nickname}
                onClick={OnDelete}
            />
        })
        console.log(datapokemon)

        return (
            <>
                <List>
                    {datapokemon}
                </List>
            </>
        )
    }

}

export default MyList;
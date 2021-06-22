import React, { useState } from 'react';
import { QUERY_LIST } from '../service/queries/Pokemon';
// import CardItem from '../components/CardItem';
import Loading from '../components/Loading';
import styled from '@emotion/styled'
import { getPokemon } from '../service/providers/Pokemon';
import { useQuery } from '@apollo/client';

const PokeList = () => {

    const [ItemOffset] = useState(0)
    const [ItemLimit, SetItemLimit] = useState(12)

    const { loading, error, data } = useQuery(QUERY_LIST, { variables: { limit: ItemLimit, offset: ItemOffset } })
    const CardItem = React.lazy(() => import('../components/CardItem'));

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

    const Empty = styled.div`
        min-height: 400px;
        display: grid;
        justify-content: center;
        align-content: center;
    `

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

    const LoadMore = styled.button`
        cursor: pointer;
        padding: 10px 25px;
        background: linear-gradient(
    45deg
    , #2c72b9, #03a9f4);
        outline: none;
        border: none;
        border-bottom: 2px solid #fec70d;
        font-weight: 700;
        border-radius: 5px;
        color: #ffff;
        letter-spacing: 1px;
        font-size: 12pt;
        margin-bottom: 20px;
        transition: .5s;

        &:hover {
            // margin-top: -10px;
            // color: #000;
            // border: 2px solid #000;
            filter: invert(1);
            transition: .5s;
        }
    `;

    if (loading) return (<Loading />);
    if (error) return (
        <Empty>
            <Title>Oops!</Title>
            <Subtitle>please check your connection, failed to fetch data.</Subtitle>
        </Empty>
    );
    if (data) {
        const OnloadMore = async () => {
            // const total = data.pokemons.results.length + ItemLimit
            // SetItemOffset(data.pokemons.results.length)
            SetItemLimit(data.pokemons.results.length + ItemLimit)
            // console.log('total', total)
        }

        const injectList = data.pokemons.results.map((pokemon) => {
            const total = getPokemon.filter(({ id }) => {
                return pokemon.id === id
            })
            return Object.assign({ ...pokemon }, { qty: total.length })
        })

        const dataPokemons = injectList.map(({ id, name, image, qty }) => (
            < CardItem
                key={name}
                id={id}
                name={name}
                qty={qty}
                image={image}
            />
        ))
        return (
            <>
                <List>
                    {dataPokemons}
                </List>
                <LoadMore onClick={OnloadMore}>load more</LoadMore>
            </>
        )
    }

}

export default PokeList;
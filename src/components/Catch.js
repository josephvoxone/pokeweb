import React, { useState } from 'react';
import styled from '@emotion/styled'
import { AddPokemon, getPokemon } from '../service/providers/Pokemon';
import { useHistory } from 'react-router-dom';

const Catch = (props) => {

    const pokemon = props.pokemon
    const history = useHistory();
    const [Valid, setValid] = useState()

    const Title = styled.h3`
        margin-top: 100px;
        margin-bottom: 5px;
        color: white;
    `;

    const SubTitle = styled.p`
        margin-top: 0;
        font-weight: 400;
        color: #f1f1f1;
    `;

    const Form = styled.form`
        display: inline-grid;
    `;

    const BtnPoke = styled.button`
        outline: none;
        border: none;
        padding: 10px 20px;
        border-radius: 7px;
        margin-top: 10px;
        background: linear-gradient(
    45deg
    , #e5c823, #ffbf00);
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.5s;
        letter-spacing: 1px;

        &:hover { 
            transition: background 0.5s;
            background: linear-gradient(
                45deg
                , #fff3af, #ffeb3b);
        }
    `;

    const NickInput = styled.input`
        padding: 10px 30px;
        outline: none;
        border: none;
        border-radius: 6px;
        font-weight: 500;
        font-size: 10pt;
    `;

    const Warn = styled.div`
        padding: 10px 30px;
        outline: none;
        border: none;
        border-radius: 6px;
        font-weight: 500;
        font-size: 10pt;
    `;



    const OnClickSubmit = (e) => {
        e.preventDefault()

        const newData = {
            id: props.pokemon.id,
            nickname: e.target.nickname.value.trim(),
            pokemon: props.pokemon.name,
        }

        const find = getPokemon.some((pokemon) => {
            return pokemon.nickname === e.target.nickname.value.trim()
        })

        setValid(!find)

        if (!find) {
            AddPokemon(newData);
            history.go(0)
        }

    }

    return (
        <>
            <Title>Congratulation, you got {pokemon.name}!</Title>
            <SubTitle>fill in the nickname to get this pokemon</SubTitle>
            <Form onSubmit={OnClickSubmit}>
                <NickInput autoComplete="off" type="text" name="nickname" placeholder="Nickname" maxLength="10" required></NickInput>
                {Valid === false ? <Warn>Oops, Please use different name!</Warn> : ''}
                <BtnPoke type="submit">SUBMIT</BtnPoke>
            </Form>
        </>
    )
}

export default Catch;
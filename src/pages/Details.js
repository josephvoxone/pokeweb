import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DETAIL } from '../service/queries/Pokemon';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Catch from '../components/Catch';
import styled from '@emotion/styled'
import LogoPokeball from '../assets/pokeball.svg';

const Details = () => {
    const { name } = useParams();
    const { loading, error, data } = useQuery(QUERY_DETAIL, { variables: { name } });

    const [Status, setStatus] = useState('idle');

    const Pokeball = styled.button`
        width: 80px;
        z-index: 999;
        position: relative;
        left: 0;
        bottom: -185px;
        cursor: pointer;
        transition: transform .7s cubic-bezier(0.18, 0.89, 0.32, 1.28);


        &:hover { 
            transition: transform .7s cubic-bezier(0.18, 0.89, 0.32, 1.28);
            transform: rotate(720deg);
        }
          
        &:active {
            transition: .2s;
            bottom: -190px;
        }
    `;

    const Container = styled.div`
        // background: white;
        margin-bottom: 100px;

        .btnPokeball{
            position: relative;
            background: 0;
            outline: none;
            border: none;
        }
        
        .btnPokeball:hover ~ .poketips {
            visibility: visible;
        }
    `;

    const Empty = styled.div`
        min-height: 400px;
        display: grid;
        justify-content: center;
        align-content: center;
    `

    const Subtitle = styled.h4`
        margin-top: 0;
        margin-bottom: 5px;
        color: white;
        font-weight: 400;
    `;

    const SubTitle = styled.p`
        margin-bottom: 0;
        font-weight: 400;
        color: #c1c1c1;
    `;

    const Title = styled.h1`
        text-transform: capitalize;
        margin-top: 0;
        margin-bottom: 5px;
        color: white;
    `;
    
    const LabelInfo = styled.p`
        letter-spacing: 1pt;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        margin: 5px;
    `;

    const LabelAbility = styled.div`
        background: #ffcb05;
        display: inline-flex;
        padding: 7px 15px;
        font-weight: 600;
        border-radius: 8px;
        margin: 4px;
        text-transform: capitalize;
    `;

    const LabelType = styled.div`
        background: #000;
        display: inline-flex;
        padding: 7px 15px;
        font-weight: 600;
        border-radius: 8px;
        margin: 4px;
        text-transform: capitalize;
        color: #fff;

        &.normal {
            background: #ffcb05;
        }
        
        &.fighting {
            background: #f44336;
        }
        
        &.flying {
            background: #60cdff;
        }
        
        &.poison {
            background: #673ab7;
        }
        
        &.ground {
            background: #737373;
        }
        
        &.rock {
            background: #795548;
        }
        
        &.bug {
            background: #8bc34a;
        }
        
        &.ghost {
            background: #a0a0a0;
        }
        
        &.steel {
            background: #a77979;
        }
        
        &.fire {
            background: #ff5722;
        }
        
        &.water {
            background: #2196f3;
        }
        
        &.grass {
            background: #4caf50;
        }
        
        &.electric {
            background: #00bcd4;
        }
        
        &.psychic {
            background: #795548;
        }
        
        &.ice {
            background: #03a9f4;
        }
        
        &.dragon {
            background: #ff9800;
        }
        
        &.dark {
            background: #000000;
        }
        
        &.fairy {
            background: #655ec3;
        }
        
        &.unknown {
            background: #5ec3ac;
        }
        
        &.shadow {
            background: #565656;
        }
    `;

    const LabelMove = styled.div`
        background: #ffcb05;
        display: inline-flex;
        padding: 7px;
        font-weight: 600;
        border-radius: 8px;
        margin: 4px;
        font-size: 12px;
    `;

    const RowInfo = styled.div`
        background: linear-gradient(
            45deg
            , #2c72b9, #2196f3);
        padding: 40px 50px;
        border-radius: 10px;
        width: fit-content;
        margin: auto;
        padding-top: 140px;
        max-width: 580px;
        border-top: 5px solid #ffcb05;
        border-bottom: 5px solid #ffcb05;
        
        @media (max-width: 680px) {
            padding: 20px;
            padding-top: 140px;
        }
    `;

    const RowPoke = styled.div`      
        .row-item {
            display: inline-block;
            padding: 10px 20px;
        }
    `;

    const ImgFeatured = styled.div`
        background: linear-gradient( 
        45deg
         , #c7a008, #ffeb3b);
        border: 9px solid #2c72b9;
        padding: 40px 50px;
        border-radius: 100%;
        filter: drop-shadow(2px 4px 6px rgb(21 21 21 / 6%));
        margin: auto;
        margin-bottom: -230px;
        width: 300px;
        box-sizing: border-box;
        height: 300px;
        transition: 0.5s;
        filter: sepia(1);

        @media (max-width: 680px) {
            padding: 40px 0;
            width: 200px;
            height: 200px;

            img {
                width: 100px;
                height: 100px;
            }
        }
        
        img{
            transition: 0.5s;
        }

        img:hover, &:hover {
            z-index: 999;
            position: relative;
            filter: unset;
            transition: 0.5s;
        }
    `

    const Accordion = styled.div`
        margin: 10px 0 ;
            
        input[type="checkbox"] {
            position: absolute;
            left: -100vw;
        }
        .content {
            overflow-y: hidden;
            height: 0;
            transition: height 0.3s ease;
        }
        input[type="checkbox"]:checked ~ .content {
            height: auto;
            overflow: visible;
        }
      
        label {
            display: block;
        }
        
        input[type="checkbox"]:checked ~ .content {
            padding: 15px;
            border: 1px solid #0ea2f1;
            border-top: 0;
        }
        
        .handle {
            margin: 0;
            font-size: 1.125em;
            line-height: 1.2em;
        }
        
        label {
            color: #fff;
            cursor: pointer;
            padding: 11px 20px;
            text-align: left;
            background: linear-gradient(
        45deg
        , #2390ea, #03a9f4);
            font-weight: 600;
            transition: 0.5s;
        }
        
        label:hover,
        label:focus {
            background: linear-gradient(
                45deg
                , #ebd129, #debf1d);
                    color: #000;
            transition: 0.5s;
            padding-left: 40px;
            border-left: 10px solid;
        }
  
    `;

    const PokeTip = styled.div`
        position: relative;
        visibility: hidden;
        bottom: -125px;
        left: 110px;
        background: rgb(60 60 60 / 61%);
        width: fit-content;
        padding: 7px 10px;
        color: #fff;
        border-radius: 10px;
        margin: 0 auto;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 700;
        z-index: 9999;
    `;

    const Toast = styled.div`
        visibility: hidden;
        min-width: 250px;
        margin-left: -125px;
        background-color: #ed5564;
        color: #fff;
        text-align: center;
        border-radius: 12px;
        padding: 9px;
        position: fixed;
        z-index: 1;
        left: 50%;
        bottom: 30px;
        
        &.show {
            visibility: visible;
            animation: fadein 0.3s, fadeout 0.3s 1s;
            animation-fill-mode: forwards;
        }

        @keyframes fadein {
            from {bottom: 0; opacity: 0;}
            to {bottom: 100px; opacity: 1;}
        }

        @keyframes fadeout {
            from {bottom: 100px; opacity: 1;}
            to {bottom: 0; opacity: 0;}
        }
    `

    const onClickCatch = async (e) => {
        e.preventDefault()
        const isCatched = Boolean(Math.round(Math.random()))
        // const isCatched = false
        if (isCatched) {
            setStatus('success')
        } else {
            await setTimeout(() => {
                setStatus('failed')
            }, 500);

            setStatus('idle')
        }
        console.log('Status', Status)
    }

    if (loading) return <Loading />
    if (error) return (
        <Empty>
            <Title>Oops!</Title>
            <Subtitle>please check your connection, failed to fetch data.</Subtitle>
        </Empty>
    );
    if (Status === 'success') {
        const SvgImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.pokemon.id}.svg`

        return (
            <Container>
                <ImgFeatured>
                    <img width='200' height='200' src={SvgImage} alt={data.pokemon.name} />
                </ImgFeatured>
                <RowInfo>
                    <Catch pokemon={data.pokemon}></Catch>
                </RowInfo>
            </Container>
        )

    }
    if (data) {
        // console.log(data)
        const abilities = data.pokemon.abilities.map((poke, index) => {
            return <LabelAbility key={index}>{poke.ability.name}</LabelAbility>
        })
        const stats = data.pokemon.stats.map((poke, index) => {
            const ProgressBar = styled.div`
                    background-color: black;
                    border-radius: 13px;
                    /* (height of inner div) / 2 + padding */
                    padding: 3px;
                    width: 100%;
                    height: fit-content;


                    div {
                        background: linear-gradient(45deg, #ff9800, #ffc107);
                        width: ${poke.base_stat * 100 / 255}%;
                        /* Adjust with JavaScript */
                        height: 20px;
                        border-radius: 10px;
                        animation-fill-mode: forwards;
                        animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
                        animation: loader-${poke.stat.name} 2s;
                    }

                    @keyframes loader-${poke.stat.name} {
                        0% {width: 0%}
                        50% { width: ${poke.base_stat * 100 / 255 / (Math.floor(Math.random() * 3))}%} 
                        100% { width: ${poke.base_stat * 100 / 255}%} 
                    }
                    
                }
            `;

            const StatBar = styled.div`
                max-width: 140px;
                width: 100%;
                text-align: left;
                font-weight: 600;
                text-transform: capitalize;
                color: #fff;
            `;

            const BaseStat = styled.div`
                max-width: 30px;
                width: 100%;
                text-align: left;
                font-weight: 600;
                text-transform: capitalize;
                color: white;
                background: #000000;
                text-align: center;
                border-radius: 12px;
                margin: 0 7px;
                height: fit-content;
                padding: 3px;
                font-size: 10pt;
            `;

            const RowStat = styled.div`
                clear: both;
                display: flex;
                margin: 10px 0;
                align-items: center;
            `;

            return [
                <RowStat key={index}>
                    <StatBar>{poke.stat.name}</StatBar>
                    <BaseStat>{poke.base_stat}</BaseStat>
                    <ProgressBar><div></div></ProgressBar>
                </RowStat>
            ]
        })
        const types = data.pokemon.types.map((poke, index) => {
            return <LabelType className={poke.type.name} key={index}>{poke.type.name}</LabelType>
        })
        const moves = data.pokemon.moves.map((poke, index) => {
            return <LabelMove key={index}>{poke.move.name}</LabelMove>
        })

        const SvgImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.pokemon.id}.svg`

        return (
            <>
                <Container>
                    {Status === 'failed' ? <Toast className='show'>Oops, you miss!</Toast> : ''}
                    <ImgFeatured>
                        <img width='200' height='200' src={SvgImage} alt={data.pokemon.name} />
                    </ImgFeatured>
                    <Pokeball onClick={onClickCatch} className="btnPokeball">
                        <img src={LogoPokeball} alt='pokeball'></img>
                    </Pokeball>
                    <PokeTip className="poketips">Click to Catch</PokeTip>
                    <RowInfo>
                        <RowPoke>
                            {/* #{String(data.pokemon.id).padStart(3, '0')} */}
                            <SubTitle>Pokémon</SubTitle>
                            <Title>{data.pokemon.name}</Title>
                        </RowPoke>
                        <RowPoke>
                            <div className="row-item">
                                <LabelInfo>TYPE</LabelInfo>
                                {types}
                            </div>
                            <div className="row-item">
                                <LabelInfo>ABILITIES</LabelInfo>
                                {abilities}
                            </div>
                        </RowPoke>
                        <RowPoke>
                            <Accordion>
                                <input type="checkbox" id="handle2" defaultChecked />
                                <h2 className="handle">
                                    <label htmlFor="handle2">Stats</label>
                                </h2>
                                <div className="content">
                                    {stats}
                                </div>
                            </Accordion>
                        </RowPoke>
                        <RowPoke>
                            <Accordion>
                                <input type="checkbox" id="handle1" />
                                <h2 className="handle">
                                    <label htmlFor="handle1">Movement</label>
                                </h2>
                                <div className="content">
                                    {moves}
                                </div>
                            </Accordion>
                        </RowPoke>
                    </RowInfo>
                </Container>
            </>
        )
    }
}

export default Details;
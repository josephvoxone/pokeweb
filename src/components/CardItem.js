import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled'
import LogoPokeball from '../assets/pokeball.svg';

const Card = styled.div`
    width: 300px;
    background: linear-gradient(45deg, #fad61e, #ffc107);
    box-shadow: 0px 16px 12px -12px rgb(80 80 80 / 42%);
    border-radius: 12.7781px;
    margin: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: 0.5s;

    &:hover {
        margin-top: -10px;
        filter: invert(1);
        transition: 0.5s ;
    }
`;

const ImageCard = styled.img`
    width: 96px;
    height: 96px;
`;

const TitleCard = styled.div`
    border-radius: 5px;
    padding: 40px 0;
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
    color: #040404;
    position: relative;
`;

const SubtitleCard = styled.p`
    font-size: 13px;
    margin: 0;
    text-align: left;
    color: #424242;
`;

const Qty = styled.div`
    font-size: 13px;
    margin: 0;
    width: 100px;
    background: #ee8329;
    color: #fff;
    padding: 4px 3px;
    border-radius: 0 0 10px 10px;
    font-weight: 500;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 20px;
    display: inline-flex;
    justify-content: center;
`;

const IconPokeball = styled.div`
   
`;


const CardItem = (props) => {
    const history = useHistory()

    const Handler = () => {
        history.push(`/details/${props.name}`)
    }

    // const SvgImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'

    return (
        <Card onClick={Handler}>
            {/* <ImageCard src={SvgImage + props.id + '.svg'} alt='pokemon' /> */}
            <TitleCard>
                <SubtitleCard>Pokémon</SubtitleCard>
                {props.name}
                {(props.qty > 0 ? <Qty><IconPokeball><img width="18" height='18' src={LogoPokeball} alt='pokeball'/></IconPokeball> &nbsp; {props.qty} Pokeball</Qty> : '')}
            </TitleCard>
            <ImageCard src={props.image} alt='pokemon' />
        </Card>
    )
}

export default CardItem
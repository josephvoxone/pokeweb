import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
    width: 300px;
    background: linear-gradient(45deg, #2c72b9, #03a9f4);
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
        transition: 0.5s;

        div.del {
            visibility: visible;
            opacity: 1;
        }
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
    color: #fff;
    position: relative;
`;

const SubtitleCard = styled.p`
    font-size: 13px;
    margin: 0;
    text-align: left;
    color: #d4d4d4;
`;

const Nick = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    margin: 0;
    width: 100px;
    background: #f1bf00;
    color: #000;
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

const Delete = styled.div`
    font-size: 11px;
    margin: 0;
    width: 130px;
    background: #f44336;
    color: #fff;
    padding: 0;
    border-radius: 10px 10px 0 0;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    left: 0;
    text-transform: lowercase;
    line-height: 20px;
    display: inline-flex;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;

    @media (max-width: 680px) {
        visibility: visible;
        opacity: 1;
    }
`;

const CardOwned = (props) => {

    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

    return (
        <Card onClick={() => props.onClick(props.nickname)}>
            <TitleCard>
                <SubtitleCard>Pokémon</SubtitleCard>
                {props.pokemon}
                <Nick>{props.nickname}</Nick>
                <Delete className="del">click to remove</Delete>
            </TitleCard>
            <ImageCard src={image} alt='pokemon' />
        </Card>
    )
}

export default CardOwned
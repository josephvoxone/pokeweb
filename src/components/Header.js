import React from 'react';
import { NavLink } from "react-router-dom";
import LogoPokemon from '../assets/logo.svg';
import styled from '@emotion/styled'

const Header = () => {

    const HeaderComp = styled.div`
        max-width: 1000px;
        display: flex;
        margin: 0 auto;
        padding: 20px 36px;
        position: sticky;
        top: 0;
        height: 50px;
        margin-bottom: 45px;
        background: #2c72b9;
        border-radius: 0 0 10px 10px;
        z-index: 9999;
        box-shadow: 0px 16px 9px 0px rgb(53 53 53 / 42%);
        border-bottom: 5px solid #dcb007;

        @media (max-width: 680px) {
            height:unset;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            display: grid;
            padding: 10px;

            img{
                max-width: 150px !important;
                width: 150px !important;
            }
        }

        img{
            max-width: 260px;
            width: 260px;
        }
    `;
    const ListMenu = styled.div`
        display: flex;
        align-content: end;
        align-items: center;
        justify-content: flex-end;
        width: 100%;

        @media (max-width: 680px) {
            justify-content: center;
        }    
    `;

    const Menu = styled.div`
        padding: 7px 17px;
        margin-right: 30px;
        font-weight: 700;

        @media (max-width: 680px) {
            margin-right: unset;
            font-size: 13px;
        }

        a:hover{
            color: #fdc80f;
            border-bottom: 1px dashed #fdc80f;
            transition: 0.5s
        }

        a{
            text-decoration: auto;
            color: #fff;
            padding-bottom: 10px;
        }

        a.active{
            text-decoration: auto;
            color: #fdc80f;
            border-bottom: 1px dashed #fdc80f;
        }
    `;

    return (
        <HeaderComp>
            <a href="/">
                <img src={LogoPokemon} width='260' height='95' alt="logo"></img>
            </a>
            <ListMenu>
                <Menu>
                    <NavLink exact to="/">
                        Pokemon List
                    </NavLink>
                </Menu>
                <Menu>
                    <NavLink exact to="/mylist">
                        My Pokemon
                    </NavLink>
                </Menu>
            </ListMenu>
        </HeaderComp>
    )
}

export default Header;
import React from 'react';
import Logoku from '../assets/joseph.svg';
import styled from '@emotion/styled'

const Footer = () => {

    const FooterComp = styled.div`
        max-width: 1000px;
        align-content: center;
        justify-content: center;
        display: grid;
        margin: 0 auto;
        margin-top: 40px;
        padding: 20px 36px;
        height: 50px;
        background: #2c72b9;
        border-radius: 10px 10px 0 0;
        border-top: 5px solid #ffcb05;

        img{
            max-width: 200px;
            width: 200px;
            margin: 0 auto;
            margin-top: -50px;
        }
    `;

    const Credit = styled.p`
        color: white;
        font-weight: 500;
        font-size: 13px;
    `;

    return (
        <FooterComp>
            <img src={Logoku} width='200' height='79' alt="logoku"></img>
            <Credit>Create with Love and Passion - Project Assignment Tokopedia</Credit>
        </FooterComp>
    )
}

export default Footer;
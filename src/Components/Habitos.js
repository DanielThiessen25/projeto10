import styled from 'styled-components';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

export default function Habitos() {
    return (
        <Screen>
            <Topo>
                <Logo>TrackIt</Logo>
                <Foto></Foto>
            </Topo>

            <Content>
                <Faixa>
                <Titulo>Meus hábitos</Titulo>
                <Add><ion-icon name="add-outline"></ion-icon></Add>
                </Faixa>

                <Texto>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Texto>
                
            </Content>

            <Rodape>
                <Link to={"/habitos"}><p>Hábitos</p></Link>
                <p>Histórico</p>
            </Rodape>
            <Circulo>Hoje</Circulo>
        </Screen>


    );
}


const Screen = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #EBEBEB;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
`;

const Topo = styled.div`
    width: 100%;
    height: 70px;
    background: #126BA5;
    position: fixed;
    top: 0;
    z-index: 5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;

const Logo = styled.div`
font-family: 'Playball', cursive;
margin-left: 18px;
font-style: normal;
font-weight: normal;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
`;

const Foto = styled.div`
width: 51px;
height: 51px;
margin-right: 18px;
background: cornflowerblue;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

`;

const Faixa = styled.div`
width: 90%;
margin-bottom: 28px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const Titulo = styled.div`
font-style: normal;
font-weight: normal;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`;

const Add = styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.6px;
display: flex;
align-items: center;
justify-content: center;

ion-icon{
    font-size: 30px;
    font-weight: bolder;
    color: white;
}

`;

const Rodape = styled.div`
width: 100%;
height: 70px;
background: #FFFFFF;
position: fixed;
bottom: 0;
z-index: 5;
padding-right: 35px;
padding-left:35px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
box-sizing: border-box;

 p{
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
 }
`;

const Circulo = styled.div`
width: 91px;
height: 91px;
position: fixed;
bottom: 10px;
background: #52B6FF;
border-radius: 45px;
z-index: 10;
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: normal;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #FFFFFF;  
`;

const Texto = styled.div`
    width: 90%;
    font-style: normal;
font-weight: normal;
font-size: 17.976px;
line-height: 22px;

color: #666666;

`;
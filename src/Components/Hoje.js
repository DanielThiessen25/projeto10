import styled from 'styled-components';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

export default function Hoje() {
    const { user, setUser } = useContext(UserContext);


    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + user.token
            }
        }
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        requisicao.then(resposta => {
            console.log(resposta.data);
        });
    }, []);

    return (
        <Screen>
            <Topo>
                <Logo>TrackIt</Logo>
                <Foto></Foto>
            </Topo>
            <Content>
                <Textos>
                    <Titulo>Segunda, 17/05</Titulo>
                    <Concluido>Nenhum hábito concluído ainda</Concluido>
                </Textos>


                <Habito>
                    <Container>
                        <Nome>{}</Nome>
                        <Info>Sequência atual: <p>4 dias</p></Info>
                        <Info>Seu recorde: <p>5 dias</p></Info>
                    </Container>
                    <Icone><ion-icon name="checkmark-sharp"></ion-icon></Icone>
                </Habito>
                <Habito>
                    <Container>
                        <Nome>Ler 1 Capítulo de Livro</Nome>
                        <Info>Sequência atual: <p>4 dias</p></Info>
                        <Info>Seu recorde: <p>5 dias</p></Info>
                    </Container>
                    <Icone><ion-icon name="checkmark-sharp"></ion-icon></Icone>
                </Habito>
                <Habito>
                    <Container>
                        <Nome>Ler 1 Capítulo de Livro</Nome>
                        <Info>Sequência atual: <p>4 dias</p></Info>
                        <Info>Seu recorde: <p>5 dias</p></Info>
                    </Container>
                    <Icone><ion-icon name="checkmark-sharp"></ion-icon></Icone>
                </Habito>


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

const Textos = styled.div`
width: 90%;
`;

const Titulo = styled.div`
font-style: normal;
font-weight: normal;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`;

const Concluido = styled.div`
margin-bottom: 28px;
font-style: normal;
font-weight: normal;
font-size: 17.976px;
line-height: 22px;
color: #BABABA
`;


const Habito = styled.div`
padding:15px;
width: 90%;
height: 94px;
margin-bottom: 10px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
`;

const Container = styled.div`
display: flex;
flex-direction: column;

`;

const Nome = styled.div`
font-style: normal;
font-weight: normal;
font-size: 19.976px;
line-height: 25px;
color: #666666;
margin-bottom: 10px;
`;

const Info = styled.div`
font-style: normal;
font-weight: normal;
font-size: 12.976px;
line-height: 16px;
color: #666666;
display: flex;
flex-direction: row;

    p{
        color: #8FC549;
    }
`;

const Icone = styled.div`
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
box-sizing: border-box;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;

ion-icon{
    font-size:40px;
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
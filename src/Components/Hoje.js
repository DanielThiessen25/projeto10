import styled from 'styled-components';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import AtividadeDia from "./AtividadeDia";

export default function Hoje() {
    const { user, setUser } = useContext(UserContext);
    const [listaDia, setListaDia] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + user.token
            }
        }
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        requisicao.then(resposta => {
            setListaDia(resposta.data);
        });
    }, []);


 

    return (
        <Screen>
            <Topo>
                <Logo>TrackIt</Logo>
                <Foto><img src={user.image} /></Foto>
            </Topo>
            <Content>
                <Textos>
                    <Titulo>Segunda, 17/05</Titulo>
                    <Concluido>Nenhum hábito concluído ainda</Concluido>
                </Textos>

                {listaDia.map(item => 
                    <AtividadeDia item={item}></AtividadeDia>      
                    )}

            </Content>

            <Rodape>
            <Link to={"/habitos"} className="link"><p>Hábitos</p></Link>
            <Link to={"/hoje"} className="link"><Circulo>Hoje</Circulo></Link>
            <Link to={"/historico"} className="link"><p>Histórico</p></Link>
        </Rodape>
            
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

img{
    width: 100%;
    height: 100%;
    border-radius: 25px;
}


`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom:80px;
    top: 100px;
    overflow: hidden;
    overflow-y: scroll;


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
margin-bottom: 40px;
left: auto;
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

const Feito = styled.div`
background: #8FC549;
`;

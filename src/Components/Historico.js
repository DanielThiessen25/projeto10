import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import React, { useContext } from 'react';

export default function Historico(){
    const { user, setUser } = useContext(UserContext);
    return(

        <Screen>
        <Topo>
            <Logo>TrackIt</Logo>
            <Foto><img src={user.image} /></Foto>
        </Topo>

        <Content>
            <Faixa>
                <Titulo>Histórico</Titulo>
            </Faixa>
            <Texto >
                Em breve você poderá ver o histórico dos seus hábitos aqui!s
           </Texto>
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


 
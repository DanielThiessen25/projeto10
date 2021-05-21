import React from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';


export default function App() {


    return (
        <screen>
            <logo></logo>
            <content>
                <input type="email" placeholder="e-mail"></input>
                <input type="password" placeholder="senha"></input>
                <button type="submit">Entrar</button>
            </content>
        </screen>
    );
}


const screen = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
`;

const logo = styled.div`
    width: 180px;
    height: 180px;
    background: blueviolet;
    margin-top: 68px;
`;

const content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;

    input{
    width: 300px;
    height: 45px;
    margin-bottom: 6px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    }

    button{
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    }

`;
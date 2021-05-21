import styled from 'styled-components';
import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';


export default function Cadastro() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [test, setTest] = useState(false);

    function doSignUp(event) {
        event.preventDefault();
       

        const body = {
            email: email,
            name: name,
            image: image,
            password: password
        }

        console.log(body);

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        alert("Entrou!");
        requisicao.then(loadUser);
    }

    function loadUser(object) {
        console.log(object.data);
        setName("");
        setEmail("");
        setPassword("");
        setImage("");
        setTest(true);
        
    }

    function render(){
        if(test == true){
            return (<Redirect to={"/"} />);
        }
    }

    return (
        <Screen>
            <Logo></Logo>
            <Content>
                <form onSubmit={doSignUp}>
                    <input type="email" placeholder="e-mail" value={email} required onChange={e => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="senha" value={password} required onChange={e => setPassword(e.target.value)}></input>
                    <input type="text" placeholder="nome" value={name} required onChange={e => setName(e.target.value)}></input>
                    <input type="url" placeholder="foto" value={image} required onChange={e => setImage(e.target.value)}></input>
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to={"/"}><Login>Já tem uma conta? Faça login!</Login></Link>
                {render()}
            </Content>
        </Screen>

    );
}

const Screen = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
`;

const Logo = styled.div`
    width: 180px;
    height: 180px;
    background: blueviolet;
    margin-top: 68px;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
    padding: 10px;
    width: 300px;
    height: 45px;
    margin-bottom: 6px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;
    }

    button{
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-style: normal;
    font-weight: normal;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF; 
    border:none;
    }

`;

const Login = styled.div`
margin-top: 25px;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
`;
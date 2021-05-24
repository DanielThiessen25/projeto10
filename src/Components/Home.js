import styled from 'styled-components';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { Link, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Home() {
    const { user, setUser } = useContext(UserContext);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [test, setTest] = useState(false);
    const [disable, setDisable] = useState(false);


    function doLogin(event) {
        event.preventDefault();
        setDisable(true);

        const body = {
            email: email,
            password: password
        }

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        requisicao.then(loadUser);
        requisicao.catch(tratarErro);
    }
    function tratarErro(erro) {
        alert("Dados Incorretos!");
        setDisable(false);
        setTest(false);
        setEmail("");
        setPassword("");
    }

    function loadUser(object) {
        console.log(object.data);
        setUser(object.data);
        setTest(true);
    }

    function render() {
        if (test == true) {
            return (<Redirect to={"/hoje"} />);
        }
    }

    function carregar() {
        if (disable === false) {
            return (
                "Entrar"
            );
        }
        else {
            return (
                <Loader
                    type="ThreeDots"
                    color="#FFFFFF"
                    height={100}
                    width={45}
                    timeout={3000}
                />

            );

        }
    }


    return (
        <Screen>
            <Logo>
                <img src={"logo.PNG"} />
            TrackIt
            </Logo>
            <Content>
                <form onSubmit={doLogin}>
                    <input type="email" placeholder="e-mail" disabled={disable} value={email} required onChange={e => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="senha" disabled={disable} value={password} required onChange={e => setPassword(e.target.value)}></input>
                    <button type="submit">{carregar()}</button>

                </form>
                <Link to={"/cadastro"}><Cadastro>Não tem uma conta? Cadastre-se!</Cadastro></Link>
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
    margin-top: 68px;
    font-family: 'Playball', cursive;
font-style: normal;
font-weight: normal;
font-size: 68.982px;
line-height: 86px;
color: #126BA5;

    img{
        width: 100%;
        height: auto;
    }
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    }

`;

const Cadastro = styled.div`
margin-top: 25px;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
`;
import styled from 'styled-components';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import Dia from "./Dia";
import Item from "./Item";

export default function Habitos() {
    const { user, setUser } = useContext(UserContext);
    const [nome, setNome] = useState("");
    const [verificador, setVerificador] = useState(false);
    const [dias, setDias] = useState([]);
    const [lista, setLista] = useState();
   const [recarregar, setRecarregar] = useState(0);

    function adicionarHabito(event) {
        event.preventDefault();
        const body = {
            name: nome,
            days: dias
        }

        const config = {
            headers: {
                Authorization: "Bearer " + user.token
            }
        }

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
        requisicao.then(resposta => console.log(resposta.data));

        setDias([]);
        setVerificador(false);
        setNome("");
        setRecarregar(recarregar + 1);
    }


    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + user.token
            }
        }
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        requisicao.then(resposta => setLista(resposta.data));
    }, [recarregar]);

    function listarHabitos() {
        if (lista == null) {
            return ("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!");
        }
        else {
            return (
                lista.map(item =>
                        <Item item={item} deletar={deletarHabito} />
                    )
            );
        }
    }

    function deletarHabito(id){
        alert("DELETAR?");
        const config = {
            headers: {
                Authorization: "Bearer " + user.token
            }
        }

        const requisicao = axios.delete("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"+id, config);
        requisicao.then(resposta => console.log(resposta.data));
        setRecarregar(recarregar + 1);
    }

    function adicionar() {
        if (verificador == true) {
            return (
                <Inserir>
                    <form onSubmit={adicionarHabito}>
                        <input type="text" placeholder="Nome do hábito" value={nome} required onChange={e => setNome(e.target.value)}></input>
                        <FaixaButton>
                            <Dia numero={0} funcaoRemover={removerDia} funcaoAdd={addDia} />
                            <Dia numero={1} funcaoRemover={removerDia} funcaoAdd={addDia} />
                            <Dia numero={2} funcaoRemover={removerDia} funcaoAdd={addDia} />
                            <Dia numero={3} funcaoRemover={removerDia} funcaoAdd={addDia} />
                            <Dia numero={4} funcaoRemover={removerDia} funcaoAdd={addDia} />
                            <Dia numero={5} funcaoRemover={removerDia} funcaoAdd={addDia} />
                            <Dia numero={6} funcaoRemover={removerDia} funcaoAdd={addDia} />
                        </FaixaButton>
                        <FaixaOpcoes>
                            <button type="submit">Salvar</button>
                            <div onClick={() => setVerificador(false)}><p>Cancelar</p></div>
                        </FaixaOpcoes>
                    </form>
                </Inserir>
            );
        }
        else { }
    }

    function removerDia(indice) {
        let retirar = 0;
        let atualizador = [...dias];
        for (let i = 0; i < atualizador.length; i++) {
            if (atualizador[i] === indice) {
                retirar = i;
            }
        }
        atualizador.splice(retirar, 1);
        setDias(atualizador);
        
    }

    function addDia(indice) {
        setDias([...dias, indice]);
    }



    return (
        <Screen>
            <Topo>
                <Logo>TrackIt</Logo>
                <Foto><img src={user.image} /></Foto>
            </Topo>

            <Content>
                <Faixa>
                    <Titulo>Meus hábitos</Titulo>
                    <Add onClick={() => setVerificador(true)}><ion-icon name="add-outline"></ion-icon></Add>
                </Faixa>
                {adicionar()}
                <Texto >
                    {listarHabitos()}

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

const Inserir = styled.div`
width:90%;
height: 180px;
margin-bottom: 30px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;

form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

input{
    padding: 10px;
    width: 300px;
    height: 45px;
    margin-top: 18px ;
    margin-bottom: 10px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;
    }
`;

const FaixaButton = styled.div`
width: 100%;
margin-bottom: 30px;
display: flex;
flex-direction: row;

`;

const FaixaOpcoes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 15.976px;
        line-height: 20px;
        color: #52B6FF;
        margin-right: 23px;
    }

    button{
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.6px;
font-size: 15.976px;
line-height: 20px;
color: #FFFFFF;
    }
`;


 
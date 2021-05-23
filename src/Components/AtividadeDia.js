import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React, { useContext } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';

export default function AtividadeDia(props) {
    const { user, setUser } = useContext(UserContext);
    let item = props.item;
    const [selecionado, setSelecionado] = useState(item.done);

    function check() {
        if (selecionado === true) {
            return (
                <IconeSIM><ion-icon name="checkmark-sharp"></ion-icon></IconeSIM>
            );
        }
        else {
            return (<IconeNAO><ion-icon name="checkmark-sharp"></ion-icon></IconeNAO>);
        }
    }

    function selecionar() {
        const config = {
            headers: {
                Authorization: "Bearer " + user.token
            }
        }

        if (selecionado === false) {
            const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + item.id + "/check", {}, config);
            requisicao.then(status => console.log(status.data));
            setSelecionado(true);

        }
        else {
            const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + item.id + "/uncheck", {}, config);
            requisicao.then(status => console.log(status.data));
            setSelecionado(false);
        }
    }

    return (
        <Habito onClick={selecionar}>
            <Container>
                <Nome>{item.name}</Nome>
                <Info>Sequência atual:  <p> {item.currentSequence}</p></Info>
                <Info>Seu recorde:  <p> {item.highestSequence}</p></Info>
            </Container>
            {check(item)}
        </Habito>

    );

}


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

const IconeNAO = styled.div`
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
box-sizing: border-box;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
color: white;

ion-icon{
    font-size:40px;
}

`;

const IconeSIM = styled.div`
width: 69px;
height: 69px;
background: #8FC549;
border: 1px solid #E7E7E7;
box-sizing: border-box;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
color: white;

ion-icon{
    font-size:40px;
}

`;
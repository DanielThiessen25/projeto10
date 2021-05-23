import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React, { useContext } from 'react';

export default function Item(props){
    let semana = ["D", "S", "T", "Q", "Q", "S", "S"];

    function listarSemana(dia){
        let diaPresente = false;
        for(let i=0; i<props.item.days.length; i++){
            if(props.item.days[i] == dia){
                    diaPresente = true;
            }
        }
        if(diaPresente === true){
            return(<DiaSelecionado>{semana[dia]}</DiaSelecionado>);
        }
        else{
            return(<DiaVazio>{semana[dia]}</DiaVazio>);
        }
    }



    return(
        <Habito>
            <ion-icon name="trash-outline" onClick={()=>props.deletar(props.item.id)}></ion-icon>
            <Titulo>{props.item.name}</Titulo>
            <Semana>
                {listarSemana(0)}
                {listarSemana(1)}
                {listarSemana(2)}
                {listarSemana(3)}
                {listarSemana(4)}
                {listarSemana(5)}
                {listarSemana(6)}
            </Semana>
        </Habito>
    );
}

const Habito = styled.div`
    width: 100%;
    height: 91px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
margin-bottom: 10px;
padding-left:15px;
box-sizing: border-box;


    ion-icon{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 22px;
}

`;

const Titulo = styled.div`
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 25px;
color: #666666;
margin-bottom: 8px;
`;

const Semana = styled.div`
display: flex;
flex-direction: row;

`;

const DiaVazio = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DiaSelecionado = styled.div`
width: 30px;
    height: 30px;
    margin-right: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: #FFFFFF;
    background: #CFCFCF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Lixo = styled.div`
width: 22px;
height: 26px;
    background: aquamarine;
    position: absolute;
    right: 10px;
    top: 10px;
    ion-icon{
    
    font-size: 22px;
}
`;
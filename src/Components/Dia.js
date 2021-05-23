import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React, { useContext } from 'react';


export default function Dia (props) {
    const [marcado, setMarcado] = useState(false);
    let semana = ["D", "S", "T", "Q", "Q", "S", "S"];

    function removerDia(){
        setMarcado(false);
        props.funcaoRemover(props.numero);
    }

    function adicionarDia(){
        setMarcado(true);
        props.funcaoAdd(props.numero);
    }

    function atualiza() {
        if (marcado === true) {
            return (
                <DiaSelecionado onClick={removerDia}>{semana[props.numero]}</DiaSelecionado>
            );
        }
        else {
            return(
                <DiaVazio onClick={adicionarDia}>{semana[props.numero]}</DiaVazio>
            );
            
        }
    }

    return (
        <>
        {atualiza()}
        </>
    );

}

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
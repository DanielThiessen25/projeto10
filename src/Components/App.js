import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from '../contexts/UserContext';
import AtividadeContext from '../contexts/AtividadeContext';
import Home from "./Home";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje";
import Habitos from "./Habitos";
import Historico from "./Historico";


export default function App() {
    const [user, setUser] = useState();
    const [atividades, setAtividades] = useState();

    return (
        <BrowserRouter>
            <Switch>
                <UserContext.Provider value={{ user, setUser }}>
                <UserContext.Provider value={{ atividades, setAtividades}}>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/cadastro" exact={true} component={Cadastro} />
                    <Route path="/hoje" exact={true} component={Hoje} />
                    <Route path="/habitos" exact={true} component={Habitos} />
                    <Route path="/historico" exact={true} component={Historico} />
                    </UserContext.Provider>
                </UserContext.Provider>
            </Switch>
        </BrowserRouter>
    );
}



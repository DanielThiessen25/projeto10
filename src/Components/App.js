import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from '../contexts/UserContext';
import Home from "./Home";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje";
import Habitos from "./Habitos";


export default function App() {
    const [user, setUser] = useState();

    return (
        <BrowserRouter>
            <Switch>
                <UserContext.Provider value={{ user, setUser }}>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/cadastro" exact={true} component={Cadastro} />
                    <Route path="/hoje" exact={true} component={Hoje} />
                    <Route path="/habitos" exact={true} component={Habitos} />
                </UserContext.Provider>
            </Switch>
        </BrowserRouter>
    );
}



import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from '../contexts/UserContext';
import Home from "./Home";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje";


export default function App() {
    const [user, setUser] = useState();

    return (
        <BrowserRouter>
            <Switch>
                <UserContext.Provider value={{ user, setUser }}>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/cadastro" exact={true} component={Cadastro} />
                    <Route path="/hoje" exact={true} component={Hoje} />
                </UserContext.Provider>
            </Switch>
        </BrowserRouter>
    );
}



import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "./Home";
import Posts from "./Posts";
import User from "./Users"

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/users'>
                    <User/>
                </Route>
                <Route exact path='/posts'>
                    <Posts/>
                </Route>
            </Switch>
        </main>
    )
}
export default Main

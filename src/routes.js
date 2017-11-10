import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';

export default class Routes extends React.Component
{
    render()
    {
        return (
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                </Switch>
            </div>
        );
    }
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../dashboard/Dashboard';
import Form from '../../forms/Form';
import './CommonComponent.css';

const CommonComponent = () => {

    return (
        <>
            <div className="common-component">
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/form' component={Form} />
                </Switch>
            </div>
        </>
    );
}

export default CommonComponent;
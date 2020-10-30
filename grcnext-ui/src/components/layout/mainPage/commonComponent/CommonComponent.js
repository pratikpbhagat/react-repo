import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../../content/dashboard/Dashboard';
import Todo from '../../../content/todo/Todo';
import './CommonComponent.css';

const CommonComponent = (props) => {
    return (
        <div className="common-component">
            <Switch>
                <Route path="/todo">
                    <Todo />
                </Route>
                <Route path="/" component={Dashboard} />
            </Switch>
        </div>
    );
}

export default CommonComponent;
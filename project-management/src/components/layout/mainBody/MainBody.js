import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../mainContent/dashboard/Dashboard';
import History from '../../mainContent/history/History';
import Expenses from '../../mainContent/expenses/Expenses';
import styles from './MainBody.module.css';
import Accounts from '../../mainContent/accounts/Accounts';
import Reports from '../../mainContent/reports/Reports';
import Leaves from '../../mainContent/leaves/Leaves';

const MainBody = () => {

    return (
        <div className={styles.MainBody}>
            <Switch>
                <Route path="/leaves" component={Leaves} />
                <Route path="/reports">
                    <Reports />
                </Route>
                <Route path="/accounts" exact component={Accounts} />
                <Route path="/expenses" component={Expenses} />
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/" exact component={Dashboard} />
            </Switch>
        </div>
    );
}

export default MainBody;
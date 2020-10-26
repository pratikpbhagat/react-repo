import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../mainContent/dashboard/Dashboard';
import History from '../../mainContent/history/History';
import Expenses from '../../mainContent/expenses/Expenses';
import styles from './MainBody.module.css';
import Accounts from '../../mainContent/accounts/Accounts';
import Reports from '../../mainContent/reports/Reports';
import Leaves from '../../mainContent/leaves/Leaves';
import Notifications from '../../mainContent/notifications/Notifications';
import Settings from '../../mainContent/settings/Settings';
import Profile from '../../mainContent/profile/Profile';

const MainBody = () => {

    return (
        <div className={styles.MainBody}>
            <Switch>
                <Route path="/settings" component={Settings} />
                <Route path="/my-account" component={Profile} />
                <Route path="/notifications" component={Notifications} />
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
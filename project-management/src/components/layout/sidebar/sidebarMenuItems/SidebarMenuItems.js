import React from 'react';
import styles from './SidebarMenuItems.module.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { Link } from 'react-router-dom';

const SidebarMenuItems = () => {

    return (
        <ul className={styles.SidebarMenuItems}>
            <li>
                <Link to="/">
                    <span><DashboardIcon /></span>
                    <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/history">
                    <span><HistoryIcon /></span>
                    <span>History</span>
                </Link>
            </li>
            <li>
                <Link to="/expenses">
                    <span><ReceiptIcon /></span>
                    <span>Expenses</span>
                </Link>
            </li>
            <li>
                <Link to="/accounts">
                    <span><AccountTreeIcon /></span>
                    <span>Accounts</span>
                </Link>
            </li>
            <li>
                <Link to="/reports">
                    <span><AssessmentIcon /></span>
                    <span>Reports</span>
                </Link>
            </li>
            <li>
                <Link to="/leaves">
                    <span><TimeToLeaveIcon /></span>
                    <span>Leaves</span>
                </Link>
            </li>
        </ul>
    );
}

export default SidebarMenuItems;
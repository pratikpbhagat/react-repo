import React from "react";
import CustomComponent from "../components/core/custom/CustomComponent.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";

export interface PageConfig {
    route: string;
    label: string;
    pageId: string;
    pageTitle: string;
    icon: string;
    iconActive: string;
    component: React.ComponentType;
    rolesAllowed?: string[];
    dynamicComponents?: React.ComponentType[];
    onlySidebar: boolean;
}

export const pagesConfig: PageConfig[] = [
    {
        route: '/dashboard',
        label: 'Dashboard',
        pageId: 'DASHBOARD',
        pageTitle: 'Dashboard',
        icon: '/assets/icons/sidebar/sb-dashboard.svg',
        iconActive: '/assets/icons/sidebar/active/sb-dashboard.svg',
        component: Dashboard,
        onlySidebar: true
    },
    {
        label: 'My Bookings',
        route: '/bookings',
        icon: '/assets/icons/sidebar/sb-my-bookings.svg',
        iconActive: '/assets/icons/sidebar/active/sb-my-bookings.svg',
        pageId: 'MY_BOOKINGS',
        pageTitle: 'My Bookings',
        component: CustomComponent,
        onlySidebar: true
    },
    {
        label: 'My Schedule',
        route: '/schedule',
        icon: '/assets/icons/sidebar/sb-my-schedule.svg',
        iconActive: '/assets/icons/sidebar/active/sb-my-schedule.svg',
        pageId: 'MY_SCHEDULE',
        pageTitle: 'My Schedule',
        component: CustomComponent,
        onlySidebar: true
    },
    {
        label: 'My Performance',
        route: '/performance',
        icon: '/assets/icons/sidebar/sb-my-performance.svg',
        iconActive: '/assets/icons/sidebar/active/sb-my-performance.svg',
        pageId: 'PERFORMANCE',
        pageTitle: 'My Performance',
        component: CustomComponent,
        onlySidebar: true
    },
    {
        route: '/feedback',
        label: 'Feedback',
        pageId: 'FEEDBACK',
        pageTitle: 'Feedback',
        icon: '/assets/icons/sidebar/sb-feedback.svg',
        iconActive: '/assets/icons/sidebar/active/sb-feedback.svg',
        component: CustomComponent,
        onlySidebar: true
    },
    {
        label: 'Payments',
        route: '/payments',
        icon: '/assets/icons/sidebar/sb-payments.svg',
        iconActive: '/assets/icons/sidebar/active/sb-payments.svg',
        pageId: 'PAYMENTS',
        pageTitle: 'Payments',
        component: CustomComponent,
        onlySidebar: true
    },
    {
        label: 'Settings',
        route: '/settings',
        icon: '/assets/icons/sidebar/sb-settings.svg',
        iconActive: '/assets/icons/sidebar/active/sb-settings.svg',
        pageId: 'SETTINGS',
        pageTitle: 'Settings',
        component: CustomComponent,
        onlySidebar: true
    },
    {
        label: 'Help',
        route: '/help',
        icon: '/assets/icons/sidebar/help_outline.svg',
        iconActive: '/assets/icons/sidebar/active/help_outline.svg',
        pageId: 'HELP',
        pageTitle: 'Help',
        component: CustomComponent,
        onlySidebar: true
    }
];
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
}

export const pagesConfig: PageConfig[] = [
    {
        route: '/dashboard',
        label: 'Dashboard',
        pageId: 'DASHBOARD',
        pageTitle: 'Dashboard',
        icon: '/assets/icons/sidebar/dashboard.svg',
        iconActive: '/assets/icons/sidebar/active/dashboard.svg',
        component: Dashboard,
    },
    {
        label: 'Regulatory Monitor',
        route: '/regulatory-monitor',
        icon: '/assets/icons/sidebar/manage_search.svg',
        iconActive: '/assets/icons/sidebar/active/manage_search.svg',
        pageId: 'REGULATORY_MONITOR',
        pageTitle: 'Regulatory Monitor',
        component: CustomComponent
    },
    {
        label: 'Workflow Manager',
        route: '/workflow-manager',
        icon: '/assets/icons/sidebar/schema.svg',
        iconActive: '/assets/icons/sidebar/active/schema.svg',
        pageId: 'WORKFLOW_MANAGER',
        pageTitle: 'Workflow Manager',
        component: CustomComponent
    },
    {
        label: 'Documents Hub',
        route: '/documents-hub',
        icon: '/assets/icons/sidebar/library_books.svg',
        iconActive: '/assets/icons/sidebar/active/library_books.svg',
        pageId: 'DOCUMENTS_HUB',
        pageTitle: 'Documents Hub',
        component: CustomComponent
    },
    {
        route: '/admin-panel',
        label: 'Admin Panel',
        pageId: 'ADMIN_PANEL',
        pageTitle: 'Admin Panel',
        icon: '/assets/icons/sidebar/lock_person.svg',
        iconActive: '/assets/icons/sidebar/active/lock_person.svg',
        component: CustomComponent,
    },
    {
        label: 'Reports & Analytics',
        route: '/reports-analytics',
        icon: '/assets/icons/sidebar/query_stats.svg',
        iconActive: '/assets/icons/sidebar/active/query_stats.svg',
        pageId: 'REPORTS_ANALYTICS',
        pageTitle: 'Reports & Analytics',
        component: CustomComponent
    },
    {
        label: 'Audit Trail',
        route: '/audit-trail',
        icon: '/assets/icons/sidebar/content_paste_search.svg',
        iconActive: '/assets/icons/sidebar/active/content_paste_search.svg',
        pageId: 'AUDIT_TRAIL',
        pageTitle: 'Audit Trail',
        component: CustomComponent
    },
    {
        label: 'Help',
        route: '/help',
        icon: '/assets/icons/sidebar/help_outline.svg',
        iconActive: '/assets/icons/sidebar/active/help_outline.svg',
        pageId: 'HELP',
        pageTitle: 'Help',
        component: CustomComponent
    }
];
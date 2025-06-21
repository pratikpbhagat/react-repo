import type {WidgetCardProps} from "../components/core/widgets/WidgetCard/WidgetCard.tsx";

export const widgetConfig: WidgetCardProps[] = [
    {
        id: "closed-assessments-widget",
        widgetIcon: "/assets/icons/sticky_note_2.svg",
        widgetIconAltText: "Open Assessments Icon",
        widgetTitle: "Open Assessments",
        width: "300px",
        height: "200px",
        widgetActions: [
            {
                actionIcon: "/assets/icons/zoom_out_map.svg",
                actionIconAltText: "Expand",
                actionTitle: "Expand Widget",
            },
            {
                actionIcon: "/assets/icons/more_vert.svg",
                actionIconAltText: "Menu",
                actionTitle: "More Options",
            },
        ]
    },
    {
        id: "pending-reviews-widget",
        widgetIcon: "/assets/icons/globe_icon.svg",
        widgetIconAltText: "Pending Reviews Icon",
        widgetTitle: "Pending Reviews",
        widgetActions: [
            {
                actionIcon: "/assets/icons/more_vert.svg",
                actionIconAltText: "Menu",
                actionTitle: "More Options",
            },
        ]
    },
    {
        id: "completed-tasks-widget",
        widgetIcon: "/assets/icons/location_icon.svg",
        widgetIconAltText: "Completed Tasks Icon",
        widgetTitle: "Completed Tasks",
        widgetActions: [],
    },
    {
        id: "open-assessments-widget",
        widgetIcon: "/assets/icons/person_search.svg",
        widgetIconAltText: "Open Assessments Icon",
        widgetTitle: "Open Assessments",
        widgetActions: [
            {
                actionIcon: "/assets/icons/file_download.svg",
                actionIconAltText: "Expand",
                actionTitle: "Expand Widget",
            },
            {
                actionIcon: "/assets/icons/zoom_out_map.svg",
                actionIconAltText: "Expand",
                actionTitle: "Expand Widget",
            },
            {
                actionIcon: "/assets/icons/more_vert.svg",
                actionIconAltText: "Menu",
                actionTitle: "More Options",
            },
        ]
    },
    {
        id: "reviews-due-widget",
        widgetIcon: "/assets/icons/timer.svg",
        widgetIconAltText: "Reviews Due Icon",
        widgetTitle: "Review Due",
        widgetActions: [
            {
                actionIcon: "/assets/icons/more_vert.svg",
                actionIconAltText: "Menu",
                actionTitle: "More Options",
            },
        ]
    },
];

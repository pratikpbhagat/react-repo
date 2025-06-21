import React from "react";
import "./WidgetCard.scss";

export interface WidgetActionProps {
    actionIcon?: string;
    actionIconAltText?: string;
    actionTitle?: string;
}

export interface WidgetCardProps {
    id: string;
    widgetIcon?: string;
    widgetIconAltText?: string;
    widgetTitle?: string;
    widgetActions?: WidgetActionProps[];
    width?: string;
    height?: string;
}

const WidgetCard: React.FC<WidgetCardProps> = ({
                                                   widgetIcon = "/assets/icons/sticky_note_2.svg",
                                                   widgetIconAltText = "Info",
                                                   widgetTitle = "Untitled Widget",
                                                   widgetActions = [],
                                                   width = "200px",
                                                   height = "190px",
                                               }) => {
    return (
        <div className="widget-card" style={{width, height}}>
            <div className="card-header">
            <span className="widget-icon">
              <img src={widgetIcon} alt={widgetIconAltText}/>
            </span>
                <div className="card-actions">
                    {widgetActions.map((action, index) => (
                        <span className="widget-icon" key={index} title={action.actionTitle}>
                  <img src={action.actionIcon} alt={action.actionIconAltText}/>
                </span>
                    ))}
                </div>
            </div>
            <div className="card-body">
                <div className="card-title">{widgetTitle}</div>
                <div className="count">10</div>
                <div className="subtext"><strong>8</strong> assessments unassigned</div>
            </div>
        </div>
    );
};

export default WidgetCard;

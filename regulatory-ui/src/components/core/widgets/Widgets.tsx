import WidgetCard from "./WidgetCard/WidgetCard";
import {widgetConfig} from "../../../config/widget.config.ts";
import "./Widgets.scss";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets-grid">
                {widgetConfig.map((widget, index) => (
                    <WidgetCard key={index} {...widget} />
                ))}
            </div>
        </div>
    );
};

export default Widgets;

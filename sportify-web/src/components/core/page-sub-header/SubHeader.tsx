import React from "react";
import "./SubHeader.scss";

const SubHeader: React.FC<{ title: string }> = ({title}) => {
    return (
        <>
            <div className="sub-header">
                <div className="row">
                    <h3 className="highlight">{title}</h3>
                </div>
            </div>
        </>
    );
}

export default SubHeader;
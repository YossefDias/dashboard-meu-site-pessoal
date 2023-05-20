import React from "react";

import Styles from "./InfoBox.module.css";

interface InfoBoxProps {
    title: string;
    value: number | string;
    icon?: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, value, icon }) => {
    return (
        <div className={Styles.infoBox}>
            <h3>{title}</h3>
            <div className={Styles.infoContainer}>
                {icon}
                <h1>value</h1>
            </div>
            </div>    
    );
};

export default InfoBox;


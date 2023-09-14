import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setselectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    const timer = setTimeout(() => {
      setselectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span 
            key={index} 
            className={`tabItem ${selectedTab === index ? "active": ""} `}
            onClick={()=> activeTab(tab, index)}>

            {tab}
          </span>
        ))}

        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTabs;

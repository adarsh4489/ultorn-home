import { useState } from "react";
import "./Generator.css";
import design1 from "../assets/design1.png";
import Textgenerator from "./Textgenerator";

const Generator = () => {
  const [activeTab, setActiveTab] = useState("text");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="generator-container">
      <div>
        <h1 className="heading">
          Generate <span className="special-text">3D characters</span> from a
          text <br /> prompt or an image
        </h1>
      </div>
      <div className="buttons-container">
        <img src={design1} className="design-small" alt="" />
        <button
          className={`btn ${activeTab === "text" ? "active" : ""}`}
          onClick={() => handleTabChange("text")}
        >
          Text-to-3D
        </button>
        <button
          className={`btn ${activeTab === "image" ? "active" : ""}`}
          onClick={() => handleTabChange("image")}
        >
          Image-to-3D
        </button>
      </div>
      <Textgenerator mode={activeTab} />
    </div>
  );
};

export default Generator;

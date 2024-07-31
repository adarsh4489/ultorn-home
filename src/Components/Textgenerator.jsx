import { useState, useRef } from "react";
import "./Textgenerator.css";
import maleIcon from "../assets/malesign.png";
import femaleIcon from "../assets/female sign.png";
import uploadIcon from "../assets/upload.png";

const Textgenerator = ({ mode }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="wrapper-text-container">
      <div className="text-container">
        <div className="prompt-container">
          {mode === "text" ? (
            <textarea
              name="prompt"
              placeholder="Enter your prompt describing the features"
              id="prompt"
              rows="12"
              cols="90"
            />
          ) : (
            <div className="upload-image" onClick={handleDivClick}>
              <img src={uploadIcon} alt="Upload" />
              <p>
                <span>Click to upload</span> or <br />
                Drag and Drop
              </p>
              <p>Supported formats: PNG, JPG, JPEG, WebP</p>
              {selectedFile && <p>Selected file: {selectedFile.name}</p>}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          )}

          <div className="gender">
            <h2>Choose Gender</h2>
            <div className="male category">
              <img className="gender-sign" src={maleIcon} alt="Male" />
              <p>Male</p>
            </div>
            <div className="female category">
              <img className="gender-sign" src={femaleIcon} alt="Female" />
              <p>Female</p>
            </div>
          </div>
        </div>

        <div className="generate-btn">Generate</div>

        <div className="suggestions-container">
          <div className="suggestion">A 55-year-old American guy with...</div>
          <div className="suggestion">A young smiling cute Korean girl...</div>
          <div className="suggestion">45-year-old Asian guy with clean...</div>
        </div>
      </div>
    </div>
  );
};

export default Textgenerator;

import React from "react";
import "./resume.css"; // recommended approach

const ResumeDownload = () => {
  return (
    <div>
      <a
        href="/Resume.pdf"
        download
        className="download-button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownload;

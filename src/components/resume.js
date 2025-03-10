import React from "react";

const ResumeDownload = () => {
    return (
        <>
            <a href="/resume.pdf" download="Uday_Kumar_Resume.pdf" className="project-link demo">
                Download Resume
            </a>
            <style jsx>{`
                .project-link.demo {
                    background-color: #4CAF50;
                    color: #ffffff;
                    padding: 10px 20px;
                    border-radius: 5px;
                    text-decoration: none;
                    display: inline-block;
                    text-align: center;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};

export default ResumeDownload;

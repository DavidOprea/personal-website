import "./global.css";
import resumePDF from "../../src/assets/Resume.pdf";

function Resume() {
    return (
        <div className="resume-container">
            <h2 class="header-text">Resume</h2>
            <div className="resume-actions">
                <a href={resumePDF} download="David-Oprea-Resume.pdf" className="download-resume-btn">
                    Download PDF
                </a>
            </div>
            <div className="pdf-viewer">
                <embed 
                    src={resumePDF} 
                    type="application/pdf" 
                    width="100%" 
                    height="600px" 
                />
            </div>
        </div>
    )
}

export default Resume;
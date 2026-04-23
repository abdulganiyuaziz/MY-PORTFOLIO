import  { useState } from "react";
import "./Resume.css";

import Education from "../Education/Education";
import Work from "../Work/work";
import FrontEnd from "../Frontend/frontend";
import Backend from "../backend/backend";
import Tools from "../Tools/Tools";
import Interests from '../Interests/Interest'

import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaTools,
  FaPalette,
} from "react-icons/fa";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <section className="resume"  id="Resume">
      <h1 className="title">Resume</h1>
      <p className="subtitle">My formal Bio Details</p>

      <div className="divider" id="resume">
        <span></span>
      </div>

      <div className="resume-content" id="resume">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-strip"></div>

          <div className="sidebar-menu">
            <button
              className={activeSection === "education" ? "active" : ""}
              onClick={() => setActiveSection("education")}
            >
              <span className="icon">
                <FaGraduationCap />
              </span>
              Education
            </button>

            <button
              className={activeSection === "work" ? "active" : ""}
              onClick={() => setActiveSection("work")}
            >
              <span className="icon">
                <FaBriefcase />
              </span>
              Work History
            </button>

            <button
              className={activeSection === "frontend" ? "active" : ""}
              onClick={() => setActiveSection("frontend")}
            >
              <span className="icon">
                <FaCode />
              </span>
              Frontend Skills
            </button>

            <button
              className={activeSection === "backend" ? "active" : ""}
              onClick={() => setActiveSection("backend")}
            >
              <span className="icon">
                <FaCode />
              </span>
              Backend Skills
            </button>

            <button
              className={activeSection === "tools" ? "active" : ""}
              onClick={() => setActiveSection("tools")}
            >
              <span className="icon">
                <FaTools />
              </span>
              Tools & Professional
            </button>

            <button
              className={activeSection === "interests" ? "active" : ""}
              onClick={() => setActiveSection("interests")}
            >
              <span className="icon">
                <FaPalette />
              </span>
              Interests
            </button>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main key={activeSection} className="details">
          {activeSection === "education" && <Education />}
          {activeSection === "work" && <Work />}
          {activeSection === "frontend" && <FrontEnd />}
          {activeSection === "backend" && <Backend />}
          {activeSection === "tools" && <Tools />}
          {activeSection === "interests" && <Interests />}
        </main>
      </div>
    </section>
  );
};

export default Resume;
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="social-icons">
              <a
                href="https://github.com/abdulganiyuaziz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/abdulganiyu2026/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.twitch.tv/abdulganiyu1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Abdul Ganiyu</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}

                <TypeAnimation
                  sequence={[
                    "Team Medic",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Mern Stack Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "React Developer",
                    2000,
                    "UI Designer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                As a Full-stack software developer and Team Medic, I possess a
                diverse skill set that empowers me to create and deploy dynamic
                user interfaces and immersive experiences, leaving a lasting
                impact on both clients and companies. Leveraging cutting-edge
                technologies and design systems, I craft interactive solutions
                that exceed expectations and align seamlessly with business
                objectives. My dedication to user satisfaction drives me to
                deliver the best, most functional, and enduring solutions that
                merge aesthetic appeal with practical functionality.
              </span>
            </span>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

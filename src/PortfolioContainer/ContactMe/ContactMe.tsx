import "./Contactme.css";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import contactImg from '../../assets/HOME/mailz.jpeg'

const ContactMe = () => {
  return (
    <section className="contact-section" >
      {/* Heading */}
      <div className="contact-header" id="ContactMe">
        <h2>Contact Me</h2>
        <p>Let's Keep In Touch</p>
        <div className="underline">
          <span></span>
        </div>
      </div>

      {/* Main Card */}
      <div className="contact-card">
        {/* Left */}
        <div className="contact-left">
          <TypeAnimation
            sequence={["Get In Touch With Me", 2000, ""]}
            speed={50}
            repeat={Infinity}
          />

          <div className="social-icons">
            <a href="https://github.com/abdulganiyuaziz" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/abdulganiyu2026/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://www.twitch.tv/abdulganiyu1" target="_blank">
              <FaTwitter />
            </a>
          </div>

          <p className="email-text">Send Your Email Here</p>
          <img src={contactImg} alt="contact image" style={{ width: '450px', height: '150px',  }} />

          <div className="contact-bg">{/* background image via CSS */}</div>
        </div>

        {/* Right */}
     
          <form action="https://formspree.io/f/mojjqryy" method="POST" className="contact-right">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your Name" />

            <label>Email</label>
            <input type="email" name="email" placeholder="Your Email" />

            <label>Message</label>
            <textarea placeholder="Your Message" name="message"></textarea>

            <button type="submit" className="send-btn">
              Send <FiSend />
            </button>
          </form>
     
      </div>
    </section>
  );
};

export default ContactMe;

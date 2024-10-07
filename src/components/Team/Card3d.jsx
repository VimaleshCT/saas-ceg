import { FaInstagram, FaLinkedin } from "react-icons/fa";

const ThreeDCardDemo = ({
  img,
  name,
  position,
  instagramLink,
  linkedinLink,
}) => {
  return (
    <div className="team-card">
      {/* Display the image */}
      <img src={img} alt={name} className="team-card-img" />

      {/* Display name and position */}
      <div className="team-card-info">
        <h3>{name}</h3>
        <p>{position}</p>

        {/* Social icons */}
        <div className="team-card-social">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCardDemo;

import PropTypes from "prop-types";

export default function Skills({ img, imgtitle }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <img src={img} alt="" loading="lazy" />
      </div>
      <span>{imgtitle}</span>
    </div>
  );
}

Skills.propTypes = {
  img: PropTypes.string.isRequired,
  imgtitle: PropTypes.string.isRequired,
};

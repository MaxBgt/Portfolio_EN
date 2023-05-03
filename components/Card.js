import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const Card = ({ project }) => {
  return (
    <div className="card">
      <div className="top-container">
        <h2 className="card_title">{project.title}</h2>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="link-icon"
        />
      </div>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <img src={project.img} alt={project.title} className="card_img" />
        <div className="description_container">
          <p className="description">{project.desc}</p>
        </div>
        <div className="techno-container">
          {project.techno &&
            project.techno.map((techImg, index) => (
              <img key={index} src={techImg} className="techno" />
            ))}
        </div>
      </a>
    </div>
  );
};

export default Card;

import React from "react";
import { motion } from "framer-motion";
const Card = ({ project }) => {
  return (
    <div className="card">
      <h2 className="card_title">{project.title}</h2>
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

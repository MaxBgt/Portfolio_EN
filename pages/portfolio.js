import Card from "@/components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des projets:", error)
      );
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        className="portfolio"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="header_portfolio">
          <h2 className="title_portfolio">MY PROJECTS</h2>
          <h3 className="subtitle_portfolio">
            These are the projects I've worked on
          </h3>
        </div>
        <div className="card_container">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default portfolio;

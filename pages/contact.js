import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faRoad } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FormTemplate } from "@/components/FormTemplate";
import { AnimatePresence, motion } from "framer-motion";

const contact = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="header_contact"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className="title_contact">CONTACTEZ-MOI</h2>
        <div className="contact_container">
          <FormTemplate />
          <div className="contact-infos">
            <h3 className="infos_title">
              <FontAwesomeIcon icon={faRoad} className="icon" />
              ADRESSE
            </h3>
            <p className="infos">6 impasse de la poste</p>
            <p className="infos">58000</p>
            <p className="infos">Challuy</p>
            <h3 className="infos_title">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              TÉLÉPHONE
            </h3>
            <p className="infos">(+33) 6-11-14-44-51</p>
            <h3 className="infos_title">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              E-MAIL
            </h3>
            <p className="infos">maxime.bignolet@gmail.com</p>
            <h3 className="infos_title">
              <a href="https://github.com/MaxBgt" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="social" />
                GITHUB
              </a>
            </h3>
            <h3 className="infos_title">
              <a
                href="https://www.linkedin.com/in/maxime-bignolet-8228bb219/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="social" />
                LinkedIn
              </a>
            </h3>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default contact;

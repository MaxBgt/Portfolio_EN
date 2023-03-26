import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const about = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="about"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="header_about">
          <h2 className="title_about">ABOUT</h2>
        </div>
        <div className="paragraphe">
          <div className="p-left">
            <h2 className="t-left">A passionate web developer</h2>
            <p>
              As a web developer, I began my journey in learning development in
              August 2022.
            </p>
            <p>
              Since then, I discovered a true passion for computer programming
              that quickly captivated and fascinated me. Thanks to this passion,
              I committed myself to acquiring skills and mastering the latest
              web technologies, allowing me to create innovative,
              high-performance, and aesthetically appealing websites and web
              applications.
            </p>
            <p>
              This adventure continues to enrich me daily, and I am thrilled to
              explore and contribute to the ever-evolving world of web
              development. I am also proud to bring my expertise and enthusiasm
              to the developer community and actively participate in creating
              digital solutions.
            </p>
          </div>
          <div className="center">
            <img
              src="img/background-2.jpg"
              alt="image-about"
              className="img-about"
            />
          </div>
          <div className="p-right">
            <h2 className="t-right">Experience gained</h2>
            <p>
              Throughout my learning, I have gained valuable experience through
              the numerous personal projects I have undertaken, as well as those
              I have contributed to during my training.
              <br />
            </p>
            <p>
              These projects have allowed me to put into practice the acquired
              skills, solve real problems, and improve my ability to work
              independently and in a team. In addition, I obtained a Web
              Developer Integrator diploma equivalent to a 2-year degree thanks
              to the training provided by Openclassrooms.
              <br />
            </p>
            <p>
              This recognized training has given me the opportunity to
              consolidate my knowledge and strengthen my expertise in the field
              of web development, preparing me to face professional challenges
              with confidence and competence.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default about;

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
          <h2 className="title_about">À PROPOS</h2>
        </div>
        <div className="paragraphe">
          <div className="p-left">
            <h2 className="t-left">Un développeur web passioné</h2>
            <p>
              En tant que développeur web, j'ai débuté mon parcours dans
              l'apprentissage du développement en août 2022.
            </p>
            <p>
              Dès lors, j'ai découvert une véritable passion pour la
              programmation informatique qui m'a rapidement captivé et fasciné.
              Grâce à cette passion, je me suis engagé dans l'acquisition de
              compétences et la maîtrise des technologies web les plus récentes,
              me permettant de créer des sites et des applications web
              innovants, performants et esthétiquement attrayants.
            </p>
            <p>
              Cette aventure continue de m'enrichir quotidiennement, et je suis
              ravi d'explorer et de contribuer à l'univers en constante
              évolution du développement web. Je suis également fier de pouvoir
              apporter mon savoir-faire et mon enthousiasme à la communauté des
              développeurs et de participer activement à la création de
              solutions numériques.
            </p>
          </div>
          <div className="center">
            <img
              src="img/background-2.jpg"
              alt="image-a-propos"
              className="img-about"
            />
          </div>
          <div className="p-right">
            <h2 className="t-right">Expérience acquise</h2>
            <p>
              Au cours de mon apprentissage, j'ai acquis une expérience
              précieuse grâce aux nombreux projets personnels que j'ai réalisés,
              ainsi qu'à ceux auxquels j'ai contribué durant ma formation.
              <br />
            </p>
            <p>
              Ces projets m'ont permis de mettre en pratique les compétences
              acquises, de résoudre des problèmes réels et d'améliorer ma
              capacité à travailler de manière autonome et en équipe. Par
              ailleurs, j'ai obtenu un diplôme de Développeur Intégrateur Web
              équivalent à un niveau bac +2 grâce à la formation dispensée par
              Openclassrooms.
              <br />
            </p>
            <p>
              Cette formation reconnue m'a offert l'opportunité de consolider
              mes connaissances et de renforcer mon expertise dans le domaine du
              développement web, me préparant ainsi à relever les défis
              professionnels qui se présentent à moi avec confiance et
              compétence.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default about;

import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const job = document.querySelector(".job");
    const text = [
      "Développeur web",
      "Concepteur de sites web",
      "Web Mobile",
      "Responsive Design",
      "Front-end | Back-end",
    ];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    const loop = () => {
      if (wordIndex >= text.length) {
        wordIndex = 0;
      }

      if (!isDeleting) {
        job.textContent = text[wordIndex].slice(0, letterIndex);
      } else {
        job.textContent = text[wordIndex].slice(0, letterIndex - 1);
      }

      setTimeout(
        () => {
          if (!isDeleting) {
            letterIndex++;
          } else {
            letterIndex--;
          }

          if (letterIndex > text[wordIndex].length) {
            isDeleting = true;
            setTimeout(loop, 1000);
          } else if (letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            setTimeout(loop, 1000);
          } else {
            loop();
          }
        },
        isDeleting ? 80 : 80
      );
    };
    loop();
  }, []);

  return (
    <div className="header">
      <div className="title">
        <h2 className="name">Maxime Bignolet</h2>
        <div className="job-container">
          <h1 className="job"></h1>
        </div>
      </div>
    </div>
  );
};

export default DynamicText;

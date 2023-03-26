import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomClass, setZoomClass] = useState(["img-carousel", "", ""]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoomClass((prevClass) => {
        const newClass = ["", "", ""];
        newClass[activeIndex] = "img-carousel";
        return newClass;
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeIndex]);
  const handleOnChange = (index) => {
    setActiveIndex(index);
  };

  const handleOnTransitionEnd = () => {
    setTransitioning(false);
  };
  const customPrevBtn = (onClickHandler) => (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="arrow_left"
      onClick={onClickHandler}
    />
  );
  const customNextBtn = (onClickHandler) => (
    <FontAwesomeIcon
      icon={faChevronRight}
      className="arrow_right"
      onClick={onClickHandler}
    />
  );
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      onChange={handleOnChange}
      onTransitionEnd={handleOnTransitionEnd}
      stopOnHover={false}
      cssClass="default-carouel"
      renderArrowNext={customNextBtn}
      renderArrowPrev={customPrevBtn}
      prevLabel="Previous"
      nextLabel="Next"
    >
      <div>
        <img
          src="/img/background-1.jpg"
          alt="Image1"
          className={zoomClass[0]}
        />
      </div>
      <div>
        <img
          src="/img/background-2.jpg"
          alt="Image2"
          className={zoomClass[1]}
        />
      </div>
      <div>
        <img
          src="/img/background-3.jpg"
          alt="Image3"
          className={zoomClass[2]}
        />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;

import React from "react";

const CarouselIndicator = props => {
  const { content = [], activeSlide = "", showSelectedSlide } = props;
  return (
    <section className="carousel-indicator-wrapper">
      {content &&
        content.length &&
        content.map((element, index) => {
          return (
            <span
              key={index}
              onClick={() => showSelectedSlide(index)}
              className={
                activeSlide === index ? "indicator active" : "indicator"
              }
            ></span>
          );
        })}
    </section>
  );
};

export default CarouselIndicator;

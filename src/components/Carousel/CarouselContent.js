import React from "react";

const Content = props => {
  const { mainText = "", componentClassName, animationClassName } = props;

  return (
    <div className={["carousel-body-main-text", componentClassName, animationClassName].join(" ")}>
      {mainText}
    </div>
  );
};

const Carousel = props => {
  const { content = [], activeSlide, animationClassName } = props;
  return (
    <section className="carousel-content-wrapper">
      {content &&
        content.length > 0 &&
        content.map((data, index) => {
          return (
            <Content
              key={index}
              mainText={data.mainText}
              activeSlide={activeSlide}
              animationClassName={animationClassName}
              componentClassName={activeSlide === index ? "active" : ""}
            />
          );
        })}
    </section>
  );
};

export default Carousel;

import React from "react";

const Content = props => {
  const { mainText = "", componentClassName } = props;

  return (
    <div className={["carousel-body-main-text", componentClassName].join(" ")}>
      {mainText}
    </div>
  );
};

const Carousel = props => {
  const { content = [], activeSlide } = props;
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
              componentClassName={activeSlide === index ? "active" : ""}
            />
          );
        })}
    </section>
  );
};

export default Carousel;

import React from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import CarouselContent from "./CarouselContent";
import CarouselIndicator from "./CarouselIndicator";
import "../../assets/styles/carousel.scss";

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
    this.handleOnSlideLeft = this.handleOnSlideLeft.bind(this);
    this.handleOnSlideRight = this.handleOnSlideRight.bind(this);
    this.showSelectedSlide = this.showSelectedSlide.bind(this);
  }

  handleOnSlideLeft() {
    const { activeSlide } = this.state;

    let value = activeSlide - 1;
    if (value < 0) {
      value = 0;
    }
    this.setState({ activeSlide: value });
  }

  handleOnSlideRight() {
    const { content } = this.props;
    const { activeSlide } = this.state;
    const length = content.length;

    let value = activeSlide + 1;
    if (value >= length) {
      value = 0;
    }
    this.setState({ activeSlide: value });
  }

  showSelectedSlide(value) {
    this.setState({ activeSlide: value });
  }

  componentDidUpdate(prevProps) {
    const { content = [] } = prevProps;
    if (this.props.content.length !== content.length) {
      this.setState({ activeSlide: 0 });
    }
  }
  render() {
    const { content = [] } = this.props;
    const { activeSlide = 1 } = this.state;
    return (
      <section className="carousel-wrapper">
        <LeftArrow handleOnSlideLeft={this.handleOnSlideLeft} />
        <CarouselContent content={content} activeSlide={activeSlide} />
        <CarouselIndicator
          content={content}
          activeSlide={activeSlide}
          showSelectedSlide={this.showSelectedSlide}
        />
        <RightArrow handleOnSlideRight={this.handleOnSlideRight} />
      </section>
    );
  }
}

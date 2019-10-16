import React from "react";
import { Carousel, CaraouselHistoryTable, Header } from "../components";
import Modal from "react-responsive-modal";
import "../assets/styles/carousel-page.scss";

function generateData(number) {
  let result = [];
  if (number) {
    for (let i = 0; i < number; i++) {
      const data = { mainText: i + 1 };
      result.push(data);
    }
  }
  return result;
}

class CarouselPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfSlides: "",
      updateHistory: [],
      modalState: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleShowHistory = this.handleShowHistory.bind(this);
    this.handleOnCloseModal = this.handleOnCloseModal.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    if (
      !sessionStorage.getItem("IsLogin") ||
      sessionStorage.getItem("IsLogin") !== "1"
    ) {
      history.push("/login");
    }
  }

  handleShowHistory() {
    this.setState({ modalState: true });
  }

  handleOnCloseModal() {
    this.setState({ modalState: false });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const currentDate = new Date().toISOString();
    const data = { noOfSlides: value, createdAt: currentDate };
    this.setState(
      prevState => ({
        updateHistory: [...prevState.updateHistory, data]
      }),
      this.saveData
    );
  }

  onLogoutClick() {
    const { history } = this.props;
    const dataToReset = ["IsLogin", "Username"];
    dataToReset.forEach(element => {
      sessionStorage.removeItem(element);
    });
    history.push("/login");
  }

  saveData = () => {
    const { updateHistory } = this.state;
    sessionStorage.setItem(
      "CarouselUpdateHistory",
      JSON.stringify(updateHistory)
    );
  };

  _renderSelectOptions = num => {
    let result = [];
    if (num) {
      for (let i = 0; i < num; i++) {
        const ele = (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        );
        result.push(ele);
      }
    }
    return result;
  };

  render() {
    const { noOfSlides, updateHistory, modalState } = this.state;
    const carouselContent = generateData(noOfSlides);
    const componentClassName =
      noOfSlides && noOfSlides > 0
        ? "slide-action-block-selected"
        : "slide-action-block";
    const sectionBgColor =
      noOfSlides && noOfSlides > 0
        ? {}
        : { background: "linear-gradient(45deg, #ff7321, #e91e63)" };
    return (
      <React.Fragment>
        <Header onLogoutClick={this.onLogoutClick} />
        <section className="carousel-page-wrapper" style={sectionBgColor}>
          <div className={componentClassName}>
            <select name="noOfSlides" onChange={this.handleOnChange}>
              <option value="">Select No. Of Slides </option>
              {this._renderSelectOptions(20)}
            </select>
            {!!noOfSlides && (
              <button
                onClick={this.handleShowHistory}
                className="btn-show-history"
                title="Show History"
              >
                Finish
              </button>
            )}
          </div>
          {!!noOfSlides && <Carousel content={carouselContent} delay={3000} />}
          <Modal open={modalState} onClose={this.handleOnCloseModal} center>
            <CaraouselHistoryTable updateHistory={updateHistory} />
          </Modal>
        </section>
      </React.Fragment>
    );
  }
}

export default CarouselPage;

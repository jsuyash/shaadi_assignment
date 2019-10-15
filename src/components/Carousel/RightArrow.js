import React from "react";

const RightArrow = props => {
  const { handleOnSlideRight } = props;
  return (
    <div className="right-arrow" onClick={handleOnSlideRight}>
      &gt;
    </div>
  );
};

export default RightArrow;

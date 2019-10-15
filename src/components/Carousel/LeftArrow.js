import React from "react";

const LeftArrow = props => {
  const { handleOnSlideLeft } = props;
  return (
    <div className="left-arrow" onClick={handleOnSlideLeft}>
      &lt;
    </div>
  );
};

export default LeftArrow;

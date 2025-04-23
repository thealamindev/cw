import React from "react";
import { CiCircleChevLeft } from "react-icons/ci";
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={"text-white text-4xl absolute top-1/2 left-4 transalate-y-[-50%] z-20"} onClick={onClick}>
      <CiCircleChevLeft />
    </div>
  );
};

export default PrevArrow;

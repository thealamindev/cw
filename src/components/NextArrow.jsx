import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

const NextArrow = (props) => {
  const {onClick } = props;

  return (
    <div
      className={"text-white text-4xl absolute top-1/2 right-4 transalate-y-[-50%] z-20"}
      onClick={onClick}
    >
      <CiCircleChevRight/>
    </div>
  );
};

export default NextArrow;

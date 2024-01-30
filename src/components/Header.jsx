import React from "react";
import Icon from "./atoms/Icon";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

export default function Header({ height }) {
  const customStyle = {
    width: "100%",
    height: height,
    backgroundColor: "#065E54",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const leftIconProps = {
    width: 40,
    height: 40,
    color: "#FEFEFE",
    margin: "0 0 0 0",
    padding: "0 0 0 0 ",
    size: "2rem",
    icon: <HiOutlineArrowSmLeft />,
  };

  return (
    <div style={customStyle}>
      <div className={"_1"}>
        <Icon {...leftIconProps} />
      </div>
      <div className={"_2"}>2</div>
    </div>
  );
}

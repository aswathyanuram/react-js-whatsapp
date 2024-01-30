import React from "react";

export default function Status({ height }) {
  const customStyle = {
    width: "100%",
    height: height,
    backgroundColor: "#044A43",
  };

  return <div style={customStyle}></div>;
}

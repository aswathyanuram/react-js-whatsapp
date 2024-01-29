import React from "react";

export default function Footer({ height }) {
  const customStyle = {
    width: "100%",
    height: height,
    backgroundColor: "red",
  };

  return <div style={customStyle}>Footer</div>;
}

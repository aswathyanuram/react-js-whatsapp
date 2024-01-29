import React from "react";

export default function Header({ height }) {
  const customStyle = {
    width: "100%",
    height: height,
    backgroundColor: "red",
  };

  return <div style={customStyle}>Header</div>;
}

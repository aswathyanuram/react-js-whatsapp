import React from "react";
import PropTypes from "prop-types";

export default function Icon({
  width,
  height,
  color,
  margin,
  padding,
  icon,
  size,
}) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    color,
    margin,
    padding,
    fontSize: size,
  };
  return <div style={style}>{icon}</div>;
}

Icon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

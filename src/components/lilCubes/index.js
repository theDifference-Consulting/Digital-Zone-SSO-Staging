import React from "react"
import PropTypes from 'prop-types'
import "./lilCubes.scss"

export const LilCubes = (props) => {
  return (<div className="lil-cubes" style={props}></div>);
}

LilCubes.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string
}

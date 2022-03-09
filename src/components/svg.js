import React from "react"
import PropTypes from 'prop-types'

// TODO: change svg names to something descriptive

export const SVG = ({ name, ...props }) => (
  <img {...props} src={`../img/${name}.svg`} alt={`${name} icon`} />
)

SVG.propTypes = {
  name: PropTypes.string,
}

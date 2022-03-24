import React from "react"
import PropTypes from 'prop-types'

// TODO: change svg names to something descriptive

export const Svg = ({ name, ...props }) => (
  <img {...props} src={`../img/${name}.svg`} alt={`${name} icon`} />
)

Svg.propTypes = {
  name: PropTypes.string,
}

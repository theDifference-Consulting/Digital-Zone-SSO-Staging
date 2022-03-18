import React from "react"
import PropTypes from "prop-types"

export const Section = ({ light, children, ...props }) => {
  return (
    <div className={`section ${light?"light-bg":""}`} {...props}>
      {children}
    </div>
  )
}

Section.propTypes = {
  light: PropTypes.bool,
  children: PropTypes.node.isRequired,
}


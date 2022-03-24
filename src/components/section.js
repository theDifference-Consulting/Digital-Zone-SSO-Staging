import React from "react"
import PropTypes from "prop-types"

export const Section = ({ light, children, ...props }) => {
  return (
    <div {...props} className={`section ${light?"light-bg":""} ${props.className || ""}`} >
      {children}
    </div>
  )
}

Section.propTypes = {
  light: PropTypes.bool,
  children: PropTypes.node.isRequired,
}


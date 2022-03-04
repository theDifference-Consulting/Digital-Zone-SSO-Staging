import React from "react"
import PropTypes from 'prop-types'
import "./animatedHeader.scss"
import { SVG } from "../svg"
import ScrollAnimation from 'react-animate-on-scroll';

export const AnimatedHeader = ({ svg, title, ...props }) => (
  <div {...props} className="animated-header">
    <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true} offset={50}>
      <SVG name={svg} className="bug" />
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true} offset={50}>
      <h4>{ title }</h4>
    </ScrollAnimation>
  </div>
)

AnimatedHeader.propTypes = {
  svg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}


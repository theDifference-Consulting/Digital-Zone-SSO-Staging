import React from "react"
import PropTypes from 'prop-types'
import "./animatedHeader.scss"
import { SVG } from "../svg"
import ScrollAnimation from 'react-animate-on-scroll';

export const AnimatedHeader = ({ svg, title, ...props }) => (
  <div {...props} className="animated-header">
    <ScrollAnimation animateIn="animate__slideInRight" offset={50}>
      <SVG name={svg} className="bug" />
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__slideInLeft" offset={50}>
      <h2>{ title }</h2>
    </ScrollAnimation>
  </div>
)

AnimatedHeader.propTypes = {
  svg: PropTypes.string,
  title: PropTypes.string
}


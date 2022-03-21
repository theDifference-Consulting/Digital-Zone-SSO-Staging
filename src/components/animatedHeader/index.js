import React from "react"
import PropTypes from 'prop-types'
import "./animatedHeader.scss"
import { Svg } from "../svg"
import ScrollAnimation from 'react-animate-on-scroll'
import { LilCubes } from "../lilCubes"

export const AnimatedHeader = ({ svg, title, ...props }) => (
  <div {...props} className="animated-header">
    <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true} offset={50} className="bug-container">
      <div className="cloud cloud--small" style={{
        left: "0%",
        right: "23.19%",
        top: "36.78%",
        bottom: "10%",
        width: "auto",
        height: "auto"
      }}></div>
      <div className="cloud cloud--small" style={{
        left: "24.55%",
        right: "-1.36%",
        top: "0%",
        bottom: "46.78%",
        width: "auto",
        height: "auto"
      }}></div>
      <div className="bug">
        <Svg name={svg} />
      </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true} offset={50}>
      <h4>
        <LilCubes left="-8px" top="-8px" />
        <LilCubes left="20px" bottom="-10px" />
        { title }
        <LilCubes right="20px" top="-8px" />
        <LilCubes right="40px" bottom="-10px" />
      </h4>
    </ScrollAnimation>
  </div>
)

AnimatedHeader.propTypes = {
  svg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

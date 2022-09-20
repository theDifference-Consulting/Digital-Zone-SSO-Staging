import React from "react"
import PropTypes from 'prop-types'
import { Row } from "react-bootstrap"
import { LilCubes } from "../lilCubes"
import "./adviserHeadshot.scss"

export const AdviserHeadshot = ({ adviser }) => (
  <div className="adviser-headshot">
    <Row className="adviser-headshot__text">
      <div>
        <h3>
          { adviser.name }
        </h3>
        <p>
          {adviser.title || ""}
        </p>
        <p>
          {adviser.country || ""}
        </p>
        <p>
          {adviser.email || ""}
        </p>
        <p>
          {adviser.role || ""}
        </p>
        <LilCubes left="-8px" top="-8px" />
        <LilCubes left="-6px" bottom="-34px" />
        <LilCubes left="14px" bottom="-21px" />
        <LilCubes right="20px" top="-8px" />
        <LilCubes right="16px" bottom="-40px" />
      </div>
    </Row>
    <Row className="adviser-headshot__image">
      <img 
          alt={`${adviser.name}, ${adviser.title||""} headshot`}
          srcSet={`${adviser.img}-1.jpg 300w, ${adviser.img}-3.jpg 600w`}
          sizes="(max-width: 300px) 200px, 100%"
      />
    </Row>
  </div>
)


AdviserHeadshot.propTypes = {
  adviser: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }).isRequired
}

import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Experiences.css'

const Experiences = () => {
  return(
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        >

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
export default Experiences
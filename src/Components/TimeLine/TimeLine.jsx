import React, { Component } from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timelineInfo } from "../../timelineinfo"


export class Timeline extends Component {
    render() {
        const iconBackground = " #287EB6"
        const iconFill = "#fefefe"
        return (
            <VerticalTimeline>
                {
                    timelineInfo.map((element) => {
                        return (
                            <VerticalTimelineElement
                                date={element.date}
                                icon={element.icon}
                                iconStyle={{ background: element.iconColor ? element.iconColor : iconBackground, color: element.iconFill ? element.fill : iconFill }}
                                contentStyle={{ background: '#0A141C', color: '#FEFEFE' }}
                                className={`${element.title.toLowerCase()}-box`}
                                contentArrowStyle={{ borderRight: '7px solid  #0A141C' }}
                                dateClassName={"date"}
                                key={Math.random()}




                            >
                                <h2 className="vertical-timeline-element-title">{element.title}</h2>
                                <p>{element.text}</p>
                                {element.link &&
                                    <div className="card-action">
                                        <a href={element.link} target="_blank" rel="noopener noreferrer">{`More information about ${element.title}`}  </a>

                                    </div>
                                }
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>

        )
    }
}
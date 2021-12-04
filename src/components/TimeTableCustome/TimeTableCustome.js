import React, { Component } from "react";

import TimeTable from "react-timetable-events";
import './TimeTableCustome.css'

export default class Schedule extends Component {
    constructor() {
        super();
        this.state = {
            events: {
                monday: [
                    {
                        id: 1,
                        name: "Homework",
                        type: "custom",
                        startTime: new Date("2018-02-23T11:30:00"),
                        endTime: new Date("2018-02-23T13:30:00")
                    },

                    {
                        id: 2,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T09:30:00"),
                        endTime: new Date("2018-02-23T11:00:00")
                    },
                    {
                        id: 3,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T14:30:00"),
                        endTime: new Date("2018-02-22T15:30:00")
                    },
                    {
                        id: 4,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T15:30:00"),
                        endTime: new Date("2018-02-22T16:30:00")
                    }
                ],
                tuesday: [
                    {
                        id: 5,
                        name: "Homework",
                        type: "custom",
                        startTime: new Date("2018-02-22T09:30:00"),
                        endTime: new Date("2018-02-22T11:30:00")
                    },
                    {
                        id: 6,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T12:00:00"),
                        endTime: new Date("2018-02-23T13:00:00")
                    },
                    {
                        id: 7,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T13:30:00"),
                        endTime: new Date("2018-02-23T14:30:00")
                    },
                    {
                        id: 8,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T15:30:00"),
                        endTime: new Date("2018-02-23T17:30:00")
                    }
                ],
                wednesday: [
                    {
                        id: 9,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T13:30:00"),
                        endTime: new Date("2018-02-23T14:30:00")
                    },
                    {
                        id: 10,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T15:30:00"),
                        endTime: new Date("2018-02-22T16:30:00")
                    }
                ],
                thursday: [
                    {
                        id: 11,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T09:30:00"),
                        endTime: new Date("2018-02-23T12:30:00")
                    },
                    {
                        id: 12,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T14:30:00"),
                        endTime: new Date("2018-02-22T18:30:00")
                    }
                ],
                friday: [
                    {
                        id: 13,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T11:30:00"),
                        endTime: new Date("2018-02-23T14:30:00")
                    },
                    {
                        id: 14,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T15:30:00"),
                        endTime: new Date("2018-02-22T16:30:00")
                    }
                ],
                saturday: [
                    {
                        id: 15,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T08:30:00"),
                        endTime: new Date("2018-02-23T09:30:00")
                    },
                    {
                        id: 16,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T16:30:00"),
                        endTime: new Date("2018-02-22T17:30:00")
                    }
                ],
                sunday: []
            }
        };
    }

    renderHour(hour, defaultAttributes, styles) {
        return (
            <div {...defaultAttributes} key={hour}>
                {hour}h
            </div>
        );
    }

    renderEvent(event, defaultAttributes, classNames) {
        return (
            <div style={{...defaultAttributes}} className='hello' title={event.name} key={event.id}>
                <span>{event.name}</span>
            </div>
        );
    }

    render() {
        return (
            <div>
                <TimeTable
                    events={this.state.events}
                    // renderHour={this.renderHour}
                    // renderEvent={this.renderEvent}
                    // hoursInterval={[9, 24]}
                    timeLabel="Time :)"
                />
            </div>
        );
    }
}

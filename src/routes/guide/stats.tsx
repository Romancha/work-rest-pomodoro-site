import React from "react";
import {Col, Row} from "react-bootstrap";
import {Screenshot, VideoLinkButton} from "./utils";

const Stats = () => {
    return (
        <div id="stats" className={"guide-paragraph"}>
            <h2>6. Statistics</h2>
            <div id="stats-description" className={"guide-paragraph-low"}>
                <h3>6.1 Description of statistics</h3>
                <p>
                    Viewing statistics becomes available when the user finishes an activity of the “Work”
                    type lasting more than 5 minutes. Until then, demo statistics will be displayed.
                </p>
                <p>
                    The statistics card is a list of statistics graph widgets. Statistics are built based on
                    activity in the application and are available for the entire period of using the
                    application, with support for viewing data for a specific day, week or month.
                </p>
                <p>
                    It is also possible to view statistics for a specific category (for this, you need to go
                    to statistics from the category card), in this case the statistics will be based only on
                    the data of the selected category and all included categories in the hierarchy.
                </p>
            </div>

            <div id="stats-diagrams" className={"guide-paragraph-low"}>
                <h3>6.2 Diagrams</h3>

                <div id="stat-time" className={"guide-paragraph-low"}>
                    <h4>6.2.1 Time diagram</h4>

                    <Row>
                        <Col>
                            <p>
                                The time diagram shows the consumed time by activity type Work / Rest.
                            </p>
                            <p>
                                The diagram is interactive, it supports movement along the X axis, zoom.
                            </p>
                        </Col>
                        <Col>
                            {Screenshot("instruction_stat_1_framed.png")}
                        </Col>
                    </Row>
                </div>

                <div id="stat-rest-ratio" className={"guide-paragraph-low"}>
                    <h4>6.2.2 Rest Ratio</h4>

                    <Row>
                        <Col>
                            <p>
                                Rest Ratio shows how much you met your rest plan based on the actual work /
                                rest time for a given period and the configured work / rest duration for a
                                specific category.
                            </p>
                            <p>
                                For example, you used an activity with the category “Work,” which has
                                durations of 25 minutes for work and 5 minutes for rest. You have done 4
                                work periods of 30 minutes and only 1 rest period of 5 minutes, so the rest
                                ratio will be 25%, since you have rested 5 minutes out of the planned 20.
                            </p>
                            <p>
                                The diagram is interactive, it supports movement along the X axis, zoom.
                            </p>
                        </Col>
                        <Col>
                            {Screenshot("instruction_stat_2_framed.png")}
                        </Col>
                    </Row>
                </div>

                <div id="stat-rest-accept-rate" className={"guide-paragraph-low"}>
                    <h4>6.2.3 Rest acceptance rate</h4>

                    <Row>
                        <Col>
                            <p>
                                The diagram shows percentage of how often you accept an offer to rest.
                            </p>
                            <p>
                                The diagram is interactive, it supports movement along the X axis, zoom.
                            </p>
                        </Col>
                        <Col>
                            {Screenshot("instruction_stat_3_framed.png")}
                        </Col>
                    </Row>
                </div>

                <div id="stat-category" className={"guide-paragraph-low"}>
                    <h4>6.2.4 Category pie chart</h4>

                    <Row>
                        <Col>
                            <p>
                                This chart shows the cumulative time of the Job type, sorted by categories.
                            </p>
                            <p>
                                The chart itself displays the categories as a percentage of the time spent.
                                If the number of categories exceeds 5, then the top 4 categories are shown,
                                and the rest are grouped into “Others”. The chart history displays the
                                actual time by category.
                            </p>
                            <p>
                                If statistics for a specific category are used, then this chart includes
                                information only in the nested categories.
                            </p>
                            <p>
                                The chart is interactive, it supports turning pages by swiping “Back”,
                                “Forward”.
                            </p>
                        </Col>
                        <Col>
                            {Screenshot("instruction_stat_3_framed.png")}
                        </Col>
                    </Row>
                </div>

                <div>
                    <p>
                        {VideoLinkButton("LFeZHqiaTCw", "Statistics")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Stats
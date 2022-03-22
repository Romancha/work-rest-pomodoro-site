import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCirclePlus, faCoffee} from "@fortawesome/free-solid-svg-icons";
import {IconColor, Screenshot, VideoLinkButton} from "./utils";

const Activities = () => {
    return (
        <div id="activities" className={"guide-paragraph"}>
            <h2>5. Activities</h2>

            <div id="activities-description" className={"guide-paragraph-low"}>
                <h3>5.1 Description of activities</h3>
                <Row>
                    <Col>
                        <p>
                            The activity screen lets you know when and what you were doing. The screen is
                            made in
                            the form of a list grouped by days, the most recent day is located on top.
                            Within the
                            day there are activities from the beginning to the end of the day. The activity
                            card
                            contains the following information:
                        </p>
                        <p>
                            <ul>
                                <li>Start time of activity</li>
                                <li>End time of activity</li>
                                <li>Activity duration</li>
                                <li>Activity category</li>
                                <li>Activity color based on category color</li>
                                <li>Activity type</li>
                            </ul>
                        </p>
                        <p>
                            The activity type is divided into 2 types:
                        </p>
                        <div className={"ps-5"}>
                            <p>
                                <FontAwesomeIcon icon={faBriefcase} color={IconColor}/> - Work
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCoffee} color={IconColor}/> - Rest
                            </p>
                        </div>
                    </Col>
                    <Col>
                        {Screenshot("instruction_activities_framed.png")}
                    </Col>
                </Row>
            </div>

            <div id="activity-controls" className={"guide-paragraph"}>
                <h3>5.2 Activity controls</h3>
                <p>
                    <FontAwesomeIcon icon={faCirclePlus} color={IconColor} size={"2x"}/> - Create an
                    activity. To create
                    an activity, you must specify the category, type of activity, start time and end time.
                </p>
                <p>
                    <Image src={"/screenshot/baseline_filter_list_white_18dp.png"}
                           style={{backgroundColor: IconColor}}/> - Filter the list. To
                    filter the list of activities, you must specify the start date and the end date of the
                    filtering. To reset the filter, in the filtering dialog box, click Reset Filter.
                </p>
                <p>
                    To edit an activity, click on the activity card.
                </p>
                <p>
                    To delete activities, select the desired activities by long pressing on the cards and
                    click on the trash can icon in the upper right corner.
                </p>
                <p>
                    {VideoLinkButton("hfZERoMLf8Q", "Activities")}
                </p>
            </div>
        </div>
    )
}

export default Activities
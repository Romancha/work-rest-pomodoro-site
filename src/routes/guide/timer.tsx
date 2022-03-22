import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay, faStop, faStopwatch} from "@fortawesome/free-solid-svg-icons";
import {Col, Row} from "react-bootstrap";
import {VideoLinkButton, Screenshot, IconColor, AnchorLink} from "./utils";

const Timer = () => {
    return (
        <div id="timer" className={"guide-paragraph"}>
            <h2>3. Timer</h2>

            <div id="timer-description" className={"guide-paragraph-low"}>
                <h3>3.1 Timer Description</h3>
                <p>
                    The main timer screen contains timer controls and information about the remaining time
                    until
                    the next stage of work or rest.
                </p>
                <p>
                    The timer is divided into 2 types – the work timer and the rest timer. Each timer type
                    has a
                    duration setting, the default duration for the work timer is 25 minutes, for the rest –
                    5
                    minutes.
                </p>

                <div className={"ps-5"}>
                    <p>
                        <FontAwesomeIcon icon={faPlay} color={IconColor}/> - start work period
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPause} color={IconColor}/> - pause timer
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faStop} color={IconColor}/> - stop timer
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faStopwatch} color={IconColor}/> - start rest period
                    </p>
                </div>

                <p>
                    {VideoLinkButton("gv4A0gMN0Oc", "Timer")}
                </p>
            </div>

            <div id={"pomodoro-technique"} className={"guide-paragraph-low"}>
                <h3>3.2 Pomodoro Technique</h3>
                <Row>
                    <Col>
                        <p>
                            The timer supports the Pomodoro technique. The essence of the Pomodoro technique
                            is to break tasks into 25-minute intervals called “pomodoro,” followed by a
                            5-minute rest after each interval. At the same time, after every 4th pomodoro,
                            you should take a long break from 15 to 30 minutes.
                        </p>
                        <p>
                            The top of the timer shows how many pomodoros are left before the long break.
                        </p>
                        <p>
                            The application provides the ability to adjust the number of pomodoros for a
                            long period, as well as the length of the long break
                            (see. {AnchorLink("app-settings-long-rest", "Long Rest (Pomodoro Technique)")}).
                        </p>
                    </Col>
                    <Col>
                        {Screenshot("instruction_pomodoro.png")}
                    </Col>
                </Row>
            </div>

            <div id="timer-adj" className={"guide-paragraph-low"}>
                <h3>3.3 Quick adjustment of the timer</h3>
                <p>
                    You can quickly adjust the timer by swiping the screen.
                </p>
                <p>
                    Swipe right +1 minute
                </p>
                <p>
                    Swipe left -1 minute
                </p>

                <p>
                    {VideoLinkButton("OKHDMzw9qno", "Swipe")}
                </p>

            </div>

            <div id="timer-rest" className={"guide-paragraph-low"}>
                <h3>3.4 Starting rest timer</h3>
                <p>
                    Sometimes it becomes necessary to manually start the rest timer; for this, the
                    application provides a separate button in the lower right corner of the timer
                    screen.
                </p>
                <p>
                    By pressing the rest button, you can start the rest timer for 5, 10, 15, 20 minutes
                    or any other period in minutes.
                </p>
                <p>
                    {VideoLinkButton("0Ds6UOvLqJc", "Rest timer")}
                </p>
            </div>

            <div id="timer-category-select" className={"guide-paragraph"}>
                <h3>3.5 Category selection</h3>
                <p>
                    On the main timer screen, you can select an activity category to structure the time.
                    The category can be changed while the timer is running.
                </p>
                <p>
                    For more details about categories see {AnchorLink("categories", "Categories")}
                </p>
                <p>
                    {VideoLinkButton("_366wpdODrc", "Category selection")}
                </p>
            </div>
        </div>
    )
}

export default Timer
import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {
    faBell, faCalendarAlt, faChartArea, faChartBar, faChartLine, faChartPie, faChartSimple,
    faCircle,
    faClock,
    faComment,
    faCopy, faMedal,
    faMoon,
    faMusic,
    faPalette, faShapes, faSitemap
} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cardIconItem = (icon: IconDefinition, text: String) => {
    return (
        <div className={"pt-2"}>
            <FontAwesomeIcon icon={icon} color={"#007bff"}/>
            <span
                style={{marginLeft: "1em"}}>{text}</span>
        </div>
    )
}

const Features = () => {
    return (
        <div className={"album py-5 bg-light"}>
            <div className={"text-center"}>
                <p className="display-6 pb-3">Features</p>
            </div>

            <div className={"container"}>

                <Row xs={2} md={2} className="g-4">

                    <Col>
                        <Card className={"card mb-4 box-shadow"}>
                            <Card.Body>

                                <Card.Title>
                                    Work Smart</Card.Title>
                                <Card.Text>
                                    Frequent short rest – that’s the key to the high effectiveness. Working without
                                    rest is ineffective.
                                </Card.Text>
                                <Card.Text as="div">
                                    {cardIconItem(faCircle, "Pomodoro technique with flexible configuration")}
                                    {cardIconItem(faClock, "Adjustable duration of periods – work / rest")}
                                    {cardIconItem(faCopy, "Cloud account, backups")}
                                    {cardIconItem(faPalette, "Different color schemes")}
                                    {cardIconItem(faMoon, "Dark theme")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className={"card mb-4 box-shadow"}>
                            <Card.Body>
                                <Card.Title>Rest</Card.Title>
                                <Card.Text>
                                    Don’t forget about making rest. Set the duration of work & rest periods and
                                    notifications will help you to make rest in time.
                                </Card.Text>
                                <Card.Text as="div">
                                    {cardIconItem(faBell, "Notifications when changing periods, separate " +
                                        "notification settings for work and rest timers")}
                                    {cardIconItem(faMusic, "Setting the melody for notification, silent mode")}
                                    {cardIconItem(faComment, "Tips, how to usefully take a rest")}
                                    {cardIconItem(faMedal, "Compete in pomodoro user ranking")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className={"card mb-4 box-shadow"}>
                            <Card.Body>
                                <Card.Title>Statistics</Card.Title>
                                <Card.Text>
                                    Watch your results and compare in dynamics.
                                </Card.Text>
                                <Card.Text as="div">
                                    {cardIconItem(faChartBar, "Time diagram")}
                                    {cardIconItem(faChartLine, "Rest Ratio")}
                                    {cardIconItem(faChartArea, "Rest acceptance rate")}
                                    {cardIconItem(faChartPie, "Category pie chart")}
                                    {cardIconItem(faChartSimple, "Rating improvements")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className={"card mb-4 box-shadow"}>
                            <Card.Body>
                                <Card.Title>Time management</Card.Title>
                                <Card.Text>
                                    It’s not enough to be busy, so are the ants. The question is, what are we busy
                                    about?
                                </Card.Text>
                                <Card.Text as="div">
                                    {cardIconItem(faShapes, "Categorizing your activity")}
                                    {cardIconItem(faChartLine, "Each category has its own statistics, " +
                                        "setting of periods, category color")}
                                    {cardIconItem(faSitemap, "Categories are hierarchical")}
                                    {cardIconItem(faCalendarAlt, "Day schedule activity screen")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
export default Features
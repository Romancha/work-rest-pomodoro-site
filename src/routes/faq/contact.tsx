import React from "react";
import {Accordion} from "react-bootstrap";

const Contact = () => {
    return (
        <div className="pm-header px-3 py-3 pb-md-4 mx-auto ">
            <h4 className="text-center">Contact</h4>
            <div>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How do I report a bug?</Accordion.Header>
                        <Accordion.Body>
                            If you found a bug, please
                            e-mail <a href={"mailto:wr@romancha.org"}>wr@romancha.org</a> with app version and
                            description of bug. <br/>
                            Thanks for the feedback - it helps to improve the app.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How do I suggest a feature or improvement?</Accordion.Header>
                        <Accordion.Body>
                            If you have any suggestions, ideas for improving the application, please e-mail <a
                            href={"mailto:wr@romancha.org"}>wr@romancha.org</a>.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How do I can help translate app?</Accordion.Header>
                        <Accordion.Body>
                            If you want to help with the translation of the application please follow the link
                            and become a translator - <a href={"https://crowdin.com/project/work-rest"}
                                                         target="_blank" rel="noopener noreferrer">crowdin work-rest</a>.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How do I contact support?</Accordion.Header>
                        <Accordion.Body>
                            Please e-mail <a href={"mailto:wr@romancha.org"}>wr@romancha.org</a> to contact
                            support.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Contact
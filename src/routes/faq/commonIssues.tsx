import React from "react";
import {Accordion} from "react-bootstrap";

const CommonIssues = () => {
    return (
        <div className="pm-header px-3 py-3 pb-md-4 mx-auto ">
            <h4 className="text-center">Common Issues</h4>
            <div>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Timers up notifications not working or not exact</Accordion.Header>
                        <Accordion.Body>
                            Unfortunately, some smartphone manufacturers are implementing very aggressive
                            optimizations for battery consumption, which affects apps that need to run in the
                            background and send notifications. If you do not receive notifications, please read
                            the article – <a href="https://dontkillmyapp.com/"
                                             target="_blank" rel="noopener noreferrer">dontkillmyapp.com</a> it
                            describes why this happens and how to fix this issue for a specific phone model.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default CommonIssues
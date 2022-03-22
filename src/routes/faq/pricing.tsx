import React from "react";
import {Accordion} from "react-bootstrap";

const Pricing = () => {
    return (
        <div className="pm-header px-3 py-3 pb-md-4 mx-auto ">
            <h4 className="text-center">Pricing</h4>
            <div>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Why are some of the application’s functions paid?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                This application is not developed by a team or a company – it is being developed
                                by
                                one developer during his own free time. The development of the application takes
                                a
                                lot of effort and time including some financial investments.
                            </p>
                            <p>
                                Therefore, to replenish
                                my strength and support the application, you can buy coffee or any candies in
                                the application.
                            </p>
                            <p>
                                I will be very grateful for any purchase and all the additional
                                functions of the application will open to you.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What features are paid?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                <ul>
                                    <li>Synchronization of data with the cloud, linking to a google account</li>
                                    <li>Data backup</li>
                                    <li>Ability to view, edit, and delete activities</li>
                                    <li>Create an unlimited number of categories</li>
                                    <li>Dark theme</li>
                                    <li>Keep screen on</li>
                                    <li>Daily reminders</li>
                                    <li>More background sounds</li>
                                    <li>No ads</li>
                                </ul>
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Pricing
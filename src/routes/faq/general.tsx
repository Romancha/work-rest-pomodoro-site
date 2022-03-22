import React from "react";
import {Accordion} from "react-bootstrap";
import {Link} from "react-router-dom";

const General = () => {
    return (
        <div className="pm-header px-3 pb-md-4 mx-auto ">
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Where learn more about App?</Accordion.Header>
                    <Accordion.Body>
                        Read <Link to={"/guide"} target="_blank" rel="noopener noreferrer">full reference guide</Link>.
                        If you still have any questions, contact me.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What platform is supported?</Accordion.Header>
                    <Accordion.Body>
                        Android app is currently the only supported platform.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default General
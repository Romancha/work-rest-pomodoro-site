import React from "react";
import {Button, Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGooglePlay} from "@fortawesome/free-brands-svg-icons";

const FlexiblePomodoro = () => {
    return (
        <div className={"pb-5"}>
            <div className="pm-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-3">Flexible Pomodoro Timer</h1>
                <p className={"text-muted"}>
                    Work smart. Have rest in time.
                </p>
                <p className="lead">
                    Work & Rest combines pomodoro techniques with flexible configuration, task categories and
                    statistics, thereby you will be productive, focused and healthy.
                </p>
                <Button target={"_blank"}
                        href={"https://play.google.com/store/apps/details?id=org.romancha.workresttimer"}
                        variant={"primary"}>
                    <FontAwesomeIcon icon={faGooglePlay}/>
                    <span style={{marginLeft: "1em"}}>Download on Play Store</span>
                </Button>
            </div>

            <div className={"container px-5"}>
                <Image src={"/screenshot/wr_screen_4k_crop.png"} fluid={true}/>
            </div>
        </div>
    )
}

export default FlexiblePomodoro
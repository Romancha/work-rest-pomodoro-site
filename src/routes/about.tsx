import React from "react";
import {Image} from "react-bootstrap";

export default function About() {
    return (
        <main style={{padding: "1rem 0"}}>
            <div className={"pb-5"}>
                <div className="pm-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-3">About</h1>
                </div>

                <div className={"container g-4 lead"}>
                    <div>
                        <p>
                            Hi, my name is Roman. I am the only one developer of the Work & Rest application that I
                            develop
                            in my
                            own time.
                        </p>

                        <p>
                            The app has been designed to allow flexible configuration of the Pomodoro Technique and
                            tracking the time spent on certain tasks.
                        </p>

                        <p>
                            Be productive, healthy and don't forget to take breaks.
                        </p>
                    </div>

                    <div className={"avatar-container py-3"}>

                        <Image src={"/screenshot/avatar.webp"} style={{maxHeight: "60px"}}/>

                        <div className={"px-3"} style={{fontSize: "0.8em"}}>

                            <div className={"text-muted"}>
                                Founder
                            </div>
                            <div>Roman Makarskiy</div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}
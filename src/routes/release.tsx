import React from "react";
import {Card} from "react-bootstrap";
import {faRocket, faBugSlash, faStar, faBroom} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {ReleaseCard} from "./release/releaseCard";
import ReleasesData from "./release/releaseData";

const drawFeatures = (icon: IconDefinition, title: String, features: Array<String>) => {
    if (features.length > 0) {
        return (
            <div>
                <FontAwesomeIcon icon={icon} color={"#007bff"} className={"pe-1"}/>
                <span className={"h6"}>{title}:</span>
                <ul className={"pd-4"}>
                    {features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            </div>
        )
    }
    return ("")
}

const drawReleaseCard = (card: ReleaseCard) => {
    return (
        <Card className={"card mb-4 box-shadow"}>
            <Card.Header>{card.date}</Card.Header>
            <Card.Body>
                <Card.Title>v. {card.version}</Card.Title>
                <Card.Text as={"div"}>
                    {drawFeatures(faRocket, "New", card.newFeatures)}
                    {drawFeatures(faStar, "Improved", card.improvements)}
                    {drawFeatures(faBugSlash, "Fixed", card.fixedBugs)}
                    {drawFeatures(faBroom, "Cleanup", card.cleanups)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default function Release() {
    return (
        <main style={{padding: "1rem 0"}}>

            <div className={"pb-5"}>
                <div className="pm-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-3">Release Notes</h1>
                    <p className="lead">
                        You have any suggestions or bug report? <br/>
                        I’d love to hear from you - contact me at <a
                        href={"mailto:wr@romancha.org"}>wr@romancha.org</a>.
                    </p>
                </div>

                <div className={"container g-4"}>
                    {ReleasesData.map(release => (drawReleaseCard(release)))}
                </div>
            </div>

        </main>
    );
}
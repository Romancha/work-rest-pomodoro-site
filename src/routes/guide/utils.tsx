import React from "react";
import {Button, Image} from "react-bootstrap";
import {AnimateConfig, easeOutQuad, Scrollchor} from "react-scrollchor";

const mIconColor = "#007bff"

const mVideoLinkButton = (videoId: String, title: String) => {
    return (
        <Button href={"https://www.youtube.com/watch?v=" + videoId}
                target="_blank" rel="noopener noreferrer"
                variant={"outline-primary"}>Watch "{title}" demo video</Button>
    )
}

const mScreenshot = (fileName: String) => {
    const scr = "/screenshot/" + fileName

    return (
        <div className={"text-center"}>
            <Image src={scr} fluid={true}
                   style={{maxHeight: "500px"}}/>
        </div>
    )
}

const offsetAnimate: AnimateConfig = {
    offset: -100,
    duration: 400,
    easing: easeOutQuad,
};

const toAnchor = (id: String, title: String) => {
    return (
        <Scrollchor to={"#" + id.toString()} className="anchor-link" animate={offsetAnimate}>{title}</Scrollchor>
    )
}

export const IconColor = mIconColor
export const VideoLinkButton = mVideoLinkButton
export const Screenshot = mScreenshot
export const AnchorLink = toAnchor
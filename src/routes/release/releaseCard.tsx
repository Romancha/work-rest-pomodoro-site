import React from "react";

type mReleaseCard = {
    version: String
    date: String
    newFeatures: Array<String>
    fixedBugs: Array<String>
    improvements: Array<String>
    cleanups: Array<String>
}

export type ReleaseCard = mReleaseCard
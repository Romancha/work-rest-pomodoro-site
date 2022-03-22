import React from "react";

import Content from "./guide/content"
import Purpose from "./guide/purpose";
import Features from "./guide/features"
import Timer from "./guide/timer"
import Categories from "./guide/categories";
import Activities from "./guide/activities";
import Stats from "./guide/stats";
import Settings from "./guide/settings";
import Pro from "./guide/pro";

import './guide/contentCounter.css';

export default function Guide() {
    return (
        <main style={{padding: "1rem 0"}}>

            <div className={"pb-5"}>
                <div className="pm-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-3">Full Reference Guide</h1>
                </div>

                <div className={"container g-4"}>

                    <Content/>

                    <Purpose/>
                    <Features/>
                    <Timer/>
                    <Categories/>
                    <Activities/>
                    <Stats/>
                    <Settings/>
                    <Pro/>
                </div>
            </div>

        </main>
    );
}
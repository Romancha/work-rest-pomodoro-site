import React from "react";
import FlexiblePomodoro from "./home/flexiblePomodoro";
import Features from "./home/features";
import Purpose from "./home/purpose";

export default function Home() {
    return (
        <main style={{padding: "1rem 0"}}>

            <FlexiblePomodoro/>
            <Features/>
            <Purpose/>

        </main>
    );
}
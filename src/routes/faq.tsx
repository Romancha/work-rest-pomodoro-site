import React from "react";
import General from "./faq/general";
import CommonIssues from "./faq/commonIssues";
import Contact from "./faq/contact";
import Pricing from "./faq/pricing";

export default function Faq() {
    return (
        <main style={{padding: "1rem 0"}}>

            <div className={"pb-5"}>
                <div className="pm-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-3">FAQs</h1>
                </div>

                <General/>
                <CommonIssues/>
                <Contact/>
                <Pricing/>

            </div>
        </main>
    );
}
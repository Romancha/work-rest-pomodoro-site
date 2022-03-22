import React from "react";
import {AnchorLink} from "./utils";


const Content = () => {
    return (
        <div className={"pb-5 content-counter"}>
            <h1>Content</h1>
            <ol>
                <li>{AnchorLink("purpose", "Purpose of the application")}</li>
                <li>{AnchorLink("features", "Application features")}</li>
                <li>
                    {AnchorLink("timer", "Timer")}
                    <ol>
                        <li>{AnchorLink("timer-description", "Timer Description")}</li>
                        <li>{AnchorLink("pomodoro-technique", "Pomodoro Technique")}</li>
                        <li>{AnchorLink("timer-adj", "Quick adjustment of the timer")}</li>
                        <li>{AnchorLink("timer-rest", "Starting rest timer")}</li>
                        <li>{AnchorLink("timer-category-select", "Category selection")}</li>
                    </ol>
                </li>
                <li>
                    {AnchorLink("categories", "Categories")}
                    <ol>
                        <li>{AnchorLink("categories-description", "Description of categories")}</li>
                        <li>{AnchorLink("category-controls", "Category controls")}</li>
                        <li>{AnchorLink("category-hierarchy", "Category hierarchy")}</li>
                    </ol>
                </li>
                <li>
                    {AnchorLink("activities", "Activities")}
                    <ol>
                        <li>{AnchorLink("activities-description", "Description of activities")}</li>
                        <li>{AnchorLink("activity-controls", "Activity controls")}</li>
                    </ol>
                </li>
                <li>
                    {AnchorLink("stats", "Statistics")}
                    <ol>
                        <li>{AnchorLink("stats-description", "Description of statistics")}</li>
                        <li>
                            {AnchorLink("stats-diagrams", "Diagrams")}
                            <ol>
                                <li>{AnchorLink("stat-time", "Time diagram")}</li>
                                <li>{AnchorLink("stat-rest-ratio", "Rest Ratio")}</li>
                                <li>{AnchorLink("stat-rest-accept-rate", "Rest acceptance rate")}</li>
                                <li>{AnchorLink("stat-category", "Category pie chart")}</li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li>
                    {AnchorLink("app-settings", "Application settings")}
                    <ol>
                        <li>
                            {AnchorLink("app-settings-account", "Account")}
                            <ol>
                                <li> {AnchorLink("app-settings-backup", "Backup data")}</li>
                            </ol>
                        </li>
                        <li>
                            {AnchorLink("app-settings-long-rest", "Long Rest (Pomodoro Technique)")}
                        </li>
                        <li>{AnchorLink("app-settings-daily-reminder", "Daily reminder")}</li>
                        <li>
                            {AnchorLink("app-settings-notifications", "Notifications")}
                            <ol>
                                <li>{AnchorLink("app-settings-notifications-an-8",
                                    "Setting up notifications on Android 8.0+")}
                                </li>
                                <li>{AnchorLink("app-settings-notifications-up-to-an-8",
                                    "Setting up notifications on Android versions up to 8.0")}
                                </li>
                            </ol>
                        </li>
                        <li>
                            {AnchorLink("app-settings-general", "General settings")}
                            <ol>
                                <li>{AnchorLink("app-settings-auto-accept", "Auto accept")}</li>
                                <li>{AnchorLink("app-settings-keep-screen-on", "Keep screen on")}</li>
                                <li>{AnchorLink("app-settings-themes", "Themes")}</li>
                                <li>{AnchorLink("app-settings-dark-theme", "Dark theme")}</li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li>
                    {AnchorLink("app-pro", "Application PRO version")}
                    <ol>
                        <li>{AnchorLink("app-pro-why",
                            "Why are some of the application’s functions paid?")}
                        </li>
                        <li>{AnchorLink("app-pro-features", "List of PRO Features")}</li>
                    </ol>
                </li>
            </ol>
        </div>
    );
}

export default Content
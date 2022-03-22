import React from "react";
import {Col, Row} from "react-bootstrap";
import {AnchorLink, Screenshot, VideoLinkButton} from "./utils";

const Settings = () => {
    return (
        <div id="app-settings" className={"guide-paragraph"}>
            <h2>7. Application settings</h2>
            <div id="app-settings-account" className={"guide-paragraph-low"}>
                <h3>7.1 Account</h3>

                <div className={"guide-paragraph-low"}>
                    <Row>
                        <Col>
                            <p>
                                Starting from app version 3.0.0, app account has been added. Login to your
                                account is done through your Google account. Authorization includes cloud
                                data
                                synchronization, which allows the user to use the application on different
                                devices and not lose data when reinstalling the application or changing
                                devices.
                            </p>
                        </Col>
                        <Col>
                            {Screenshot("instruction_settings_account.png")}
                        </Col>
                    </Row>
                </div>

                <div id="app-settings-backup">
                    <h4>7.1.1 Backup data</h4>

                    <p>
                        When using an app account, the backup is done automatically when internet is
                        available
                    </p>
                    <p>
                        Settings:
                    </p>
                    <p>
                        <ul>
                            <li>Cloud data sync – checkbox that allows you to enable or disable cloud data
                                sync.
                            </li>
                            <li>Force data recovery from the cloud – starts a full forced data
                                synchronization with the current account.
                            </li>
                            <li>Restore backup from Google Drive – restores a backup of the old format,
                                while all local data will be overwritten. Added to support the old way of
                                restoring backups that were made before the application version 3.0.0
                            </li>
                        </ul>
                    </p>
                </div>
            </div>

            <div id="app-settings-long-rest" className={"guide-paragraph-low"}>
                <h3>7.2 Long Rest (Pomodoro Technique)</h3>

                <p>
                    Each person may have their own convenient configuration of the Pomodoro technique, so
                    the application provides settings in order to adjust the number of sessions before a
                    long break and its duration.
                </p>
                <p>
                    Settings:
                </p>
                <p>
                    <ul>
                        <li>Enable Long Rest – checkbox to enable or disable the Pomodoro technique when
                            using the timer.
                        </li>
                        <li>Sessions before a long rest – the number of sessions (pomodoros) before a long
                            break. A successful session is considered the completion of the “Work” period.
                            The default is 4.
                        </li>
                        <li>Long rest duration – duration in minutes, default value is 20.</li>
                    </ul>
                </p>
            </div>

            <div id="app-settings-daily-reminder" className={"guide-paragraph-low"}>
                <h3>7.3 Daily reminder</h3>

                <div>
                    <p>
                        One of the main purposes of the app is to remind people to take rests during
                        work, but it turns out many people immediately start work at the beginning
                        of the day and forget to turn on the timer. To solve this problem, a daily
                        reminder was added, which can be flexibly adjusted to the beginning of your
                        working day.
                    </p>
                    <p>
                        Settings:
                    </p>
                    <p>
                        <ul>
                            <li>Enable daily reminder – a checkbox that enables or disables the
                                daily reminder to use the application.
                            </li>
                            <li>Reminder time – the time at which a reminder will come in the form
                                of a notification. The default is 09:00 AM.
                            </li>
                            <li>Days of the week – select the days of the week on which the reminder
                                will come. The default is weekdays.
                            </li>
                        </ul>
                    </p>

                    <p>
                        {VideoLinkButton("Eok-wI14vOE", "Daily reminder")}
                    </p>
                </div>
            </div>

            <div id="app-settings-notifications" className={"guide-paragraph-low"}>
                <h3>7.4 Notifications</h3>

                <div id="app-settings-notifications-an-8" className={"guide-paragraph-low"}>
                    <h4>7.4.1 Setting up notifications on Android 8.0+</h4>

                    <p>
                        Starting from android 8.0, notifications are managed entirely through the
                        notification categories (channels), this is a setting at the level of the Android OS
                        itself, which allows more flexible customization of application notifications.
                    </p>

                    <p>
                        {VideoLinkButton("TThGvol-L2g", "Notification android 8+")}
                    </p>

                    <p>
                        The application has several categories of notifications:
                    </p>
                    <p>
                        <ul>
                            <li>Work timer – a notification signaling the end of a timer with the “Work”
                                type;
                            </li>
                            <li>Rest timer – notifications signaling the end of the “Rest” type timer;</li>
                            <li>Daily reminder – a notification that is triggered when you use the
                                application every day (see {AnchorLink("app-settings-daily-reminder",
                                    "Daily reminder")}).
                            </li>
                        </ul>
                    </p>
                    <p>
                        For example, you can set different tones for the rest timer and the work timer.
                    </p>
                    <p>
                        Additional settings:
                    </p>
                    <p>
                        <ul>
                            <li>Long notification – when this checkbox is enabled, the short melody will be
                                played again until the notification is turned off.
                            </li>
                        </ul>
                    </p>
                </div>

                <div id="app-settings-notifications-up-to-an-8" className={"guide-paragraph-low"}>
                    <h4>7.4.2 Setting up notifications on Android versions up to 8.0</h4>

                    <p>
                        <ul>
                            <li>Notification ringtone – Select a ringtone for app notifications.</li>
                            <li>Long notification – when this checkbox is enabled, the short melody will be
                                played again until the notification is turned off.
                            </li>
                            <li>Silent mode – if the checkbox is enabled, the notification will be received
                                without sound.
                            </li>
                            <li>Vibration – Activate or deactivate vibration for notifications.</li>
                        </ul>
                    </p>

                    <p>
                        {VideoLinkButton("O7duIQtrLNQ", "Notification android up to 8.0")}
                    </p>
                </div>
            </div>

            <div id="app-settings-general" className={"guide-paragraph-low"}>
                <h3>7.5 General settings</h3>

                <div id="app-settings-auto-accept" className={"guide-paragraph-low"}>
                    <h4>7.5.1 Auto accept</h4>
                    <p>
                        When the timer expires, the next step will start automatically.
                    </p>
                </div>

                <div id="app-settings-keep-screen-on" className={"guide-paragraph-low"}>
                    <h4>7.5.2 Keep screen on</h4>
                    <p>
                        When the “Screen always on” function is enabled, the phone screen will not be locked
                        when the user is idle. Useful if you want to always see the timer in front of your
                        eyes.
                    </p>
                </div>

                <div id="app-settings-themes" className={"guide-paragraph-low"}>
                    <h4>7.5.3 Themes</h4>
                    <p>
                        The application contains 16 different color themes. Choose the style that suits you.
                    </p>
                    <p>
                        {VideoLinkButton("DCWNfNJrxCg", "General settings")}
                    </p>
                </div>

                <div id="app-settings-dark-theme" className={"guide-paragraph-low"}>
                    <h4>7.5.4 Dark theme</h4>
                    <p>
                        The app supports dark theme. The dark theme can be used with a variety of color
                        themes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Settings
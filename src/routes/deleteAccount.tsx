import React from "react";

export default function DeleteAccount() {
    return (
        <main style={{padding: "1rem 0"}}>
            <div className={"pb-5"}>
                <div className="pm-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-3">Account deletion</h1>
                </div>

                <div className={"container g-4 lead"}>
                    <div>
                        <p>
                            If you want to delete your account in Work&Rest, please send an email to <a
                            href={"mailto:wr@romancha.org"}>wr@romancha.org</a> with the subject "Delete account" and
                            describe what you want to delete:
                            <p/>
                            <ol>
                                <li>
                                    All account data - account, backups: categories, activities, pomodoros settings
                                </li>
                                <li>
                                    Just backups: categories, activities, pomodoros settings. You account will be saved.
                                </li>
                            </ol>
                            We will delete your data within 14 days and inform you by email.
                        </p>
                        <p>
                            <b>Please note that this action cannot be undone.</b>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
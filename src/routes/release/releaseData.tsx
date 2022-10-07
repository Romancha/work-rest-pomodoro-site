import {ReleaseCard} from "./releaseCard";

const ReleasesData: Array<ReleaseCard> = [
    {
        version: "3.3.9",
        date: "Feb 21, 2022",
        newFeatures: [],
        improvements: [],
        fixedBugs: [
            "User rating is not calculated correctly",
        ],
        cleanups: []
    },
    {
        version: "3.3.8",
        date: "Feb 3, 2022",
        newFeatures: ["Added user rating. Now you can compete in pomodoro ranking!"],
        improvements: [],
        fixedBugs: [
            "Diff account sync not working",
            "Notification on android 12",
            "Incorrect activity completion",
            "Bug when subcategories were created in main categories"
        ],
        cleanups: []
    },
    {
        version: "3.2.2",
        date: "Dec 25, 2021",
        newFeatures: [],
        improvements: [],
        fixedBugs: [
            "Application crash",
            "Bug due to which the pro version of the application could be determined incorrectly"
        ],
        cleanups: []
    },
    {
        version: "3.2.1",
        date: "Dec 18, 2021",
        newFeatures: ["Tomato technique description"],
        improvements: ["On timer screen now shows the category color", "Background sound icon now shows on / off status"],
        fixedBugs: [],
        cleanups: []
    },
    {
        version: "3.1.7",
        date: "Nov 24, 2021",
        newFeatures: ["Timer background sound"],
        improvements: ["Android 12 support"],
        fixedBugs: ["App crash"],
        cleanups: []
    },
    {
        version: "3.0.4",
        date: "Oct 7, 2021",
        newFeatures: [],
        improvements: ["Close app on back pressed"],
        fixedBugs: [],
        cleanups: []
    },
    {
        version: "3.0.2",
        date: "Apr 15, 2021",
        newFeatures: [],
        improvements: [],
        fixedBugs: ["Timer was reset when pressing the \"Back\" button", "Typo in translation"],
        cleanups: []
    },
    {
        version: "3.0.1",
        date: "Jan 26, 2021",
        newFeatures: [
            "Cloud account with sync",
            "Activity screen in the form of a daily schedule",
            "Daily reminder",
            "Automatic start of the next timer",
            "Ability to set different sound to work/rest timer",
            "Swipe for add/minus 1 min to timer",
            "Colorized categories",
            "Added timer actions in notification bar"
        ],
        improvements: ["Ability to skip tutorial"],
        fixedBugs: [],
        cleanups: []
    },
    {
        version: "18.0.19",
        date: "Jun 18, 2020",
        newFeatures: [
            "Keep screen on"
        ],
        improvements: [
            "The restriction on checking the uniqueness of the category name has been relaxed. " +
            "Now the uniqueness check is carried out only within current level of a category",
            "Changed the default work time to 25 minutes.",
            "Improved German translation",
            "Category card now shows the duration of work and rest periods"
        ],
        fixedBugs: [],
        cleanups: ["Removed the default timer setting - mislead users. Timers need to be changed through categories"]
    },
    {
        version: "1.2.1",
        date: "Jan 19, 2020",
        newFeatures: [],
        improvements: ["Changed the notification settings window in Android Oreo. " +
        "Now the application notification settings window is opened, not a specific channel."],
        fixedBugs: [],
        cleanups: []
    },
    {
        version: "1.2.0",
        date: "Nov 4, 2019",
        newFeatures: [],
        improvements: ["Dark theme"],
        fixedBugs: ["Notification settings bugfix"],
        cleanups: []
    },
    {
        version: "1.1.9",
        date: "Feb 22, 2019",
        newFeatures: ["Vibration setting"],
        improvements: ["Increased the list of ringtones for selecting notifications",
            "Added localization for French, German, Czech, Spanish"],
        fixedBugs: [],
        cleanups: []
    },
    {
        version: "1.1.8",
        date: "Oct 9, 2018",
        newFeatures: [],
        improvements: [
            "Ability to refresh statistics by swipe"
        ],
        fixedBugs: [],
        cleanups: []
    },
    {
        version: "1.1.7",
        date: "Sep 9, 2018",
        newFeatures: [],
        improvements: [
            "Increased the speed of statistics generation"
        ],
        fixedBugs: ["App crash"],
        cleanups: []
    },
    {
        version: "1.1.5",
        date: "Aug 30, 2018",
        newFeatures: [],
        improvements: [
            "Support Android One notification channels"
        ],
        fixedBugs: [],
        cleanups: []
    },
    {
        version: "1.1.0",
        date: "May 14, 2018",
        newFeatures: ["App release, enjoy!"],
        improvements: [],
        fixedBugs: [],
        cleanups: []
    }
]

export default ReleasesData
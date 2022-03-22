import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faCirclePlus, faCoffee, faPalette,
    faPen,
    faStopwatch,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import {IconColor, VideoLinkButton} from "./utils";

const Categories = () => {
    return (
        <div id="categories" className={"guide-paragraph"}>
            <h2>4. Categories</h2>

            <div id="categories-description" className={"guide-paragraph-low"}>
                <h3>4.1 Description of categories</h3>
                <p>
                    Categories allow you to administer time management more efficiently. You can create
                    and use categories – whether you need them for specific tasks for work, hobbies,
                    sports, or reading a book. You will be able to keep track of when and what you were
                    doing, how much time was spent on a specific day, week or month on a specific
                    activity.
                </p>
                <p>
                    The Categories screen is a list of categories with the category name, information on the
                    duration of work / rest periods for that category, and controls.
                </p>
            </div>

            <div id="category-controls" className={"guide-paragraph-low"}>
                <h3>4.2 Category controls</h3>
                <div className={"ps-5"}>
                    <p>
                        <FontAwesomeIcon icon={faCirclePlus} color={IconColor}/> - Create a category. When
                        creating a category, you must specify the category name, which must be unique at one
                        level of the category hierarchy.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPen} color={IconColor}/> - Edit category.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faTrash} color={IconColor}/> - Remove category. Please note
                        that deleting the standard Work category is not possible, and deleting a category
                        deletes all nested categories.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faChartLine} color={IconColor}/> - View statistics for the
                        selected category. Statistics includes information about all contained categories in
                        the hierarchy.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPalette} color={IconColor}/> - Category color.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faStopwatch} color={IconColor}/> - The duration of the work
                        period in minutes.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCoffee} color={IconColor}/> - Duration of the rest period
                        in minutes.
                    </p>
                </div>
                <p>
                    {VideoLinkButton("M9TZYnKRxuE", "Category controls")}
                </p>
            </div>

            <div id="category-hierarchy" className={"guide-paragraph"}>
                <h3>4.3 Category hierarchy</h3>
                <p>
                    Categories support a hierarchical structure with no restrictions on the nesting level.
                    Hierarchy allows you to structure your tasks more competently and conveniently. For
                    example, you can create a specific project in the “Work” category, which will contain
                    the tasks “Communicating with clients”, “Parsing incoming mail”, “Task №197” and then
                    track statistics and time spent on these tasks.
                </p>
                <p>
                    The category main screen contains the highest level of categories. To go to a specific
                    category, you must click on the category card. When creating a child category, by
                    default, the values from the parent’s category are filled in – color, duration of work
                    and rest periods.
                </p>
            </div>
        </div>
    )
}

export default Categories
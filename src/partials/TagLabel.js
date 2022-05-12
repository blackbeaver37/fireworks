import React from "react";
import "stylesheets/partials/TagLabel.css";

const TagLabel = ({ tagName }) => {
    var innerText = "";
    var color = "";
    var background = "";

    if (tagName === undefined) {
        innerText = "none";
        color = "white";
        background = "gray";
    } else if (tagName === "React") {
        innerText = tagName;
        color = "#202429";
        background = "#3FE0FC";
    } else if (tagName === "ReactJS") {
        innerText = tagName;
        color = "#202429";
        background =
            "linear-gradient(135deg, #3FE0FC 0 57.5%, #F7DF1B 67.5% 100%)";
    } else {
        innerText = tagName;
        color = "black";
        background = "white";
    }

    return (
        <div className="tagLabel-div" style={{ color, background }}>
            {innerText}
        </div>
    );
};

export default TagLabel;

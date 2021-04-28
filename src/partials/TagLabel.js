import React from "react";

const TagLabel = ({ tagName }) => {
    if (tagName === undefined) {
        return `none`;
    }

    return `${tagName} `;
};

export default TagLabel;

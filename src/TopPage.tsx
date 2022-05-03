import React, { useState, } from "react";
import "./style/css/TopPage.css";

const TopPage: React.FC = () => {
    const [showKeywordInput, setShowKeywordInput] = useState(true);
    return (
        <div id="top-page">
            <h1>Top Page</h1>
            <KeywordInput display={showKeywordInput} />
        </div>
    )
}

type props = {
    display: boolean;
};
const KeywordInput: React.FC<props> = (props) => {
    if (!props.display) return null;
    return (
        <div id="keyword-input">
            <input type="text" />
        </div>
    )
}


export default TopPage;

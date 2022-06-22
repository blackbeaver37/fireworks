import axios from "axios";
import { useEffect, useState } from "react";
import LanguageIcon from "components/LanguageIcon";
import { block, title, languageSpan, date } from "styles/RepoBlock.module.scss";
import TagLabel from "components/TagLabel";

const RepoBlock = ({ repo }) => {
    const [initTag, setInitTag] = useState(false);
    const [tag, setTag] = useState([]);

    const { html_url, name, language, created_at, updated_at, full_name } =
        repo;

    const formattingDate = (rawDateStr) => {
        var date = new Date(rawDateStr);
        var year = date.getFullYear();
        var month = 1 + date.getMonth();
        month = month >= 10 ? month : "0" + month;
        var day = date.getDate();
        day = day >= 10 ? day : "0" + day;
        var hour = date.getHours();
        hour = hour >= 10 ? hour : "0" + hour;
        var minutes = date.getMinutes();
        minutes = minutes >= 10 ? minutes : "0" + minutes;
        var seconds = date.getSeconds();
        seconds = seconds >= 10 ? seconds : "0" + seconds;

        return `${year}/${month}/${day} ${hour}:${minutes}:${seconds}`;
    };

    const getTag = async () => {
        await axios
            .get(
                `https://raw.githubusercontent.com/${full_name}/master/__untag.json`
            )
            .then(({ data: { tag } }) => {
                setTag(tag);
                setInitTag(true);
            });
    };

    useEffect(() => {
        getTag();
    }, []);

    return (
        <>
            <div
                className={block}
                onClick={() => window.open(html_url, "_blank")}
            >
                <span className={title}>{name}</span>
                <span className={languageSpan}>
                    <LanguageIcon language={language} />{" "}
                    {language ? language : "None"}
                </span>
                <span className={date}>
                    (Create)
                    {formattingDate(created_at)} (Update)
                    {formattingDate(updated_at)}
                </span>
                {initTag ? (
                    tag.map((element, index) => (
                        <TagLabel key={index} tagName={element} />
                    ))
                ) : (
                    <TagLabel />
                )}
                <a>Go Github Repository</a>
            </div>
        </>
    );
};

export default RepoBlock;

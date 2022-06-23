import { header } from "styles/PageHeader.module.scss";

const PageHeader = ({ title }) => {
    return <header className={header}>{title}</header>;
};

export default PageHeader;

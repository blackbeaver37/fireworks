import Link from "next/link";
import { footer } from "styles/PageFooter.module.scss";

const PageFooter = ({ href, name }) => {
    return (
        <Link href={href}>
            <span className={footer}>{name}</span>
        </Link>
    );
};

export default PageFooter;

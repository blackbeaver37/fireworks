import { useRouter } from "next/router";
import {
    header__0,
    header__1,
    header__1__span,
} from "styles/PageHeader.module.scss";
import urls from "urls";

const PageHeader = ({ title, type }) => {
    const router = useRouter();
    const goHome = () => {
        router.push(urls.home);
    };

    if (type === 0) {
        return <header className={header__0}>{title}</header>;
    } else if (type === 1) {
        return (
            <>
                <header className={header__1} onClick={goHome}>
                    Fireworks
                </header>
                <span className={header__1__span}>{title}</span>
            </>
        );
    }
};

export default PageHeader;

import { block, blockTitle, blockDesc } from "styles/WorksBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import urls from "urls";

const WorksBlock = ({ work }) => {
    const { id, title, desc, img } = work;

    return (
        <Link href={urls.works + "/" + id}>
            <div className={block}>
                <p className={blockTitle}>{title}</p>
                <Image src={img} width={400} height={240} />
                <p className={blockDesc}>{desc}</p>
            </div>
        </Link>
    );
};

export default WorksBlock;

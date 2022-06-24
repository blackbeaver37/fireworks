import { block, blockTitle, blockDesc } from "styles/WorksBlock.module.scss";
import Image from "next/image";
import stemfont from "../public/worksImg/Stemfont_img_0.png";

const WorksBlock = ({ work }) => {
    const { title, desc, img } = work;
    console.log(stemfont);

    return (
        <div className={block}>
            <p className={blockTitle}>{title}</p>
            <Image src={img} width={400} height={240} />
            <p className={blockDesc}>{desc}</p>
        </div>
    );
};

export default WorksBlock;

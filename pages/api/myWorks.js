const allWorks = [
    {
        title: "Stemfont",
        desc: "Stemfont's desc",
        img: "/worksImg/Stemfont_img_0.png",
    },
    {
        title: "1",
        desc: "1's desc",
        img: "/worksImg/Stemfont_img_0.png",
    },
    {
        title: "2",
        desc: "2's desc",
        img: "/worksImg/Stemfont_img_0.png",
    },
];

export default (req, res) => {
    res.status(200).json({ allWorks });
};

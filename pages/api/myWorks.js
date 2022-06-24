const allWorks = [
    {
        id: 0,
        title: "Stemfont",
        desc: "Stemfont's desc",
        img: "/worksImg/Stemfont_img_0.png",
    },
    {
        id: 1,
        title: "1",
        desc: "1's desc",
        img: "/worksImg/Stemfont_img_0.png",
    },
    {
        id: 2,
        title: "2",
        desc: "2's desc",
        img: "/worksImg/Stemfont_img_0.png",
    },
];

export default (req, res) => {
    res.status(200).json({ allWorks });
};

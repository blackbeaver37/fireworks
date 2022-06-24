export default (req, res) => {
    const {
        query: { multiIds },
    } = req;

    res.status(200).json({ id: multiIds[0] });
};

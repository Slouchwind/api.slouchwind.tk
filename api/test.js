export default function handler(req, res) {
    const { name } = req.query;
    res.status(200).send("<img src=\"https://static-qn.drblack-system.com/dbs-art/2021/02/293a4339059e60b5_1_post.jpeg?imageMogr2/gravity/Center/thumbnail/570x\">");
}
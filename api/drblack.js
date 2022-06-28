module.exports = (req, res) => {
    var { time, date } = req.query;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "image");
    res.send("<img src=\"https:\/\/static-qn.drblack-system.com/dbs-art/2021/05/1438918017c4b0f608_1_cover.jpg?imageMogr2/gravity/Center/thumbnail/570x\">");
    return;
};
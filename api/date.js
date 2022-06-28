var getTime = {
    new: {
        time: function () {
            let date = new Date();
            let h = date.getHours();
            if (h < 10) h = "0" + h;
            let m = date.getMinutes();
            if (m < 10) m = "0" + m;
            let s = date.getSeconds();
            if (s < 10) s = "0" + s;
            return h + ":" + m + ":" + s;
        },
        date: function () {
            let date = new Date();
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            if (m < 10) m = "0" + m;
            let d = date.getDate();
            if (d < 10) d = "0" + d;
            return y + "年" + m + "月" + d + "日";
        }
    }
}

module.exports = (req, res) => {
    var { time, date } = req.query;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    return res.json({ date_text: `${getTime.new.date()} ${getTime.new.time()}` });
};
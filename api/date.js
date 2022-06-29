var getDateText = {
    time: function (date) {
        let h = date.getHours();
        if (h < 10) h = "0" + h;
        let m = date.getMinutes();
        if (m < 10) m = "0" + m;
        let s = date.getSeconds();
        if (s < 10) s = "0" + s;
        return h + ":" + m + ":" + s;
    },
    date: function (date) {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        if (m < 10) m = "0" + m;
        let d = date.getDate();
        if (d < 10) d = "0" + d;
        return y + "年" + m + "月" + d + "日";
    }
}

module.exports = (req, res) => {
    var { date } = req.query;
    console.log(req.query);
    var ret = {};
    var dealDate;
    if (date === "") dealDate = new Date();
    else dealDate = new Date(Date.parse(date));
    dealDate.setHours(dealDate.getHours() + 8, dealDate.getMinutes(), dealDate.getSeconds() - 34);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    ret.date = {
        get: dealDate.getTime(),
        string: dealDate.toLocaleString()
    };
    ret.text = {
        date: `${getDateText.date(dealDate)} ${getDateText.time(dealDate)}`
    };
    return res.json(ret);
};
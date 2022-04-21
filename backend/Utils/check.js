const axios = require("axios");
const cheerio = require("cheerio");

async function checkUserExist(userId) {
    const request = axios.create({
        baseURL: "https://lostark.game.onstove.com/Profile/Character/",
    });

    const html = await request.get(encodeURI(userId));
    const $ = cheerio.load(html.data);

    try {
        const res = $("body").find(".profile-attention>span:nth-of-type(2)").text();

        if (res == "캐릭터명을 확인해주세요.")
            return false;
        else
            return true;
    } catch {
        return false;
    }
}

module.exports = {checkUserExist};
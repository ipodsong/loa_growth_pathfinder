const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const { acceptsEncodings } = require("express/lib/request");
const router = express.Router();

const request = axios.create({
    baseURL:"https://lostark.game.onstove.com/Profile/Character/"
})

router.get("/:char_id", async(req, res) => {
    let result = {};
    /* Cheerio 사용부분(eventless) */
    try {
        let html = await request.get(encodeURI(req.params.char_id));
        const $ = cheerio.load(html.data)

        // 아이템 레벨
        result['item_level'] = $("body").find(".level-info2__expedition").text().split('v.')[1];

        // 각인
        result['imprinting']=[]
        $("body").find(".profile-ability-tooltip>p").parent().parent().find("span").each(function(index, item){
            if ($(this).text() != undefined)
                result["imprinting"].push($(this).text())
        });

        // 특성
        result["feature"]=[]
        $("body").find(".profile-ability-battle>ul>li").each(function(index, item){
            let feature_name = $(this).find("span").first().text()
            let value = $(this).find("span").first().next().text()
            result["feature"].push([feature_name, value])
        })

        // 카드
        result["card"]=$("body").find(".card-effect li").last().find(".card-effect__title").text()

        // 전투레벨
        result['combat_level']=$("body").find(".level-info__item>span").last().text().split('.')[1]
    } catch (error) {
        console.log(error)
    }
    // puppeteer 사용부분(mouse over event)
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://lostark.game.onstove.com/Profile/Character/" + encodeURI(req.params.char_id))

        // 장비 강화, 품질, 트포작
        const items = await page.$$('div[class="profile-equipment__slot"] > div');
        for (let item of items) {
            await item.hover();
            const content = await page.content();
            const $ = cheerio.load(content);
            const item_info_list = $("body").find(".game-tooltip");

            try{
                let item_name = item_info_list.find(".NameTagBox").text();
                console.log(item_name)
            }
            catch{}

        }
        
        // 보석

        // 아바타

        // 스킬

        await browser.close();
    } catch (error) {
        console.log(error)
    }

    return res.json(result)

})

module.exports = router;

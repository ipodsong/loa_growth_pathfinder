const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");



async function getUserInfoFromLoaSite(userId) {
    const request = axios.create({
        baseURL: "https://lostark.game.onstove.com/Profile/Character/",
    });

    let result = {};

    // 전투정보실 사이트 긁어오기
    const html = await request.get(encodeURI(userId));
    const $ = cheerio.load(html.data);

    // Script 파일 가져오기
    const scripts = $("body").find(".profile-ability").find("script");
    const json = JSON.parse(
        scripts.html()
        .replace("$.Profile = ", "")
        .replace(";", "")
    );

    // html 파싱
    result = parseHtmlData(result, $);
    // json 파싱
    result = parseJsonData(result, json);
    
    //console.log(result);
    return result;
}

function parseHtmlData(result, $){
    try {
        // 아이템 레벨
        result['item_level'] = $("body").find(".level-info2__expedition").text().split('v.')[1];

        // 전투레벨
        result['combat_level']=$("body").find(".level-info__item>span").last().text().split('.')[1];

        // 각인
        result['engrave']=[]
        $("body").find(".profile-ability-tooltip>p").parent().parent().find("span").each(function(index, item){
            if ($(this).text() != undefined){
                let splitStr = $(this).text().split(" Lv. ");
                result["engrave"].push([splitStr[0], splitStr[1]]);
            }
        });

        // 특성
        result["battle"]=[]
        $("body").find(".profile-ability-battle>ul>li").each(function(index, item){
            let battle_name = $(this).find("span").first().text();
            let value = $(this).find("span").first().next().text();
            result["battle"].push([battle_name, value]);
        })        
    } catch (error) {
        console.log(error);
    }

    return result;
}

function parseJsonData(result, json){
    // 카드
    let cardList = [];
    let cardSet = json.CardSet;
    for(set in cardSet){
        for(detail in cardSet[set]){
            if (cardSet[set][detail].title != undefined){
                cardList.push(cardSet[set][detail].title);
            }
        }
    }
    result["card"] = cardList;

    // 보석
    let gemList = [];
    let gemSet = json.Equip;
    for(gem in gemSet){
        if(gem.indexOf('Gem') != -1){
            let gemName = gemSet[gem].Element_000.value
                                    .split('>')[2].split('<')[0];
            let GemFunc = gemSet[gem].Element_004.value.Element_001
                                    .replace("</FONT> " , "||").split('>')[1].split('||');
                     
            gemList.push([gemName, GemFunc[0], GemFunc[1]]);
        }
        
    }
    result["gem"] = gemList;

    // 트포작
    let tripodList = [];
    let tripodSet = json.Equip;
    for(tripod in tripodSet){
        if(tripod.indexOf('Gem') == -1 && getEquipType(tripod) == "equip"){
            let tempTripod = tripodSet[tripod].Element_008.value.Element_000.contentStr;
            for(el in tempTripod){
                const tempStr = tempTripod[el].contentStr
                                .replace("</FONT>] ", "||")
                                .replace(" <FONT COLOR='#73dc04'>", "||")
                                .split('>')[1]
                                .split('<')[0]
                                .split('||');
                tripodList.push([tempStr[0], tempStr[1], tempStr[2]]);
            }
        }
        
    }
    result["tripod"] = tripodList;

    // 아바타

    // 스킬

    // 장비 강화, 품질
    //// 아이템종류(...유물, 고대)/아이템 레벨/강화단계/품질/세트종류/세트레벨

    //돌

    return result;
}

function getEquipType(name){
    const equipNum = name.split('_')[1]*1; 

    if(equipNum <=5)
        return "equip";
    else if (equipNum <= 10)
        return "acc";
    else if (equipNum == 11)
        return "stone";
    else if (equipNum <= 22)
        return "avatar";
    else if (equipNum == 26)
        return "bracelet";

    return "unknown";
}

module.exports = {getUserInfoFromLoaSite};


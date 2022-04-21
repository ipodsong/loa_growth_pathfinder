const express = require("express");
const {getUserInfoFromLoaSite} = require("../Utils/parseUserInfo.js");
const {checkUserExist} = require("../Utils/check.js");
const router = express.Router();

router.get("/data", async(req, res) => {
    // req.query.charid -> user id
    // req.query.type -> 원하는 정보(all, equip, acc, gem, ...)
    try {
        // 유저 아이디 및 타입 파라미터로 넘겨받는지 체크
        if(req.query.charid == undefined) return res.status(500).send('charid is empty');
        if(req.query.type == undefined) return res.status(500).send('type is empty');

        // id 존재하는지 체크
        if(checkUserExist(req.query.charid)){
            // 임시적으로 모든 데이터만 보내게
            switch(req.query.type){
                case 'all':
                    const result = await getUserInfoFromLoaSite(req.query.id);
                    return res.json(result);
            }
            // 타입이 존재하지 않으면 error 반환
            return res.status(500).send(`type=${req.query.type} dose not exist`);
        }
        // 유저가 존재하지 않으면 error 반환
        else return res.status(500).send(`charid=${req.query.charid} not exist`);
    } catch (error) {
        return res.status(500).send(error);
    }
    
});

router.get("/state", (req, res) => {
    // req.query.charid -> user id
    // TODO: 언제 데이터가 갱신되었는지 return
    
    return res.json({"result" : "기능 구현중"});
});

/**
 * @swagger
 * /user?charid={캐릭터명}:
 *  get:
 *    summary: "유저 정보 DB에 업데이트"
 *    description: "공홈에서 새로 크롤링하여 DB에 신규 데이터 저장"
 *    tags: [User]
 *    parameters:
 *      - in: query
 *        name: id
 *        required: true
 *        description: "유저 아이디"
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: "업데이트 성공: true, 실패: false"
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                result:
 *                  type: object
 *                  example: true
 */
router.post("/setdb", async(req, res) => {
    //데이터 받아오기
    const result = await getUserInfoFromLoaSite(req.query.id);

    //DB에 저장
    //TODO: db 저장 기능

    //저장 결과 return
    return res.json({"result" : true});
})

module.exports = router;

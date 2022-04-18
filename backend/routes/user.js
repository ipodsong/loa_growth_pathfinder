const express = require("express");
const {getUserInfoFromLoaSite} = require("../Utils/parseUserInfo.js")
const router = express.Router();

router.get("/data", async(req, res) => {
    // req.query.charid -> user id
    // req.query.type -> 원하는 정보(equip, acc, gem, ...)
    // TODO: 원하는 데이터 제공
    
    return res.json({"result" : "기능 구현중"});
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

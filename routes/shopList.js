var router = require("express").Router();
var dbConfig = require("../util/dbconfig");
const multer = require('multer');//引入express模块
const fs = require('fs');//引入express模块
const path = require('path');//引入express模块



router.get("/queryByPage", function(req, res) {
  var sql = "select * from shop_list";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log("连接出错");
      return;
    } else {
      res.send({ data });
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
});


//图片上传
  router.post("/shopPic/upload", multer({ dest: "upload" }).single("file"), (req, res) => {
    console.log(req.file); //读取文件路径
    fs.readFile(req.file.path, (err, data) => {
      //如果读取失败
      if (err) {
        return res.send("上传失败");
      } //如果读取成功 //声明图片名字为时间戳和随机数拼接成的，尽量确保唯一性
      let time =
        Date.now() +
        parseInt(Math.random() * 888) +
        parseInt(Math.random() * 2213); //拓展名
      let extname = req.file.mimetype.split("/")[1]; //拼接成图片名
      let keepname = time + "." + extname; //三个参数 //1.图片的绝对路径 //2.写入的内容 //3.回调函数
      fs.writeFile(
        path.join(__dirname, "../public/img/" + keepname),
        data,
        err => {
          if (err) {
            return res.send("写入失败");
          }
          res.send({ err: 0, msg: "上传ok", data: "/img/" + keepname });
        }
      );
    });
  });

  router.post("/addShop", (req, res) => {
    const shopInfo = req.body
    console.log(req.body);
    const {shopName,shopType,shopPrice,shopDes,creater,shopPic} = shopInfo
         const insertshopInfo =`insert into shop_list SET ?`;
         let insertObj = {
          id:Date.now(), shopName, shopType, shopPrice, shopDes, creater, shopPic
         }
         dbConfig.sqlConnect(insertshopInfo,insertObj, (err, data) => {
             if(err){
                 res.send({"msg": "数据库错误", "code": "500","data":err})
                 return
             }else{
                 res.send({"msg": "添加成功", "code": "200",data})
             }
         })
     });
  //查询单条数据
router.get('/showInfo',function(req,res){
  const shopInfo = req.query.id
  var sql = "select * from shop_list where id = ?";
  var sqlArr = [shopInfo]
  var callBack = (err,data)=>{
    if(err){
      console.log('连接出错')
      return
    }
    else{
      res.send({ data })
    
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack)
})
     //删除单条数据
router.delete('/deleteShop',function(req,res){
  const shopInfo = req.query.id
  console.log(shopInfo);
  var sql = "delete from shop_list where id = ?";
  var sqlArr = [shopInfo]
  var callBack = (err,data)=>{
    if(err){
      console.log('连接出错')
      return
    }
    else{
      res.send({ data })
    
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack)
})
module.exports = router;

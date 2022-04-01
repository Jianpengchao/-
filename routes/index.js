var router = require('express').Router()
var dbConfig = require('../util/dbconfig')

/**
     * 增加
     */
 router.post("/add", (req, res) => {
   const userInfo = req.body
   console.log(req.body);
   const {account,password,nickName,sex,address,description} = userInfo
        const insertUserInfo =`insert into users SET ?`;
        let insertObj = {
         id:Date.now(), account, password, nickName, sex, address, description
        }
        dbConfig.sqlConnect(insertUserInfo,insertObj, (err, data) => {
            if(err){
                res.send({"msg": "数据库错误", "code": "500","data":err})
                return
            }else{
                res.send({"msg": "添加成功", "code": "200",data})
            }
        })
    });
//修改
    router.put("/updateUser", (req, res) => {
      console.log(req.body);
     var sql = 'update users set ? where id=?';
    //  const userInfo = {account,password,nickName,sex,address,description}
      var sqlArr = [req.body,req.body.id]
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
       });
//获取所有
    router.get('/userlist',function(req,res){
      var sql = "select * from users";
      var sqlArr = []
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
//查询单条数据
router.get('/user',function(req,res){
    const userInfo = req.query.id
    var sql = "select * from users where id = ?";
    var sqlArr = [userInfo]
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
router.delete('/deleteUser',function(req,res){
  const userInfo = req.query.id
  console.log(userInfo);
  var sql = "delete from users where id = ?";
  var sqlArr = [userInfo]
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

router.get('/list',function(req,res,next){
  var sql = "select * from user";
  var sqlArr = []
  var callBack = (err,data)=>{
    if(err){
      console.log('连接出错')
      return
    }
    else{
      res.send({  data })
    
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack)
})

module.exports = router

const mysql = require('mysql2')
// const db = mysql.createPool({
//       host: "localhost",
//       user: "root",
//       password: "123456",
//       database: "mydemo",
//       port: '3306'
//  })
//  module.exports = db
  module.exports = {
  //数据库配置
  config:{
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydemo",
    port: '3306',
  },
  //连接数据库
  sqlConnect:function(sql,sqlArr,callBack){
    var db = mysql.createPool(this.config)
    db.getConnection((err,cont)=>{
      console.log("123");
      if(err){
        console.log("连接失败");
        console.log(err);
        return
      }
      //事件驱动回调
      console.log("连接成功");
      cont.query(sql,sqlArr,callBack);
      //释放连接
      cont.release()
    })
  }
}


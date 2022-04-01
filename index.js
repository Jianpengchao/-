// var express = require('express');//引入express模块
// var bodyParser = require('body-parser');
// var app = express();

// app.use(express.urlencoded({extended: false}))// 配置解析表单数据的中间件,只能解析 application/x-www-form-urlencoded 格式表单数据
// var router = require('./routes/index')
// app.use(router)

// console.log('111');
// // var dbConfig = require('./util/dbconfig')
// // app.use(require('cors')())
// app.use(bodyParser.urlencoded({extended:false}))
// // app.use(bodyParser.json)

// // app.get('/all',function(req,res){
// //     var sql = "select * from user";
// //     dbConfig.sqlConnect(sql,(err,res)=>{
// //     if(err){
// //     console.log('连接出错')
// //     return
// //     }else{
// //     res.send({ res })
// //     }
    
// //     })
// // })

// //定义方法
// app.get('/',function(req,res){
//     res.send('今天你要加班吗？')
// });
// //响应接口
// app.get('/list/product',function(req,res){
//     // 数据
//     let result={
//         err:0,
//         msg:'ok',
//         data:{
//             "name":"huawei",
//             "price":"1999",
//             "title":"huawei huawei huawei",
//             "id":"1"
//         }
//     }
//     res.send(result)
// })
   
  
// //定义端口，此处所用为3060端口，可自行更改
// var server = app.listen(3060,function(){
//     console.log('服务启动');
// })
// module.exports = app

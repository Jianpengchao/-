const express = require('express');//引入express模块
const path = require('path')

var cors = require('cors')

const app = express();
app.use(cors())
// 引入body-parser模块，用来处理post请求参数
const bodyPaser = require('body-parser');


// 处理post请求参数
app.use(bodyPaser.urlencoded({extended: false}))
app.use(bodyPaser.json())

app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.urlencoded({extended: false}))// 配置解析表单数据的中间件,只能解析 application/x-www-form-urlencoded 格式表单数据
console.log('111');

var router = require('./routes/index')
app.use(router)

var shopList = require('./routes/shopList')
app.use(shopList)

//定义方法
app.get('/',function(req,res){
    res.send('今天你要加班吗？')
});
  
//定义端口，此处所用为3060端口，可自行更改
app.listen(3060,function(){
    console.log('服务启动');
})
// module.exports = app

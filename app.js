const express = require('express')
const mongoose = require('mongoose')  // 載入 mongoose
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser') // 載入 body-parser
const methodOverride = require('method-override')
const routes = require('./routes')  // 引用路由器


const Todo = require('./models/todo');

// 加入這段 code, 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

// 用 app.use 規定每一筆請求都需要透過 body-parser, methodOverride進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)  // 將 request 導入路由器


app.listen(3000, () => {
  console.log(`App is running on http://localhost:3000`)
})
const express = require('express')
const mongoose = require('mongoose')  // 載入 mongoose
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser') // 載入 body-parser

const Todo = require('./models/todo');
const { redirect } = require('express/lib/response');

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

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  // 拿到全部的Todo資料
  Todo.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .then(todos => res.render('index', { todos })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

app.get('/todos/new', (req, res) => {
  res.render('new')
})

app.post('/todos', (req, res) => {
  const name = req.body.name        // 從 req.body 拿出表單的 name 資料
  return Todo.create({ name })      // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後,導回首頁
    .catch(error => console.log(error))
})

app.listen(3000, () => {
  console.log(`App is running on http://localhost:3000`)
})
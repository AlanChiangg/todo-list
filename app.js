const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser') // 載入 body-parser
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000

const routes = require('./routes')  // 引用路由器
require ('./config/mongoose')

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 用 app.use 規定每筆請求都需先經過以下前置處理
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)  // 將 request 導入路由器


app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
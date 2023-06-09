const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  nsme: {
    type: String, // 資料型別是字串
    require: true, // 這是個必填欄位
  },
  done: {
    type: Boolean
  }
})

module.exports = mongoose.model('Todo', todoSchema)
# Todo-List

一個使用 Node.js + Express 打造的Todo-List

## 專案畫面

![image](https://github.com/AlanChiangg/todo-list/blob/main/public/image/image1.jpg)

![image](https://github.com/AlanChiangg/todo-list/blob/main/public/image/image2.jpg)

![image](https://github.com/AlanChiangg/todo-list/blob/main/public/image/image3.jpg)

### Features - 產品功能

1. 使用者可以註冊帳號,可以用Facebook直接登入
2. 使用者可以新增/刪除/編輯/查詢 Todo

## Environment SetUp - 環境建置

[Node.js](https://nodejs.org/en/)

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/AlanChiangg/todo-list.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd todo-list
```

3. 安裝 npm 套件

```
npm install
```

4. 安裝 nodemon 套件

```
npm i -g nodemon 
```

5. 安裝完畢後，設定環境變數，請參照.env.example

```   
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
SESSION_SECRET=ThisIsMySecret
MONGODB_URI=mongodb://localhost/todo-list
PORT=3000
```

6. 建立種子資料

```
npm run seed
```

```
帳號：root@example.com
密碼：12345678
```

7. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

8. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Express is running on http://localhost:3000
```

### 使用工具
- Visual Studio Code - 開發環境
- Express - 應用程式架構
- Express-Handlebars - 模板引擎
- MongoDB - 資料庫

### Contributor - 專案開發人員

> [AlanChiangg](https://github.com/AlanChiangg)
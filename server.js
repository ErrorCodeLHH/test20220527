const express = require('express')
const path = require('path') 
const app = express()
app.set('port', process.env.PORT ??=3000)
//const PORT = 12010

const _path = path.join(__dirname, './dist')  
app.use(express.static(_path))     
//app.listen(PORT, ()=> console.log(`포트폴리오 서버가 시작됩니다. http://127.0.0.1:${PORT}np`))

const PORT = app.get('port')
app.listen(PORT, ()=>{
    console.log(`nodemon Server Running at http://127.0.0.1:${PORT}/`)
    console.log(`http://127.0.0.1:${PORT}/join`)
    console.log(`http://127.0.0.1:${PORT}/login`)
})
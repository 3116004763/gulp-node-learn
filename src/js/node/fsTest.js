console.time('fs')
const fs = require('fs')
let data = ''
let time = 'log                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             '
// const readStream = fs.createReadStream('./osTest.js')

// readStream.on('open',() => {console.log('start read')})
// readStream.on('data',(chunk) => {console.log('reading'); data += chunk;})
// readStream.on('end',() => {console.log('end'); handleData(data)})
// readStream.on('error',(err) => {console.log('error: '+err)})

// function handleData(data) {
//     console.log(data)
// }

// const file = fs.readFile('./osTest.js',(err,data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log('读取的文件内容：'+data)
// })

console.log('正在打开文件')
fs.open('./osTest.js','r+',(err, fd) => {
    if(err){
        console.log(err)
    }
    console.log(fd)
    console.log('文件打开成功')
}) 
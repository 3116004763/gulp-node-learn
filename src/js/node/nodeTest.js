//buff
// let buf = Buffer.from([97,98,99],'ascii')

// console.log(buf)

//get请求处理方法。url
// let http = require("http");
// let url = require("url");

// function onRequest(request, response) {
//     let pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     if(/^\/api*/gi.test(pathname)){
//         response.write('api: '+pathname)
//         response.end();
//         return
//     }
//     if(/^\/index*/gi.test(pathname)){
//         response.write('index: '+pathname);
//         response.end();
//         return
//     }   
//     response.write("404");
//     response.end();
// }

// http.createServer(onRequest).listen(8888);
// console.log("Server has started.");

//post 请求处理方式。
// var http = require('http');
// var querystring = require('querystring');
 
// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post"  accept-charset="utf-8">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';
 
// http.createServer(function (req, res) {
//     req.setEncoding('utf8');    
//   var body = "";
//   req.on('data', function (chunk) {
//     body += chunk;
//   });
//   req.on('end', function () {
//     // 解析参数
//     // body = querystring.parse(body);
//     // 设置响应头部信息及编码
//     res.writeHead(200, {'Content-Type': 'text/html;'});
    
//     body = decodeURIComponent(body);

//     if(body) { // 输出提交的数据
//         // res.write("网站名：" + body.name);
//         // res.write("<br>");
//         // res.write("网站 URL：" + body.url);
//         res.write(`<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>${body}</html>`)
//     } else {  // 输出表单
//         res.write(postHTML);
//     }
//     res.end();
//   });
// }).listen(3000)

//dns模块
// var dns = require('dns');

// dns.lookup('www.github.com', function onLookup(err, address, family) {
//     console.log('ip 地址:', address);
//     dns.reverse(address, function (err, hostnames) {
//         if (err) {
//             console.log(err.stack);
//         }
//         console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
//     });  
// });

console.log("name:%s，age:%s",'kkkk','1111')   //打印出name:kkkk,age:1111
var http = require('http');
var port = process.env.port || 1337;
var exec = require('child_process').exec;


var fs = require('fs');

/*var fun = function () {
    console.log("fun() start");
    exec('start helloworld.exe', function (err, data) {
        console.log(err)
        console.log(data.toString());
    });
}
fun();
*/

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }



    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end;
    }).listen(port);

});
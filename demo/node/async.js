var fs = require('fs');

var rs = fs.createReadStream(res);
var ws = fs.createWriteStream(dis);

rs.on('data', function(chunk){
  if (ws.write(chunk) === false){
    rs.pause() ;
  }
});

rs.on('end', function(){
  ws.end();
});

ws.on('drain', function(){
  rs.resume();
});

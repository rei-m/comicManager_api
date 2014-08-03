/**************************************************************************************************
 * モジュール名　: 新刊カレンダー用API
 * 概要　　　　　: 新刊カレンダーアプリ用のAPI
 *************************************************************************************************/
// モジュール読み込み
module.paths.push('./my_modules/node_modules');
var restify = require('restify'),
    bl = require('appBL'),
    logger = require('logger');

// サーバーを作成しルーティングを設定
var server = restify.createServer();
server.get('/comic/master', bl.respondMasterInfo);
server.get('/comic/sales', bl.respondSalesInfo);

// listen開始
server.listen(8080, function() {
  if(process.getuid()===0){
    process.setgid("node");
    process.setuid("node");
  }
  logger.info('Express server listening on port 8080');
});

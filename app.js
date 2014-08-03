/**************************************************************************************************
 * モジュール名　: 新刊カレンダー用API
 * 概要　　　　　: 新刊カレンダーアプリ用のAPI
 *************************************************************************************************/
// モジュール読み込み
module.paths.push('./my_modules/node_modules');
var restify = require('restify'),
    logger = require('cmn/logger'),
    mongoose = require('cmn/cmnDb'),
    Comic = require('model/comic').getModel(mongoose),
    SalesInfo = require('model/salesInfo').getModel(mongoose);

// レスポンスロジック処理作成
var getMasterInfo = require('comicMaster/get')(Comic),
    getSalesInfo = require('comicSales/get')(SalesInfo);

// サーバーを作成しルーティングを設定
var server = restify.createServer();
server.get('/comic/master', getMasterInfo);
server.get('/comic/sales', getSalesInfo);

// listen開始
server.listen(8080, function() {
  if(process.getuid()===0){
    process.setgid("node");
    process.setuid("node");
  }
  logger.info('Express server listening on port 8080');
});

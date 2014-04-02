var restify = require('restify'),
    bl = require('mod/appBL'),
    logger = require('mod/logger');

var server = restify.createServer();
server.get('/comic/master', bl.respondMasterInfo);
server.get('/comic/sales', bl.respondSalesInfo);

server.listen(8080, function() {
	if(process.getuid()===0){
		process.setgid("node");
		process.setuid("node");
	}
	logger.info('Express server listening on port 8080');
});
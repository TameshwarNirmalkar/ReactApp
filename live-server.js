const path = require("path");
const liveServer = require("live-server");
const config = require("./node_server_config");
console.log(config);	
const live_server_opts = {
	host: config.host,
	port: config.port,
	open: true,
	mount: [],
	proxy: [],
	logLevel: 2,
	root: "./app",
	file: "index.html"
};

liveServer.start(live_server_opts);
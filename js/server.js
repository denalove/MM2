/* Magic Mirror
 * Server
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var express = require("express");
var app = require("express")();
var server = require("https").Server(app);
var io = require("socket.io")(server);
var path = require("path");
var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

var Server = function(config, callback) {
	console.log("Starting server op port " + config.port + " ... ");

	server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
	app.use("/js", express.static(__dirname));
	app.use("/config", express.static(path.resolve(__dirname + "/../config")));
	app.use("/css", express.static(path.resolve(__dirname + "/../css")));
	app.use("/fonts", express.static(path.resolve(__dirname + "/../fonts")));
	app.use("/modules", express.static(path.resolve(__dirname + "/../modules")));
	app.use("/vendor", express.static(path.resolve(__dirname + "/../vendor")));
	app.use("/translations", express.static(path.resolve(__dirname + "/../translations")));

	app.get("/", function(req, res) {
		res.sendFile(path.resolve(__dirname + "/../index.html"));
	});

	if (typeof callback === "function") {
		callback(app, io);
	}
};

module.exports = Server;

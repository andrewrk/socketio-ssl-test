var http = require("http")
var socketio = require("socket.io");
var node_static = require("node-static");

file_server = new (node_static.Server)("./public");

var app = http.createServer(function(req, res) {
    req.addListener("end", function () {
        file_server.serve(req, res);
    });
});

app.listen(process.env.PORT || 8001);
io = socketio.listen(app);

io.configure(function() {
    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 10);
});

io.sockets.on("connection", function (socket) {
    socket.emit("Blah", {hello: "world"});
    socket.emit("Thing", {fofofo: "qrqrqrqr"});
    socket.on("LaLaLa", function (data) {
        console.log(data);
    });
});

var text = document.getElementById("text");
var socket = io.connect();

function handle_onclick() {
    socket.emit("LaLaLa", {my: "data"});
}

socket.on('Thing', function (data) {
    text.value += "Thing: " + JSON.stringify(data) + "\n";
});


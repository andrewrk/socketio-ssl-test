var text = document.getElementById("text");
var socket = io.connect("https://" + location.hostname);

function handle_onclick() {
    socket.emit("LaLaLa", {my: "data"});
}

socket.on('Thing', function (data) {
    text.value += "Thing: " + JSON.stringify(data) + "\n";
});


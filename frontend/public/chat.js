const io = require("socket.io");

//receives chat from input and emits to server 
//we will listen for the chat message event on the server side
(function() {
    const socket = io();
    $("form").submit(function(e) {
        e.preventDefault();
        socket.emit("chat message", $("#m").val());
        $("#m").val("");
    return  true;
});
})();
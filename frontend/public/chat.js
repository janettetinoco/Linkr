const io = require("socket.io");

(function() {
    const socket = io();
    $("form").submit(function(e) {
        e.preventDefault(); // prevents page reloading
        socket.emit("chat message", $("#m").val());
        $("#m").val("");
    return  true;
});
})();
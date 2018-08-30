"use strict";

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

let dinos = [];

function cycle() {
    io.emit("dinos", dinos);
}

setInterval(function () {
    cycle();
}, 20);

app.use(express.static("public"));

io.on("connection", function(socket){
    socket.emit("seed", socket.id);

    socket.on("born", function(dino) {
        dinos.push(dino);
    });

    socket.on("move", function(dino) {
        let i = dinos.map(function(dino) {
            return dino.id;
        }).indexOf(dino.id);
        if (i !== -1) {
            dinos[i] = dino;
        }
    });

    socket.on("disconnect", function(){
        let i = dinos.map(function(dino) {
            return dino.id;
        }).indexOf(socket.id);
        if (i !== -1) {
            dinos.splice(i, 1);
        }
    });
});

http.listen(process.env.PORT || 3000, function(){
    console.log("*:3000");
});
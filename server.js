"use strict";

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const Dino = require('./public/Dino');

let dinos = [
    new Dino("-100", -100),
    new Dino("200", 200)
];

function cycle() {
    io.emit("dinos", {
        dinos: dinos
    });
}

setTimeout(function () {
    cycle();
}, 50);

app.use(express.static("public"));

io.on("connection", function(socket){
    socket.on("born", function(dino) {
        dinos.push(dino);
    });

    socket.on("move", function(dino) {
        dinos.shift();
        dinos.push(dino);
    });

    socket.on("disconnect", function(){
        dinos.shift();
    });
});

http.listen(3000, function(){
    console.log("*:3000");
});
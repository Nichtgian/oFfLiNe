"use strict";const express=require("express"),app=express(),http=require("http").Server(app),io=require("socket.io")(http);let dinos=[];function cycle(){io.emit("dinos",dinos)}setInterval(function(){cycle()},20),app.use(express.static("public")),io.on("connection",function(a){a.emit("seed",a.id),a.on("born",function(b){dinos.push(b)}),a.on("move",function(b){let c=dinos.map(function(d){return d.id}).indexOf(b.id);-1!==c&&(dinos[c]=b)}),a.on("disconnect",function(){let b=dinos.map(function(c){return c.id}).indexOf(a.id);-1!==b&&dinos.splice(b,1)})}),http.listen(3e3,function(){console.log("*:3000")});
let me;
let dinos = [];
let cycleTime = Date.now();
let lastanimation = null;

let c = document.getElementById("c");
let ctx = c.getContext("2d");
ctx.imageSmoothingEnabled = false;

let asset = new Image();
asset.src = "dino.png";

socket.on("seed", function(id) {
    init(id);
});

socket.on("dinos", function(_dinos) {
    let i = _dinos.map(function(dino) {
        return dino.id;
    }).indexOf(me.id);
    if (i !== -1) {
        _dinos.splice(i, 1);
    }
    dinos = _dinos;
});

function init(id) {
    me = new Dino(id, "unknown", 0);
    console.log(me);
    socket.emit("born", me);
    window.requestAnimationFrame(cycle);
}

function update(dt) {
    me.move();
    me.fall();
    socket.emit("move", me);
}

function cycle(timestamp) {
    let dt = timestamp - cycleTime;

    update(dt);
    render();

    cycleTime = timestamp;

    window.requestAnimationFrame(cycle);
}
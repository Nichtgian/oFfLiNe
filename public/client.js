let me;
let dinos = [];
let cycleTime = Date.now();

let c = document.getElementById("c");
let ctx = c.getContext("2d");
ctx.imageSmoothingEnabled = false;

init();

socket.on("dinos", function(dinos) {
    this.dinos = dinos;
});

function init() {
    me = new Dino("me", 0);
    socket.emit("born", me);
    window.requestAnimationFrame(cycle);
}

function update(dt) {
    me.move();
    me.fall();
    socket.emit("move", me);
}

function render() {
    renderDinos();
}

function cycle(timestamp) {
    let dt = timestamp - cycleTime;

    update(dt);
    render();

    cycleTime = timestamp;

    window.requestAnimationFrame(cycle);
}
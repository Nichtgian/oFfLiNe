function renderDinos() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillRect(c.width / 2 - me.width / 2, c.height - me.height - me.y / 2, me.width, me.height);

    for (let i = 0; i < dinos.length; i++) {
        let dino = dinos[i];
        ctx.fillRect(me.x - dino.x + (c.width / 2 - dino.width / 2), c.height - dino.height - dino.y / 2, dino.width, dino.height);
    }
}
function renderDinos() {
    ctx.fillRect(c.width / 2 - me.width / 2, c.height - me.height, me.width, me.height);
    for (let i = 0; i < dinos.length; i++) {
        let dino = dinos[i];
        ctx.fillRect(dino.x - me.x, c.height - me.height, me.width, me.height);
    }
}
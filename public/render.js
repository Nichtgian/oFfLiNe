function renderDinos() {
    ctx.clearRect(0, 0, c.width, c.height);
    let distance = me.distance / 10;
    ctx.fillRect(c.width / 2 - me.width / 2, c.height - me.height - me.y / 2, me.width, me.height);
    ctx.fillRect(c.width / 2 - me.width / 4, c.height - me.height - me.y / 2 - distance, me.width / 2, distance);

    for (let i = 0; i < dinos.length; i++) {
        let dino = dinos[i];
        distance = dino.distance / 10;
        ctx.fillRect(me.x - dino.x + (c.width / 2 - dino.width / 2), c.height - dino.height - dino.y / 2, dino.width, dino.height);
        ctx.fillRect(me.x - dino.x + (c.width / 2 - dino.width / 4), c.height - dino.height - dino.y / 2 - distance, dino.width / 2, distance);
    }
}
class Dino {
    constructor(name, x) {
        this.name = name;
        this.id = Date.now();
        this.x = x;
        this.y = 0;
        this.speed = 0;
        this.bounce = 0;
        this.distance = 0;
        this.width = 50;
    }

    walk(dir) {
        if (dir === 0) {
            this.speed = 0;
        }
        else {
            this.speed = dir * 5;
        }
    }

    move() {
        this.x += this.speed;
        if (this.x <= -500) {
            this.x = -500;
            this.walk(0);
        }
        else if (this.x >= 500) {
            this.x = 500;
            this.walk(0);
        }
    }

    jump() {
        this.bounce = 10;
    }

    fall() {
        this.y += this.bounce;
        this.bounce -= 1;
        if (this.y >= 0) {
            this.y = 0;
            this.bounce = 0;
        }
    }
}

module.exports = Dino;
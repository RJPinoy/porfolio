function randomSign() {
    return Math.random() >= 0.5 ? 1 : -1;
}

export class Stars {
    constructor(speed, maxSize, color, canvasWidth, canvasHeight) {
        this.starSpeed = speed * canvasWidth;
        this.color = color;

        this.x = Math.floor(Math.random() * canvasWidth);
        this.y = Math.floor(Math.random() * canvasHeight);
        this.xv = this.starSpeed * randomSign() * Math.random();
        this.yv = Math.sqrt(Math.pow(this.starSpeed, 2) - Math.pow(this.xv, 2)) * randomSign();
        this.speedMult = Math.random() * 1.5 + 0.5;
        this.r = Math.random() * maxSize * canvasWidth/2;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    }

    update(canvasWidth, canvasHeight) {
        this.x += this.xv * 0.01;
        this.y += this.yv * 0.01;
        
        // reposition the star to the other side if it goes off screen
        if (this.x < 0 - this.r) {
            this.x = canvasWidth + this.r;
        } else if (this.x > canvasWidth + this.r) {
            this.x = 0 - this.r;
        }
        
        // reposition the star to the other side if it goes off screen
        if (this.y < 0 - this.r) {
            this.y = canvasHeight + this.r;
        } else if (this.y > canvasHeight + this.r) {
            this.y = 0 - this.r;
        }
    }
}
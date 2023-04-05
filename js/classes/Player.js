class Player extends Sprite {
    constructor({
        collisionBlocks = [],
        imageSrc,
        frameRate
    }) {
        super({ imageSrc, frameRate });

        this.position = {
            x: 200,
            y: 200,
        };

        this.velocity = {
            x: 0,
            y: 0,
        };

        this.gravity = 1;

        this.width = 25;
        this.height = 25;

        this.sides = {
            bottom: this.position.y + this.height,
        };

        this.collisionBlocks = collisionBlocks;
    }

    update() {
        // this is the blue box
        // c.fillStyle = 'rgba(0, 0, 255, 0.5)';
        // c.fillRect(this.position.x, this.position.y, this.width, this.height);

        this.position.x += this.velocity.x;

        this.updateHitbox();

        // check for horizontal collisions
        this.checkForHorizontalCollisions();

        // apply gravity
        this.applyGravity();

        this.updateHitbox();

        // c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);

        // check for vertical collisions
        this.checkForVerticalCollisions();

    }

    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x + 58,
                y: this.position.y + 34,
            },
            width: 50,
            height: 53,
        }
    }

    applyGravity() {
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;
    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            // if collision exists
            if (
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y
            ) {
                // collision on x axis going to the left
                if (this.velocity.x < 0) {
                    const offset = this.hitbox.position.x - this.position.x;

                    this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
                    break;
                }

                if (this.velocity.x > 0) {
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;

                    this.position.x = collisionBlock.position.x - offset - 0.01;
                    break;
                }
            }
        }
    }

    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            // if collision exists
            if (
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y
            ) {
                // collision on x axis going to the left
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;

                    const offset = this.hitbox.position.y - this.position.y;

                    this.position.y = collisionBlock.position.y + offset + 0.01;
                    break;
                }

                if (this.velocity.y > 0) {
                    this.velocity.y = 0;

                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;

                    this.position.y = collisionBlock.position.y - offset - 0.01;
                    break;
                }
            }
        }
    }
}
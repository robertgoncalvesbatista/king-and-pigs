const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

// Aqui definimos que para cada unidade, existem 64 pixels
canvas.width = 64 * 16; // 64 pixels * 16 unidades = 1024
canvas.height = 64 * 9; // 64 pixels * 9 unidades = 576

const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundLevel1 = new Sprite({
    position: { x: 0, y: 0 },
    imageSrc: './img/backgroundLevel1.png',
});

const player = new Player({
    collisionBlocks,
    imageSrc: './img/king/idle.png',
    frameRate: 11
});

const keys = {
    w: { pressed: false },
    a: { pressed: false },
    d: { pressed: false },
}

function animate() {
    window.requestAnimationFrame(animate);

    backgroundLevel1.draw();

    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.draw();
    })

    // Velocity player
    player.velocity.x = 0;

    if (keys.a.pressed) {
        player.velocity.x = -5;
    }

    if (keys.d.pressed) {
        player.velocity.x = 5;
    }

    player.draw();
    player.update();
}

animate();
// O evento ocorre quando a tecla é pressionada
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i];

                if (
                    player.hitbox.position.x <= door.position.x + door.width &&
                    player.hitbox.position.x + player.hitbox.width >= door.position.x &&
                    player.hitbox.position.y <= door.position.y + door.height &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y
                ) {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    player.preventInput = true;
                    player.switchSprite("enterDoor");
                    door.play();
                    return;
                }
            }

            if (player.velocity.y === 0) {
                player.velocity.y = -20;
            }

            break;
        case 'a':
            keys.a.pressed = true;

            break;
        case 'd':
            keys.d.pressed = true;

            break;
    }
})


// O evento ocorre quando a tecla retorna à posição original no teclado
// Quando o jogador solta a tecla
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false;

            break;
        case 'd':
            keys.d.pressed = false;

            break;
    }
})
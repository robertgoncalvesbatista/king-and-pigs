// O evento ocorre quando a tecla é pressionada
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
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
window.sr = ScrollReveal();

/* sr.reveal('nav', {
    duration: 3000,
    origin: 'bottom',
    distance:'-100px'
});

sr.reveal('header', {
    duration: 3000

}); */

/* aparecer de frente */

sr.reveal('.scroll-center', {
    duration: 3000,
});

/* aparecer de arriba */

sr.reveal('.scroll-top', {
    duration: 3000,
    origin: 'bottom',
    distance:'-100px'
});

/* aparecer por la izquierda */

sr.reveal('.scroll-left', {
    duration: 3000,
    origin: 'right',
    distance:'-100px'
});

/* aparecer por la derecha */

sr.reveal('.scroll-right', {
    duration: 3000,
    origin: 'left',
    distance:'-100px'
});
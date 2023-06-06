const activador = document.querySelector('.menu_movil');
const desactivador = document.querySelector('.menumobil-cerrar');
const click_link = document.querySelectorAll('.menumobil-link');
const menu = document.querySelector('.menumobil');

activador.addEventListener( 'click', toggleMenu);
desactivador.addEventListener( 'click', toggleMenu);
click_link.forEach( link => {
    link.addEventListener( 'click', toggleMenu );
} );

function toggleMenu() {
    if( menu.classList.contains( 'activo' ) ) {
        menu.classList.remove( 'activo' );
    } else {
        menu.classList.add( 'activo' );
    }
}
function mostrarSeccion(id) {
            const secciones = document.querySelectorAll('.seccion');
            secciones.forEach(sec => {
                if (sec.id === id) {
                    sec.classList.remove('oculto');
                } else {
                    sec.classList.add('oculto');
                }
            });
}

function moverCarrusel(id, direccion) {
    const carrusel = document.getElementById(`carrusel-${id}`);
    const anchoTarjeta = carrusel.querySelector('.tarjeta-plato').offsetWidth + 32; // 32 es gap
    carrusel.scrollBy({ left: anchoTarjeta * direccion, behavior: 'smooth' });
}
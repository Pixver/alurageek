document.addEventListener('DOMContentLoaded', function () {
    // Función para buscar productos
    function buscarProducto() {
        const nombre = document.getElementById('nombre-producto').value.toLowerCase();
        const precio = document.getElementById('precio-producto').value.toLowerCase();
        const imagen = document.getElementById('imagen-producto').value.toLowerCase();

        const productos = document.querySelectorAll('.producto');

        productos.forEach(producto => {
            const nombreProducto = producto.querySelector('p').textContent.toLowerCase();
            const precioProducto = producto.querySelector('p').textContent.toLowerCase();
            const imagenProducto = producto.querySelector('img').src.toLowerCase();

            const nombreMatch = nombre === '' || nombreProducto.includes(nombre);
            const precioMatch = precio === '' || precioProducto.includes(precio);
            const imagenMatch = imagen === '' || imagenProducto.includes(imagen);

            if (nombreMatch && precioMatch && imagenMatch) {
                producto.style.display = '';
            } else {
                producto.style.display = 'none';
            }
        });
    }

    // Función para limpiar el formulario
    function limpiarFormulario() {
        document.getElementById('nombre-producto').value = '';
        document.getElementById('precio-producto').value = '';
        document.getElementById('imagen-producto').value = '';

        const productos = document.querySelectorAll('.producto');
        productos.forEach(producto => {
            producto.style.display = '';
        });
    }

    // Asignar las funciones a los botones
    document.querySelector('.enviar').addEventListener('click', buscarProducto);
    document.querySelector('.Limpiar').addEventListener('click', limpiarFormulario);
});

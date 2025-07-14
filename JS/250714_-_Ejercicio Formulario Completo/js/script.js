// Asegurar que el script se ejecute solo cuando todo el HTML ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos del DOM
    const articuloForm = document.getElementById('articuloForm');
    const mensajeDiv = document.getElementById('mensaje');

    // Añadir escuchador de eventos al formulario
    articuloForm.addEventListener('submit', (event) => {
        // Prevenir el comportamiento por defecto del navegador (recargar la página)
        event.preventDefault();

        // Limpiar mensajes anteriores
        mensajeDiv.innerHTML = '';
        mensajeDiv.className = 'mensaje';
        mensajeDiv.style.display = 'none';

        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const descripcion = document.getElementById('descripcion').value.trim();
        const precio = parseFloat(document.getElementById('precio').value);
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const categoria = document.getElementById('categoria').value;

        // Array para almacenar errores de validación
        const errores = [];

        // Validaciones básicas
        if (!nombre) {
            errores.push('El nombre del artículo es obligatorio.');
            console.log(e)
        }

        if (!descripcion) {
            errores.push('La descripción es obligatoria.');
        }

        if (isNaN(precio) || precio <= 0) {
            errores.push('El precio debe ser un número válido mayor que 0.');
        }

        if (isNaN(cantidad) || cantidad <= 0) {
            errores.push('La cantidad debe ser un número válido mayor que 0.');
        }

        if (!categoria) {
            errores.push('Debe seleccionar una categoría.');
        }

        // Mostrar mensajes
        if (errores.length > 0) {
            // Hay errores - mostrar lista de errores
            mensajeDiv.className = 'mensaje error';

            let listaErrores = '<ul>';
            errores.forEach(error => {
                listaErrores += `<li>${error}</li>`;
            });
            listaErrores += '</ul>';

            mensajeDiv.innerHTML = listaErrores;
            mensajeDiv.style.display = 'block';
        } else {
            // No hay errores - mostrar mensaje de éxito
            mensajeDiv.className = 'mensaje exito';
            mensajeDiv.innerHTML = `¡Artículo "${nombre}" guardado correctamente!`;
            mensajeDiv.style.display = 'block';

            // Crear objeto con los datos del artículo
            const datosArticulo = {
                nombre: nombre,
                descripcion: descripcion,
                precio: precio,
                cantidad: cantidad,
                categoria: categoria
            };

            // Mostrar datos en la consola (en una aplicación real, aquí enviarías los datos a un servidor)
            console.log('Datos del Artículo:', datosArticulo);

            // Limpiar el formulario después del envío exitoso
            articuloForm.reset();

            // Ocultar mensaje después de 3 segundos
            setTimeout(() => {
                mensajeDiv.style.display = 'none';
            }, 3000);
        }
    });
});
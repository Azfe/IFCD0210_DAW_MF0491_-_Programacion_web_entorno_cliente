document.addEventListener("DOMContentLoaded", () => {
  const articuloForm = document.getElementById("articuloForm");
  const mensajeDiv = document.getElementById("mensaje");

  articuloForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Limpiar mensajes anteriores
    mensajeDiv.textContent = "";
    mensajeDiv.className = "mensaje"; // Resetea las clases

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const categoria = document.getElementById("categoria").value;

    // Validaciones básicas
    let errores = [];

    if (nombre === "") {
      errores.push("El Nombre del Artículo es obligatorio.");
    }
    if (descripcion === "") {
      errores.push("La Descripción es obligatoria.");
    }
    if (isNaN(precio) || precio <= 0) {
      errores.push("El Precio debe ser un número positivo.");
    }
    if (isNaN(cantidad) || cantidad <= 0) {
      errores.push("La Cantidad debe ser un número entero positivo.");
    }
    if (categoria === "") {
      errores.push("Debe seleccionar una Categoría.");
    }

    // Mostrar mensajes
    if (errores.length > 0) {
      mensajeDiv.classList.add("error");
      mensajeDiv.innerHTML =
        "<ul>" + errores.map((error) => `<li>${error}</li>`).join("") + "</ul>";
      mensajeDiv.style.display = "block";
    } else {
      // Si todo es válido, procesar los datos
      const datosArticulo = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria,
      };

      console.log("Datos del Artículo:", datosArticulo);

      mensajeDiv.classList.add("exito");
      mensajeDiv.textContent = "¡Artículo guardado exitosamente!";
      mensajeDiv.style.display = "block";

      // Opcional: Resetear el formulario después de un envío exitoso
      articuloForm.reset();
    }
  });
});

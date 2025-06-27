document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateButton");
    const exitButton = document.getElementById("exitButton");
    const resultBox = document.getElementById("resultBox");

    function generatePrimitiva() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 49) + 1);
        }
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        let complementary;
        do {
            complementary = Math.floor(Math.random() * 49) + 1;
        } while (numbers.has(complementary));

        const reintegro = Math.floor(Math.random() * 10); // 0-9

        displayResult(sortedNumbers, complementary, reintegro);
    }

    function displayResult(numbers, complementary, reintegro) {
        resultBox.innerHTML = `
                    <p>Números:</p>
                    <div class="number-group">
                        ${numbers
                .map((num) => `<div class="number-ball">${num}</div>`)
                .join("")}
                    </div>
                    <p>Complementario:</p>
                    <div class="number-group">
                        <div class="number-ball complementary-ball">${complementary}</div>
                    </div>
                    <p>Reintegro:</p>
                    <div class="number-group">
                        <div class="number-ball reintegro-ball">${reintegro}</div>
                    </div>
                `;
    }

    generateButton.addEventListener("click", generatePrimitiva);

    exitButton.addEventListener("click", () => {
        const confirmExit = confirm(
            "¿Estás seguro de que quieres salir? Puedes cerrar la pestaña del navegador."
        );
        if (confirmExit) {
            // Esto no cierra la pestaña programáticamente por razones de seguridad de los navegadores.
            // Pero informa al usuario que puede hacerlo manualmente.
            resultBox.innerHTML =
                "<p>¡Gracias por usar el generador! Puedes cerrar esta pestaña.</p>";
            generateButton.disabled = true; // Deshabilita el botón de generar
            exitButton.disabled = true; // Deshabilita el botón de salir
        }
    });

    // Generar una combinación al cargar la página por primera vez
    generatePrimitiva();
});
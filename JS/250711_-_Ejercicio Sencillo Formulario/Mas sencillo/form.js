const selectWrapper = document.querySelector(".custom-select-wrapper");
const trigger = selectWrapper.querySelector(".custom-select-trigger");
const options = selectWrapper.querySelector(".custom-options");
const hiddenInput = selectWrapper.querySelector("input[name='categoria']");

trigger.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".custom-option").forEach(option => {
  option.addEventListener("click", () => {
    trigger.textContent = option.textContent;
    hiddenInput.value = option.getAttribute("data-value");
    options.style.display = "none";

    // Quitar selección previa
    document.querySelectorAll(".custom-option").forEach(opt => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});

// Cerrar el menú si se hace clic fuera
document.addEventListener("click", event => {
  if (!selectWrapper.contains(event.target)) {
    options.style.display = "none";
  }
});

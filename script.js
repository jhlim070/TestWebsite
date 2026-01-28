document.addEventListener("DOMContentLoaded", () => {
    const greetButton = document.createElement("button");
    greetButton.innerText = "Click me for a greeting!";
    document.body.appendChild(greetButton);

    greetButton.addEventListener("click", () => {
        alert("Hello, welcome to my website!");
    });
});
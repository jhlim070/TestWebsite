document.addEventListener("DOMContentLoaded", () => {
    const greetButton = document.createElement("button");
    greetButton.innerText = "Greetings!";
    document.body.appendChild(greetButton);

    greetButton.addEventListener("click", () => {
        alert("Hello, welcome to my personal website!");
    });
});
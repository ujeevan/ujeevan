const quotes = [
    "Believe in yourself!",
    "Keep moving forward.",
    "Dream big and work hard.",
    "Every moment is a fresh beginning.",
    "Success is not final, failure is not fatal."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('wellbeingCanvas');
    const scoreDisplay = document.getElementById('score');
    const ctx = canvas.getContext('2d');

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;

    canvas.addEventListener('click', (event) => {
        // Ottiene la posizione del clic rispetto al canvas
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Calcola la distanza dal centro
        const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));

        let score = 0;
        if (distance <= radius) {
            // Converte la distanza in un punteggio da 0 a 100
            // Il punteggio è inversamente proporzionale alla distanza
            score = Math.round(((radius - distance) / radius) * 100);
        }

        // Aggiorna il punteggio visualizzato
        scoreDisplay.textContent = score;

        // Opzionale: disegna un punto sul canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Resetta il canvas
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
    });
});

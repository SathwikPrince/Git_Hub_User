document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('bubbleCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles = [];
    for (let i = 0; i < 100; i++) {
        bubbles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 15 + 5,
            dx: Math.random() * 1.5 - 0.75,
            dy: Math.random() * 1.5 - 0.75
        });
    }

    function animateBubbles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bubbles.forEach(bubble => {
            bubble.x += bubble.dx;
            bubble.y += bubble.dy;
            if (bubble.x < 0 || bubble.x > canvas.width) bubble.dx *= -1;
            if (bubble.y < 0 || bubble.y > canvas.height) bubble.dy *= -1;
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fill();
            ctx.closePath();
        });
        requestAnimationFrame(animateBubbles);
    }
    animateBubbles();
});

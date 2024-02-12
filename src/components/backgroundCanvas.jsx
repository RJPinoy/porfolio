import React, { useEffect } from 'react';
import { Stars } from '../js/models/stars';

const BackgroundCanvas = () => {
    useEffect(() => {
        const canvasGameplay = document.getElementById('background-canvas');
        const ctx = canvasGameplay.getContext('2d');

        /* ERROR HANDLING */
            // checks if canvas element and its context are properly retrieved
            if (!canvasGameplay || !ctx) {
                console.error("Canvas element or context not found.");
                return;
            }

        canvasGameplay.width = window.innerWidth;
        canvasGameplay.height = window.innerHeight;

        /* STARS */
            const COLOR_STARS = "white";
            const STAR_NUM = 100; // number of stars in the starfield
            const STAR_SIZE = 0.005; // max star size as a fraction of screen width
            const STAR_SPEED = 0.01; // fraction of screen width per second
            let stars = [];

        /* UPDATE  */
        // incorporate delta time into the star movement calculations for smoother animations
            let lastTime = performance.now();

            function updateCanvasBackground() {
                const currentTime = performance.now();
                const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds

                ctx.clearRect(0, 0, canvasGameplay.width, canvasGameplay.height);

                stars.forEach(function (c) {
                    c.draw(ctx);
                    c.update(canvasGameplay.width, canvasGameplay.height, deltaTime);
                });

                lastTime = currentTime;
                requestAnimationFrame(updateCanvasBackground);
            }

            while (stars.length < STAR_NUM) {
                stars.push(new Stars(STAR_SPEED, STAR_SIZE, COLOR_STARS, canvasGameplay.width, canvasGameplay.height)); // Pass canvas width and height
            }

            updateCanvasBackground();

            // Cleanup function to remove event listeners or any other cleanup work
            return () => {
            // Clean up any resources here
            };
    }, []);

    return <canvas id="background-canvas"></canvas>;
};

export default BackgroundCanvas;
"use client";

import { useEffect, useRef, useState } from "react";

interface Point {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const pointsRef = useRef<Point[]>([]);
    const animationRef = useRef<number>(0);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        checkTheme();

        // Watch for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 2; // Cover hero + about sections
            initPoints();
        };

        const initPoints = () => {
            const points: Point[] = [];
            const spacing = 60;
            const cols = Math.ceil(canvas.width / spacing) + 1;
            const rows = Math.ceil(canvas.height / spacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    points.push({
                        x: i * spacing,
                        y: j * spacing,
                        originX: i * spacing,
                        originY: j * spacing,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
            pointsRef.current = points;
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const points = pointsRef.current;
            const maxDist = 150;
            const pushStrength = 40;

            // Update points
            for (const point of points) {
                const dx = mouse.x - point.x;
                const dy = mouse.y - point.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist && dist > 0) {
                    const force = (1 - dist / maxDist) * pushStrength;
                    point.vx -= (dx / dist) * force * 0.1;
                    point.vy -= (dy / dist) * force * 0.1;
                }

                // Spring back to origin
                const springX = point.originX - point.x;
                const springY = point.originY - point.y;
                point.vx += springX * 0.03;
                point.vy += springY * 0.03;

                // Damping
                point.vx *= 0.92;
                point.vy *= 0.92;

                point.x += point.vx;
                point.y += point.vy;
            }

            // Draw connections
            const connectionDist = 80;

            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const p1 = points[i];
                    const p2 = points[j];
                    const dx = p2.x - p1.x;
                    const dy = p2.y - p1.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDist) {
                        const alpha = (1 - dist / connectionDist) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = isDark
                            ? `rgba(168, 162, 158, ${alpha})`
                            : `rgba(87, 83, 78, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            // Draw points
            for (const point of points) {
                const dx = point.x - point.originX;
                const dy = point.y - point.originY;
                const displacement = Math.sqrt(dx * dx + dy * dy);
                const size = 1.5 + displacement * 0.05;
                const alpha = 0.3 + displacement * 0.02;

                ctx.beginPath();
                ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(168, 162, 158, ${Math.min(alpha, 0.6)})`
                    : `rgba(87, 83, 78, ${Math.min(alpha, 0.6)})`;
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY,
            };
        };

        resize();
        animate();

        window.addEventListener("resize", resize);
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", resize);
            document.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full pointer-events-none z-0"
            style={{ height: "200vh" }}
        />
    );
}

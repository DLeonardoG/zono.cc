import { useEffect } from "react";

export function useScrollFadeBasic(rootSelector: string = "#scroll-root") {
  useEffect(() => {
    const root = document.querySelector(rootSelector) as HTMLElement | null;
    if (!root) return;

    const sections = Array.from(
      root.querySelectorAll<HTMLElement>("[data-fade-section]")
    );

    if (sections.length === 0) return;

    // Aseguramos stacking limpio (current arriba, next abajo)
    sections.forEach((sec, idx) => {
      sec.style.zIndex = String(sections.length - idx); // primera más arriba
      sec.style.opacity = "1";
    });

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;

        // índice de sección actual
        const i = Math.max(0, Math.min(sections.length - 1, Math.floor(y / vh)));
        // progreso de 0..1 dentro de esa sección
        const p = Math.max(0, Math.min(1, (y - i * vh) / vh));

        // Resetea todo a opacidad 1 por defecto (barato)
        for (let k = 0; k < sections.length; k++) {
          sections[k].style.opacity = "1";
        }

        // Crossfade solo entre la actual y la siguiente
        const current = sections[i];
        const next = sections[i + 1];

        if (current) current.style.opacity = (1 - p).toFixed(4);
        if (next) next.style.opacity = p.toFixed(4);

        ticking = false;
      });
    };

    // Corre una vez para estado inicial
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [rootSelector]);
}

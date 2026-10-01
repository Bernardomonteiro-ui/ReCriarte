/** Cursor "VER PROJETO" sobre itens do portfólio — só com mouse. */
export function initCursor() {
  const tag = document.querySelector<HTMLElement>('[data-cursor]');
  if (!tag || window.matchMedia('(hover: none)').matches) return;
  let x = 0, y = 0, cx = 0, cy = 0, raf = 0, active = false;
  const loop = () => {
    cx += (x - cx) * 0.2;
    cy += (y - cy) * 0.2;
    tag.style.translate = `${cx}px ${cy}px`;
    raf = active || Math.abs(x - cx) > 0.5 ? requestAnimationFrame(loop) : 0;
  };
  document.addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    const t = (e.target as Element).closest('[data-cursor-target]');
    active = !!t;
    tag.classList.toggle('is-on', active);
    if (t) { cx = x; cy = y; }
  });
}

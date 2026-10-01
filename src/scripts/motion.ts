/**
 * Motion system da ReCriarte.
 *
 *  data-reveal            → sobe + aparece
 *  data-reveal="clip"     → revela de baixo para cima (clip-path)
 *  data-reveal="clip-x"   → revela da esquerda para a direita
 *  data-split             → linhas (.line-inner) entram em sequência
 *  data-parallax="0.15"   → deslocamento vertical suave com o scroll
 *  data-delay="0.2"       → atraso opcional
 *
 * Regra: toda animação tem função — guiar, revelar, conectar.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const isTouch = () => window.matchMedia('(hover: none)').matches;
export const motionOn = () => document.documentElement.classList.contains('motion');

const EASE = 'expo.out';

function delayOf(el: Element) {
  return parseFloat((el as HTMLElement).dataset.delay ?? '0') || 0;
}

function reveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.closest('[data-hero]')) return; // o hero tem timeline própria
    const kind = el.dataset.reveal;
    const from: gsap.TweenVars =
      kind === 'clip'
        ? { clipPath: 'inset(100% 0 0 0)' }
        : kind === 'clip-x'
          ? { clipPath: 'inset(0 100% 0 0)' }
          : { opacity: 0, y: 28 };
    const to: gsap.TweenVars =
      kind === 'clip'
        ? { clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'expo.inOut' }
        : kind === 'clip-x'
          ? { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'expo.inOut' }
          : { opacity: 1, y: 0, duration: 1.1, ease: EASE };
    gsap.fromTo(el, from, {
      ...to,
      delay: delayOf(el),
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
}

function splits() {
  gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
    if (el.closest('[data-hero]')) return;
    const lines = el.querySelectorAll('.line-inner');
    gsap.fromTo(
      lines,
      { y: 0, yPercent: 105 },
      {
        y: 0,
        yPercent: 0,
        duration: 1.2,
        ease: EASE,
        stagger: 0.09,
        delay: delayOf(el),
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      },
    );
  });
}

function parallax() {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = parseFloat(el.dataset.parallax ?? '0.15');
    gsap.fromTo(
      el,
      { yPercent: -amount * 50 },
      {
        yPercent: amount * 50,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}

let started = false;
export function initMotion() {
  if (started) return;
  started = true;
  (window as unknown as { __motionReady: boolean }).__motionReady = true;
  if (!motionOn()) return;
  reveals();
  splits();
  parallax();
  // fontes e imagens mudam alturas → recalcula
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}

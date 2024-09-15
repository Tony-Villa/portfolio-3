export function scrollIntoView({ target }: {target: any}) {
  const el = document.querySelector(target.getAttribute('href'));
  if (!el) return;
  el.scrollIntoView({
    behavior: 'smooth',
    scrollMarginTop: 10,
  });
}
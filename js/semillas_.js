// Toggle visual "active" state on the 9 image buttons
document.querySelectorAll('.img-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const isActive = btn.getAttribute('aria-pressed') === 'true';
    document.querySelectorAll('.img-btn').forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', (!isActive).toString());
  });
});


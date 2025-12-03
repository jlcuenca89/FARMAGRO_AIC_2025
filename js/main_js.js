// ... existing code ...
// Set background image from data attribute or ?bg=<url>
const frame = document.querySelector(".frame");
if (frame) {
  const params = new URLSearchParams(location.search);
  const qp = params.get("bg");
  const src = qp || frame.dataset.bg || "";
  if (src) frame.style.backgroundImage = `url("${src}")`;
}

// Optional: focus style for keyboard users
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") document.documentElement.classList.add("show-focus");
}, { once: true });
// ... existing code ...


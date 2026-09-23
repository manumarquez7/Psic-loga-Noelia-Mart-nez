document.querySelectorAll(".image-with-fallback").forEach(image => {
  image.addEventListener("error", () => { image.hidden = true; });
  if (image.complete && image.naturalWidth === 0) image.hidden = true;
});

const menu = document.querySelector(".mobile-menu");
if (menu) {
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => { menu.open = false; });
  });
  document.addEventListener("click", event => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") menu.open = false;
  });
}

const form = document.querySelector("#contact-form");
const button = form?.querySelector("button");

button?.addEventListener("click", () => {
  const name = form.querySelector("input")?.value?.trim();
  if (!name) {
    alert("Please enter your name before sending.");
    return;
  }

  alert("Thanks, " + name + ". This demo form is ready to connect to your preferred form service.");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
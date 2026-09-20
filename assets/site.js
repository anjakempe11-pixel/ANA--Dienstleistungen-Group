const page = document.body.dataset.page || "start";
const navItems = [["start","Startseite","index.html"],["leistungen","Gebäudereinigung","leistungen.html"],["security","Sicherheitsdienst","security.html"],["unternehmen","Unternehmen","unternehmen.html"],["kontakt","Kontakt","kontakt.html"]];
const brand = `<span class="brand-word">ANA</span><span class="brand-sub">Dienstleistungen Group</span>`;
const header = document.querySelector("[data-site-header]");
if (header) {
  header.innerHTML = `<a class="skip-link" href="#inhalt">Zum Inhalt</a><div class="topline"><div class="shell topline-inner"><span>Thüringenweit im Einsatz</span><span>Sauberkeit · Sicherheit · Verlässlichkeit</span></div></div><div class="shell nav-wrap"><a class="brand" href="index.html" aria-label="ANA Dienstleistungen Group – Startseite">${brand}</a><button class="menu-button" type="button" aria-expanded="false" aria-controls="hauptnavigation"><span></span><span></span><span></span><span class="sr-only">Menü öffnen</span></button><nav id="hauptnavigation" aria-label="Hauptnavigation">${navItems.map(([id,label,href]) => `<a ${id === page ? 'aria-current="page"' : ""} href="${href}">${label}</a>`).join("")}<a class="nav-cta" href="kontakt.html">Anfrage stellen</a></nav></div>`;
}
const footer = document.querySelector("[data-site-footer]");
if (footer) {
  footer.innerHTML = `<div class="shell footer-grid"><div><a class="brand footer-brand" href="index.html">${brand}</a><p>Gebäudereinigung und Sicherheitsdienst unter einem Dach – professionell und thüringenweit.</p></div><div><h2>Geschäftsbereiche</h2><a href="leistungen.html">Gebäudereinigung</a><a href="security.html">Sicherheitsdienst</a><a href="unternehmen.html">Unternehmen</a></div><div><h2>Kontakt</h2><p><a href="tel:+4917631001041">+49 176 31001041</a><br><a href="mailto:ana-reinigung@web.de">ana-reinigung@web.de</a><br><span class="placeholder">Anschrift ergänzen</span></p></div><div><h2>Rechtliches</h2><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></div></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} ANA Dienstleistungen Group</span><span>Thüringenweit für Sie da</span></div>`;
}
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#hauptnavigation");
menuButton?.addEventListener("click", () => { const open = menuButton.getAttribute("aria-expanded") === "true"; menuButton.setAttribute("aria-expanded", String(!open)); navigation?.classList.toggle("is-open", !open); });
document.querySelectorAll("[data-contact-form]").forEach((form) => { form.addEventListener("submit", (event) => { event.preventDefault(); const notice = form.querySelector("[data-form-notice]"); if (notice) notice.textContent = "Vielen Dank. In dieser Vorschau wird die Anfrage noch nicht versendet. Nach Einrichtung des Formularversands kann die Funktion freigeschaltet werden."; }); });
const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); }); }, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

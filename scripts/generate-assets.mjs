import fs from "fs";
import path from "path";

const projects = [
  ["kprverse", "KPRVERSE", "#5eead4"],
  ["socialcash", "SocialCash", "#67e8f9"],
  ["investouae", "Investo UAE", "#a5b4fc"],
  ["investoinvestment", "Investo", "#93c5fd"],
  ["carsnowautoservices", "CarsNow Auto", "#fcd34d"],
  ["carsnow", "CarsNow", "#fbbf24"],
  ["upbrandindia", "UpBrand", "#f9a8d4"],
  ["upsportacademy", "UpSport", "#86efac"],
  ["smilecreations", "Smile Creations", "#fda4af"],
  ["raameen", "Raameen", "#c4b5fd"],
  ["fizzi", "Fizzi", "#6ee7b7"],
  ["prestige", "Prestige", "#d4d4d8"],
];

const dir = "public/images/projects";
fs.mkdirSync(dir, { recursive: true });
fs.mkdirSync("public/images/blog", { recursive: true });

for (const [slug, title, color] of projects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#07070a"/>
      <stop offset="55%" stop-color="#0f1418"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.35"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1600" height="1000" fill="url(#g)"/>
  <rect width="1600" height="1000" fill="url(#grid)"/>
  <circle cx="1280" cy="220" r="180" fill="${color}" fill-opacity="0.12"/>
  <circle cx="300" cy="780" r="220" fill="${color}" fill-opacity="0.08"/>
  <text x="96" y="160" fill="rgba(255,255,255,0.45)" font-family="Arial,sans-serif" font-size="28" letter-spacing="8">PROJECT</text>
  <text x="96" y="280" fill="#f4f4f5" font-family="Arial,sans-serif" font-size="84" font-weight="700">${title}</text>
  <text x="96" y="360" fill="rgba(255,255,255,0.55)" font-family="Arial,sans-serif" font-size="28">Ammar Mustafa · Full Stack Delivery</text>
  <rect x="96" y="820" width="220" height="2" fill="${color}"/>
</svg>`;
  fs.writeFileSync(path.join(dir, `${slug}.svg`), svg);
}

for (const [name, label, color] of [
  ["saas", "SaaS Notes", "#5eead4"],
  ["ai", "AI Systems", "#67e8f9"],
]) {
  fs.writeFileSync(
    `public/images/blog/${name}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#07070a"/><circle cx="1000" cy="120" r="160" fill="${color}" fill-opacity="0.18"/><text x="72" y="320" fill="#fff" font-family="Arial" font-size="64" font-weight="700">${label}</text></svg>`,
  );
}

console.log("Generated project and blog assets");

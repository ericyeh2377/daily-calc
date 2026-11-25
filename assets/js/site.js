document.querySelectorAll('[data-year]').forEach(function (node) { node.textContent = String(new Date().getFullYear()); });

const lastUpdated = "2026-11-25T18:37+08:00";
const brand = document.querySelector(".top > .brand");

if (brand) {
  const identity = document.createElement("div");
  identity.className = "site-identity";
  const updated = document.createElement("div");
  updated.className = "site-updated";
  const timestamp = document.createElement("time");
  timestamp.dateTime = lastUpdated;
  timestamp.textContent = lastUpdated.slice(0, 16).replace("T", " ");
  updated.append("上次更新 ", timestamp, "（台灣時間）");
  brand.before(identity);
  identity.append(brand, updated);
}

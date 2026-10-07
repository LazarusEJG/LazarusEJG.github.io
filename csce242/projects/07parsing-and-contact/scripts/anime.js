document.getElementById("hamburger-btn").onclick = () => {
    document.getElementById("icon-menu").classList.toggle("hidden")
    document.getElementById("icon-close").classList.toggle("hidden")
    document.getElementById("mobile-menu").classList.toggle("hidden")
}

const base_url = "https://lazarusejg.github.io/csce242/projects/07parsing-and-contact/json/titles.json";

const grid = document.querySelector(".library-grid");

const getTitles = async () => {
  const response = await fetch(base_url);
  return response.json();
};

const showTitles = async () => {
  const titles = await getTitles();

  const animeTitles = titles.filter(title => title.type === "Anime");

  animeTitles.forEach((title) => {
    grid.append(libraryCard(title));
  });
};

const libraryCard = (title) => {
  const a = document.createElement("a");
  a.classList.add("library-card");
  a.href = `${title.href}?id=${title.id}`;
  a.dataset.status = title.status;
  a.append(cardCoverWrap(title), cardInfo(title));
  return a;
};

const cardCoverWrap = (title) => {
  const div = document.createElement("div");
  div.classList.add("card-cover-wrap");

  const img = document.createElement("img");
  img.src = title.cover;
  img.alt = `${title.name} cover`;

  const overlay = document.createElement("div");
  overlay.classList.add("card-score-overlay");

  const score = document.createElement("span");
  score.classList.add("violet");
  score.textContent = Number(title.rating).toFixed(1);
  overlay.append(score);

  const tag = document.createElement("span");
  tag.classList.add("card-status-tag");
  tag.textContent = title.status;
  if (title.status === "Reading" || title.status === "Watching") {
    tag.classList.add("in-progress");
  }

  div.append(img, overlay, tag);
  return div;
};

const cardInfo = (title) => {
  const info = document.createElement("div");
  info.classList.add("card-info");

  const titlen = document.createElement("p");
  titlen.textContent = title.name;

  const data = document.createElement("small");
  data.textContent = `${title.year} | ${title.count}`;

  info.append(titlen, data);
  return info;
};

showTitles();

const countEl = document.querySelector(".filter-count");
const filterBar = document.querySelector(".filter-bar");


const FILTER_MAP = {
  "All": "",
  "Completed": "Completed",
  "Watching": "Watching",
  "Plan to Watch": "Plan to Watch",
  "Dropped": "Dropped",
};

function applyFilter(label) {
  const status = FILTER_MAP[label] ?? "";
  let visible = 0;

  grid.querySelectorAll(".library-card").forEach(card => {
    const show = status === "" || card.dataset.status === status;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });

  countEl.textContent = `${visible} ${visible === 1 ? "entry" : "entries"}`;
}

filterBar.addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  applyFilter(btn.textContent.trim());
});


applyFilter("All");
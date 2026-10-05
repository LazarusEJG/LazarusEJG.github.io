document.getElementById("hamburger-btn").onclick = () => {
    document.getElementById("icon-menu").classList.toggle("hidden")
    document.getElementById("icon-close").classList.toggle("hidden")
    document.getElementById("mobile-menu").classList.toggle("hidden")
}

class Titles {
  constructor(name, year, count, type, rating, status, cover, href = "/selected.html") {
    this.name = name;
    this.year = year;
    this.count = count;
    this.type = type;
    this.rating = rating;
    this.status = status;
    this.cover = cover;
    this.href = href;
  }

  get libraryCard() {
    const a = document.createElement("a");
    a.classList.add("library-card");
    a.href = this.href;
    a.dataset.status = this.status;
    a.append(this.cardCoverWrap(), this.cardInfo());
    return a;
  }

  cardCoverWrap() {
    const div = document.createElement("div");
    div.classList.add("card-cover-wrap");

    const img = document.createElement("img");
    img.src = this.cover;
    img.alt = `${this.name} cover`;

    const overlay = document.createElement("div");
    overlay.classList.add("card-score-overlay");

    const score = document.createElement("span");
    score.classList.add("violet");
    score.textContent = Number(this.rating).toFixed(1);
    overlay.append(score);

    const tag = document.createElement("span");
    tag.classList.add("card-status-tag");
    tag.textContent = this.status;
    if (this.status === "Reading" || this.status === "Watching") {
      tag.classList.add("in-progress");
    }

    div.append(img, overlay, tag);
    return div;
  }

  cardInfo() {
    const info = document.createElement("div");
    info.classList.add("card-info");

    const title = document.createElement("p");
    title.textContent = this.name;

    const data = document.createElement("small");
    data.textContent = `${this.year} | ${this.count}`;

    info.append(title, data);
    return info;
  }
}

const mpTitles = [
  new Titles("Vivy -Flourite Eye's Song", 2021, "13 ep", "Anime", 10, "Completed", "images/vivy-thumb.png"),
  new Titles("Bleach: Thousand Year Blood War", 2022, "50 ep", "Anime", 10, "Watching", "images/bleachtybw-thumb.png"),
  new Titles("Bleach", 2004, "366 ep", "Anime", 10, "Completed", "images/bleach-thumb.png"),
  new Titles("Fullmetal Alchemist: Brotherhood", 2009, "64 ep", "Anime", 9.5, "Completed", "images/fmabrotherhood-thumb.png"),
  new Titles("Attack on Titan", 2013, "87 ep", "Anime", 9.5, "Completed", "images/aot-thumb.png"),
  new Titles("Steins;Gate", 2011, "24 ep", "Anime", 8.5, "Completed", "images/steinsgate-thumb.png"),
  new Titles("Vinland Saga", 2019, "48 ep", "Anime", 8, "Completed", "images/vinlandsaga-thumb.png"),
];

const grid = document.querySelector(".library-grid");
const countEl = document.querySelector(".filter-count");
const filterBar = document.querySelector(".filter-bar");


mpTitles.forEach(t => grid.append(t.libraryCard));


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
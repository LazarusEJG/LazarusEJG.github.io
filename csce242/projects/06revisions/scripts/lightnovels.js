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
    score.classList.add("emerald");
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
  new Titles("So I'm a Spider So what?", 2015, "16 vol", "Light Novel", 10, "Completed", "images/kumodesu-thumb.png"),
  new Titles("Didn't I Say to Make My Abilites Average in the Next Life?!", 2016, "20 vol", "Light Novel", 8.7, "Reading", "images/diatmmavnl-thumb.png"),
  new Titles("Arifureta: From Commonplace to World's Strongest", 2015, "13 vol", "Light Novel", 8.5, "Reading", "images/arifureta-thumb.png"),
];

const grid = document.querySelector(".library-grid");
const countEl = document.querySelector(".filter-count");
const filterBar = document.querySelector(".filter-bar");


mpTitles.forEach(t => grid.append(t.libraryCard));


const FILTER_MAP = {
  "All": "",
  "Completed": "Completed",
  "Reading": "Reading",
  "Plan to Read": "Plan to Read",
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
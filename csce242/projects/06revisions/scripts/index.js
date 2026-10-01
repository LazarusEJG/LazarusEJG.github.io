aValue = document.getElementById("ani-value").innerHTML = 100;
mValue = document.getElementById("manga-value").innerHTML = 50;
lValue = document.getElementById("ln-value").innerHTML = 20;
document.getElementById("stats-total").innerHTML = aValue+mValue+lValue+" total";

document.getElementById("hamburger-btn").onclick = () => {
    document.getElementById("icon-menu").classList.toggle("hidden")
    document.getElementById("icon-close").classList.toggle("hidden")
    document.getElementById("mobile-menu").classList.toggle("hidden")
}

const topPicksTable = document.getElementById("picks-table")

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
    this.rank = 0;
  }

  get item() {
    const a = document.createElement("a");
    a.classList.add("picks-row", "entry-row", this.rank % 2 === 0 ? "odd" : "even");
    a.href = this.href;
    a.append(
      this.titleRank(),
      this.titleCover(),
      this.titleName(),
      this.titleType(),
      this.titleRating(),
      this.titleStatus(),
      this.titleRating(true),
    );

    return a;
  }

  titleRank() {
    const rank = document.createElement("span");
    rank.classList.add("col-rank");
    rank.textContent = String(this.rank).padStart(2, "0");
    return rank;
  }

  titleCover() {
    const thumbnail = document.createElement("span");
    const image = document.createElement("img");
    thumbnail.classList.add("col-thumb");
    image.src = this.cover;
    image.alt = "";
    thumbnail.append(image);
    return thumbnail;
  }

  titleName() {
    const title = document.createElement("span");
    const name = document.createElement("p");
    title.classList.add("col-title");
    name.textContent = this.name;
    title.append(name, this.titleCount());
    return title;
  }

  titleYear() {
    return document.createTextNode(String(this.year));
  }

  titleCount() {
    const details = document.createElement("small");
    details.append(`${this.count} · `, this.titleYear());
    return details;
  }

  titleType() {
    const type = document.createElement("span");
    const tag = document.createElement("span");
    const tagClass = {
      Anime: "tag-anime",
      Manga: "tag-manga",
      "Light Novel": "tag-ln",
    }[this.type];

    type.classList.add("col-type", "desktop-only");
    tag.classList.add("tag", tagClass);
    tag.textContent = this.type;
    type.append(tag);
    return type;
  }

  titleRating(mobile = false) {
    const rating = document.createElement("span");
    rating.classList.add(mobile ? "col-score-mobile" : "col-score", mobile ? "mobile-only" : "desktop-only");
    rating.textContent = Number(this.rating).toFixed(1);
    return rating;
  }

  titleStatus() {
    const status = document.createElement("span");
    status.classList.add("col-status", "desktop-only");
    if (this.status === "Reading" || this.status === "Watching") {
      status.classList.add("in-progress");
    }
    status.textContent = this.status;
    return status;
  }
}

const mpTitles = [
  new Titles("Fullmetal Alchemist: Brotherhood", 2009, "64 ep", "Anime", 10, "Completed", "https://images.unsplash.com/photo-1780871766050-d7db65bc618f?w=60&h=80&fit=crop&auto=format"),
  new Titles("Steins;Gate", 2011, "24 ep", "Anime", 10, "Completed", "https://images.unsplash.com/photo-1617293134227-0ec282f3ed89?w=60&h=80&fit=crop&auto=format"),
  new Titles("Vinland Saga", 2019, "48 ep", "Anime", 9.5, "Completed", "https://images.unsplash.com/photo-1586968272237-a3d597214887?w=60&h=80&fit=crop&auto=format"),
  new Titles("Attack on Titan", 2013, "87 ep", "Anime", 9.5, "Completed", "https://images.unsplash.com/photo-1783937225803-1fad4eb202f5?w=60&h=80&fit=crop&auto=format"),
  new Titles("Mushishi", 2005, "46 ep", "Anime", 9, "Completed", "https://images.unsplash.com/photo-1556811246-b2d9eb3fbad0?w=60&h=80&fit=crop&auto=format"),
  new Titles("Berserk", 1989, "364 ch", "Manga", 9, "Reading", "https://images.unsplash.com/photo-1763732397953-7866a2dd8289?w=60&h=80&fit=crop&auto=format"),
  new Titles("Hunter x Hunter (2011)", 2011, "148 ep", "Anime", 9, "Completed", "https://images.unsplash.com/photo-1770374735069-5acd96acd36b?w=60&h=80&fit=crop&auto=format"),
  new Titles("Dungeon Meshi", 2014, "97 ch", "Manga", 9, "Completed", "https://images.unsplash.com/photo-1763315371250-4ecc8bcd0638?w=60&h=80&fit=crop&auto=format"),
  new Titles("Made in Abyss", 2017, "26 ep", "Anime", 8.5, "Completed", "https://images.unsplash.com/photo-1639634252346-0a27c7d168dc?w=60&h=80&fit=crop&auto=format"),
  new Titles("Re:Zero", 2012, "38 vol", "Light Novel", 8.5, "Reading", "https://images.unsplash.com/photo-1763732397784-c5ff2651d40c?w=60&h=80&fit=crop&auto=format"),
];

const picksTable = document.querySelector("#picks-table");

if (picksTable) {
  mpTitles.forEach((title, index) => {
    title.rank = index + 1;
    picksTable.append(title.item);
  });
}
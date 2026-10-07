const base_url = "https://lazarusejg.github.io/csce242/projects/07parsing-and-contact/json/titles.json";

const getTitles = async () => {
  const response = await fetch(base_url);
  return response.json();
};

const updateAllValues = async () => {
  await updateAnimeValue();
  document.getElementById("ani-value").innerHTML = aValue;
  document.getElementById("anime-stat").innerHTML = aValue;

  document.getElementById("anime-stat-C").innerHTML = aValueC;
  document.getElementById("anime-stat-c-bar").style.width = NaN || 0 ? `0%` : `${aValueC / aValue * 100}%`
  document.getElementById("anime-stat-W").innerHTML = aValueW;
  document.getElementById("anime-stat-w-bar").style.width = NaN || 0 ? `0%` : `${aValueW / aValue * 100}%`
  document.getElementById("anime-stat-P").innerHTML = aValueP;
  document.getElementById("anime-stat-p-bar").style.width = NaN || 0 ? `0%` : `${aValueP / aValue * 100}%`
  document.getElementById("anime-stat-D").innerHTML = aValueD;
  document.getElementById("anime-stat-d-bar").style.width = NaN || 0 ? `0%` : `${aValueD / aValue * 100}%`

  await updateLightNovelValue();
  document.getElementById("ln-value").innerHTML = lValue;
  document.getElementById("lightnovel-stat").innerHTML = lValue;

  document.getElementById("lightnovel-stat-C").innerHTML = lValueC;
  document.getElementById("lightnovel-stat-c-bar").style.width = NaN || 0 ? `0%` : `${lValueC / lValue * 100}%`
  document.getElementById("lightnovel-stat-R").innerHTML = lValueR;
  document.getElementById("lightnovel-stat-r-bar").style.width = NaN || 0 ? `0%` : `${lValueR / lValue * 100}%`
  document.getElementById("lightnovel-stat-P").innerHTML = lValueP;
  document.getElementById("lightnovel-stat-p-bar").style.width = NaN || 0 ? `0%` : `${lValueP / lValue * 100}%`
  document.getElementById("lightnovel-stat-D").innerHTML = lValueD;
  document.getElementById("lightnovel-stat-d-bar").style.width = NaN || 0 ? `0%` : `${lValueD / lValue * 100}%`

  await updateMangaValue();
  document.getElementById("manga-value").innerHTML = mValue;
  document.getElementById("manga-stat").innerHTML = mValue;

  document.getElementById("manga-stat-C").innerHTML = mValueC;
  document.getElementById("manga-stat-c-bar").style.width = NaN || 0 ? `0%` : `${mValueC / mValue * 100}%`
  document.getElementById("manga-stat-R").innerHTML = mValueR;
  document.getElementById("manga-stat-r-bar").style.width = NaN || 0 ? `0%` : `${mValueR / mValue * 100}%`
  document.getElementById("manga-stat-P").innerHTML = mValueP;
  document.getElementById("manga-stat-p-bar").style.width = NaN || 0 ? `0%` : `${mValueP / mValue * 100}%`
  document.getElementById("manga-stat-D").innerHTML = mValueD;
  document.getElementById("manga-stat-d-bar").style.width = NaN || 0 ? `0%` : `${mValueD / mValue * 100}%`

  document.getElementById("stats-total").innerHTML = aValue + mValue + lValue + " total";
};

const updateAnimeValue = async () => {
  const titles = await getTitles();
  const animeTitles = titles.filter(title => title.type === "Anime");
  const animeTitlesC = titles.filter(title => title.type === "Anime" && title.status === "Completed");
  const animeTitlesW = titles.filter(title => title.type === "Anime" && title.status === "Watching");
  const animeTitlesP = titles.filter(title => title.type === "Anime" && title.status === "Plan to Watch");
  const animeTitlesD = titles.filter(title => title.type === "Anime" && title.status === "Dropped");
  aValue = animeTitles.length;
  aValueC = animeTitlesC.length;
  aValueW = animeTitlesW.length;
  aValueP = animeTitlesP.length;
  aValueD = animeTitlesD.length;
};

const updateLightNovelValue = async () => {
  const titles = await getTitles();
  const lightNoveTitles = titles.filter(title => title.type === "Light Novel");
  const lightNoveTitlesC = titles.filter(title => title.type === "Light Novel" && title.status === "Completed");
  const lightNoveTitlesR = titles.filter(title => title.type === "Light Novel" && title.status === "Reading");
  const lightNoveTitlesP = titles.filter(title => title.type === "Light Novel" && title.status === "Plan to Read");
  const lightNoveTitlesD = titles.filter(title => title.type === "Light Novel" && title.status === "Dropped");
  lValue = lightNoveTitles.length;
  lValueC = lightNoveTitlesC.length;
  lValueR = lightNoveTitlesR.length;
  lValueP = lightNoveTitlesP.length;
  lValueD = lightNoveTitlesD.length;
};

const updateMangaValue = async () => {
  const titles = await getTitles();
  const mangaTitles = titles.filter(title => title.type === "Manga");
  const mangaTitlesC = titles.filter(title => title.type === "Manga" && title.status === "Completed");
  const mangaTitlesR = titles.filter(title => title.type === "Manga" && title.status === "Reading");
  const mangaTitlesP = titles.filter(title => title.type === "Manga" && title.status === "Plan to Read");
  const mangaTitlesD = titles.filter(title => title.type === "Manga" && title.status === "Dropped");
  mValue = mangaTitles.length;
  mValueC = mangaTitlesC.length;
  mValueR = mangaTitlesR.length;
  mValueP = mangaTitlesP.length;
  mValueD = mangaTitlesD.length;
};

updateAllValues();



document.getElementById("hamburger-btn").onclick = () => {
    document.getElementById("icon-menu").classList.toggle("hidden")
    document.getElementById("icon-close").classList.toggle("hidden")
    document.getElementById("mobile-menu").classList.toggle("hidden")
}

const topPicksTable = document.getElementById("picks-table")


class Titles {
  constructor(name, year, count, type, rating, status, cover, href = "selected.html") {
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
    details.append(`${this.count} | `, this.titleYear());
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
  new Titles("Vivy -Flourite Eye's Song", 2021, "13 ep", "Anime", 10, "Completed", "images/vivy-thumb.png"),
  new Titles("So I'm a Spider So what?", 2015, "16 vol", "Light Novel", 10, "Completed", "images/kumodesu-thumb.png"),
  new Titles("Bleach: Thousand Year Blood War", 2022, "50 ep", "Anime", 10, "Watching", "images/bleachtybw-thumb.png"),
  new Titles("That Time I got Reincarnated as a Slime", 2015, "146 ch", "Manga", 10, "Reading", "images/tensura-tumb.png"),
  new Titles("Bleach", 2004, "366 ep", "Anime", 10, "Completed", "images/bleach-thumb.png"),
  new Titles("Berserk", 1989, "364 ch", "Manga", 9.7, "Reading", "images/berserk-thumb.png"),
  new Titles("Fullmetal Alchemist: Brotherhood", 2009, "64 ep", "Anime", 9.5, "Completed", "images/fmabrotherhood-thumb.png"),
  new Titles("Attack on Titan", 2013, "87 ep", "Anime", 9.5, "Completed", "images/aot-thumb.png"),
  new Titles("Steins;Gate", 2011, "24 ep", "Anime", 8.5, "Completed", "images/steinsgate-thumb.png"),
  new Titles("Vinland Saga", 2019, "48 ep", "Anime", 8, "Completed", "images/vinlandsaga-thumb.png"),
];

const picksTable = document.querySelector("#picks-table");

if (picksTable) {
  mpTitles.forEach((title, index) => {
    title.rank = index + 1;
    picksTable.append(title.item);
  });
}
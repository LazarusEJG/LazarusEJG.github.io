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

const picksTable = document.querySelector("#picks-table");

const topPickIds = [
  "vivy-flourite-eyes-song",
  "so-im-a-spider-so-what",
  "bleach-tybw",
  "tensura",
  "bleach",
  "berserk",
  "fullmetal-alchemist-brotherhood",
  "attack-on-titan",
  "steins-gate",
  "vinland-saga",
];

const titleRank = (title) => {
  const rank = document.createElement("span");
  rank.classList.add("col-rank");
  rank.textContent = String(title.rank).padStart(2, "0");
  return rank;
};

const titleCover = (title) => {
  const thumbnail = document.createElement("span");
  const image = document.createElement("img");
  thumbnail.classList.add("col-thumb");
  image.src = title.cover;
  image.alt = `${title.name} cover`;
  thumbnail.append(image);
  return thumbnail;
};

const titleYear = (title) => {
  return document.createTextNode(String(title.year));
};

const titleCount = (title) => {
  const details = document.createElement("small");
  details.append(`${title.count} | `, titleYear(title));
  return details;
};

const titleName = (title) => {
  const wrapper = document.createElement("span");
  const name = document.createElement("p");
  wrapper.classList.add("col-title");
  name.textContent = title.name;
  wrapper.append(name, titleCount(title));
  return wrapper;
};

const titleType = (title) => {
  const wrapper = document.createElement("span");
  const tag = document.createElement("span");
  const tagClass = {
    Anime: "tag-anime",
    Manga: "tag-manga",
    "Light Novel": "tag-ln",
  }[title.type];

  wrapper.classList.add("col-type", "desktop-only");
  tag.classList.add("tag", tagClass);
  tag.textContent = title.type;
  wrapper.append(tag);
  return wrapper;
};

const titleRating = (title, mobile = false) => {
  const rating = document.createElement("span");
  rating.classList.add(mobile ? "col-score-mobile" : "col-score", mobile ? "mobile-only" : "desktop-only");
  rating.textContent = Number(title.rating).toFixed(1);
  return rating;
};

const titleStatus = (title) => {
  const status = document.createElement("span");
  status.classList.add("col-status", "desktop-only");
  if (title.status === "Reading" || title.status === "Watching") {
    status.classList.add("in-progress");
  }
  status.textContent = title.status;
  return status;
};

const item = (title) => {
  const a = document.createElement("a");
  a.classList.add("picks-row", "entry-row", title.rank % 2 === 0 ? "odd" : "even");
  a.href = `selected.html?id=${title.id}`;
  a.append(
    titleRank(title),
    titleCover(title),
    titleName(title),
    titleType(title),
    titleRating(title),
    titleStatus(title),
    titleRating(title, true),
  );
  return a;
};

const showTopPicks = async () => {
  if (!picksTable) return;

  const titles = await getTitles();

  topPickIds.forEach((id, index) => {
    const match = titles.find((t) => t.id === id);
    if (!match) {
      console.warn(`Top pick id not found in JSON: ${id}`);
      return;
    }
    match.rank = index + 1;
    picksTable.append(item(match));
  });
};

showTopPicks();
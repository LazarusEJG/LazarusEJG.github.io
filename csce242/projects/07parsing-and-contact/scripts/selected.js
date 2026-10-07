document.getElementById("hamburger-btn").onclick = () => {
    document.getElementById("icon-menu").classList.toggle("hidden")
    document.getElementById("icon-close").classList.toggle("hidden")
    document.getElementById("mobile-menu").classList.toggle("hidden")
}

const base_url = "https://lazarusejg.github.io/csce242/projects/07parsing-and-contact/json/titles.json";

const params = new URLSearchParams(window.location.search);

const pageid = params.get("id");

const getTitles = async () => {
  const response = await fetch(base_url);
  return response.json();
};

const findMatch = async () => {
    titles = await getTitles();
    const match = titles.find(title => title.id === pageid)
     const tagClass = {
      Anime: "tag-anime",
      Manga: "tag-manga",
      "Light Novel": "tag-ln",
    }[match.type]
    console.log(match)
    if (match == undefined) {
        window.location.href = "index.html"
    } else {
        document.getElementById("detail-cover").src = match.coverfull;
        document.getElementById("detail-score-value").innerHTML = match.rating;
        document.getElementById("detail-title").innerHTML = match.name;
        document.getElementById("data-year").innerHTML = match.year;
        document.getElementById("data-count").innerHTML = match.count;
        document.getElementById("data-status").innerHTML = match.status;
        document.getElementById("data-genre").innerHTML = match.genre;
        document.getElementById("detail-description").innerHTML = match.description;
        document.getElementById("back-btn").innerHTML = `Back to ${match.type === "Light Novel" ? "Light Novels" : match.type}`;
        document.getElementById("back-btn").href = `${match.type === "Light Novel" ? "lightnovels" : (match.type).toLowerCase()}.html`
    }
    document.getElementById("detail-tag").classList.add(tagClass)
    document.getElementById("detail-tag").innerHTML = match.type;
}

findMatch();
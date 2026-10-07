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
    console.log(match)
    if (match == undefined) {
        window.location.href = "index.html"
    }
}

findMatch();





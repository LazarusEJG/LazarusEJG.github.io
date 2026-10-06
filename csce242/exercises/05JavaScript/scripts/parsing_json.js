//https://portiaportia.github.io/json/fish.json

const base_url = "https://portiaportia.github.io/json/fish.json";

const getFish = async () => {
    const response = await fetch(base_url);
    return response.json();
};

const showFish = async () => {
    const fishies = await getFish();

    fishies.forEach((fish)=>{
        document.querySelector(".fish-list").append(displayFish(fish));
    });
};

const displayFish = (fish) => {
    const section = document.createElement("section")
    const h3 = document.createElement("h3")
    const p = document .createElement("p")
    section.classList.add("fish");
    h3.append(`${fish.title} V`)
    p.append(`${fish.description}`)
    section.append(h3);
    h3.onclick(()=>{
        p.classList.toggle("hidden");
    });
    

    return section;
}

showFish();

aValue = document.getElementById("ani-value").innerHTML = 100;
mValue = document.getElementById("manga-value").innerHTML = 50;
lValue = document.getElementById("ln-value").innerHTML = 20;
document.getElementById("stats-total").innerHTML = aValue+mValue+lValue+" total";

document.getElementById("hamburger-btn").onclick = () => {
    document.getElementById("icon-menu").classList.toggle("hidden")
    document.getElementById("icon-close").classList.toggle("hidden")
    document.getElementById("mobile-menu").classList.toggle("hidden")
}
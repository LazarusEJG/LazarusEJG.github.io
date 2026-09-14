const drinkselect = document.getElementById("drink-select")

drinkselect.onclick = () => {
    const selecteddrink = drinkselect.value
    document.getElementById("selected-drink-box").innerHTML = "Awesome you chose: "+selecteddrink;
    console.log("drink-select was selected")
};

document.getElementById("sticker-box").onclick = () => {
    document.getElementById("sunglasses").style.visibility = 'visible'
    console.log("sun was clicked")
}

document.getElementById("speech-box").onclick = () => {
    document.getElementById("speech-bubble").style.visibility = 'visible'
    console.log("speech-box was clicked")
}
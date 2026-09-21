document.getElementById("btn-one").onclick = () => {
    document.getElementById("exercise-one").classList.toggle("hidden")
}

document.getElementById("btn-two").onclick = () => {
    document.getElementById("exercise-two").classList.toggle("hidden")
}

setInterval(()=>{
const mClass = document.getElementById("ms-day").value
const classTotal = 25;
const percentMissed = mClass/classTotal * 7;
if (mClass > 6) {
    document.getElementById("ms-msg-2").innerHTML = "That's way too much class to miss"
} else if (mClass > 4) {
    document.getElementById("ms-msg-2").innerHTML = "I hope you're ready to make up some notes"
} else if (mClass > 2) {
    document.getElementById("ms-msg-2").innerHTML = "Make sure to read up on the posted assignments and notes"
} else {
    document.getElementById("ms-msg-2").innerHTML = "You'll be alright"
}
document.getElementById("ms-msg").innerHTML = `You will miss ${percentMissed}% of your grade.`
})




const endDate = new Date("Dec 4, 2026 23:59:59")

setInterval(()=>{
    const eMessage = document.getElementById("EOS-day")
    const today = new Date();
    const difference = endDate.getTime() - today.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    if (days < 100) {
        document.getElementById("EOS-msg").innerHTML = "Almost there! Get excited!"
    } else {
        document.getElementById("EOS-msg").innerHTML = "Not time to count your days yet."
    }
    eMessage.innerHTML = days
,1000})
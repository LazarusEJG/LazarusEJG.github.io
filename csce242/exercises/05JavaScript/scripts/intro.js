console.log("Hello World");

/* btn */
document.getElementById("btn-show-message").onclick = (e) => {
    console.log("Button was clicked")
    document.getElementById("p-message").innerHTML = "Hellow World";
    e.target.innerHTML = "done";
};

/* plant */
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-message");
    const plantImage = document.getElementById("img-plant");
    plantImage.classList.remove("hidden")
    
    if (numDays <= 2) {
        pMessage.innerHTML = `let your plant rest it's only been ${numDays} days.`;
        plantImage.src = "https://dummyimage.com/150x150/556B2F/fff&text=Happy+plant";
    } else if (numDays <= 5) {
        pMessage.innerHTML = `time to water it's been ${numDays} days.`;
        plantImage.src = "https://dummyimage.com/150x150/BDB76B/fff&text=Thirsty";
    }  else if (numDays <= 7) {
        pMessage.innerHTML = `Oh no your plant is wilting it's been ${numDays} days.`;
        
    }  else {
        pMessage.innerHTML = `yo plant dead foo`;
    }
}

/* counter */

let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;
btnStart.disabled = false;

btnStart.onclick = () => {
    countInterval = setInterval(()=>(
        pCount.innerHTML = ++count
    ),500);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
    console.log("Start clicked");
}

btnPause.onclick = () => {
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = false;
    console.log("pause clicked");
}

btnStop.onclick = () => {
    count = 0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
    console.log("stop clicked")
}

/* date */

setInterval(()=>(
    const pDisplay = document.getElementById("date-display")
    const today = new Date()

),1000);
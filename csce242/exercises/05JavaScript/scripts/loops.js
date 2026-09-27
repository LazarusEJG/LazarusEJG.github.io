

document.getElementById("btn-loop").onclick = (e) => {
    const loopResult = document.getElementById("loop-result");

    for (let i=0; i<10; i++) {
        let p = document.createElement("p")
        p.innerHTML = i;
        loopResult.append(p);
        p.onclick = () => {
            console.log(`You clicked the ${i}'th element`)
        }   
    }
}

document.getElementById("btn-loop-range").onclick = (e) => {
    const startText = parseInt(document.getElementById("txt-start").value);
    const endText = parseInt(document.getElementById("txt-end").value);
    const startError = document.getElementById("error-start");
    startError.classList.add("hidden")
    const endError = document.getElementById("error-end");
    endError.classList.add("hidden")
    const rangeList = document.getElementById("range-list");

    if( startText < 0 || startText > 5) {
        startError.innerHTML = "* Invalid";
        startError.classList.remove("hidden");
        return;
    }

    if( endText < 10 || endText > 20 || endText < startText) {
        endError.innerHTML = "* Invalid";
        endError.classList.remove("hidden");
        return;
    }

    rangeList.innerHTML = "";

    for (let i=startText; i < endText; i++) {
        const li = document.createElement("li");
        li.innerHTML=i;
        rangeList.append(li);
    }
}
console.log("Hello World");

document.getElementById("btn-show-message").onclick = (e) => {
    console.log("Button was clicked")
    document.getElementById("p-message").innerHTML = "Hellow World";
    e.target.innerHTML = "done";
};

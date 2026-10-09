document.getElementById("hamburger-btn").onclick = () => {
    document.getElementById("icon-menu").classList.toggle("hidden")
    document.getElementById("icon-close").classList.toggle("hidden")
    document.getElementById("mobile-menu").classList.toggle("hidden")
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('contact-form').onsubmit = async(e) => {
    form = e.target
    e.preventDefault();
    
    

    const formData = new FormData(e.target);
    formData.append("access_key", "ab7842d4-1956-440f-94e8-fd0b7b0a1f7a");
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "Message Sent";
            form.reset();
        } else {
            result.innerHTML ="Error: " + data.message;
        }

    } catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message";
    } finally {
        await wait(2700)
        result.innerHTML = "";
    }
};
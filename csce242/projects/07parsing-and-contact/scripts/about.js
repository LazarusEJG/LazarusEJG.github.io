document.getElementById("hamburger-btn").onclick = () => {
    document.getElementById("icon-menu").classList.toggle("hidden")
    document.getElementById("icon-close").classList.toggle("hidden")
    document.getElementById("mobile-menu").classList.toggle("hidden")
}

const form = document.getElementById('contact-form').onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "ab7842d4-1956-440f-94e8-fd0b7b0a1f7a");
    const result = document.getElementById("result");
    result.innerHTML = "sending..."

        try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML="Success! Your message has been sent.";
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message"
    } finally {
        result.innerHTML = "";
    }
};
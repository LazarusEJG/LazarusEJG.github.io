//https://web3forms.com/

const form = document.getElementById('contact-form').onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "bbd4f395-bea6-46ea-aefd-fd35f560ea08");
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
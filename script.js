// Initialize EmailJS with your public API Key (replace with your actual public key)
emailjs.init("8D4p240Qz-aeLXKOz");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate the input fields
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Prepare the form data to send
    const formData = {
        user_name: name,
        user_email: email,
        message: message
    };

    // Send email using EmailJS
    emailjs.send("service_nffmwjs", "template_kz10had", formData)
        .then(function(response) {
            console.log("SUCCESS", response);
            document.getElementById("success-message").innerText = "Your message has been sent successfully!";
            document.getElementById("contact-form").reset(); // Clear the form
        }, function(error) {
            console.error("FAILED", error);
            document.getElementById("success-message").innerText = `Sorry, something went wrong. Please try again later. Error: ${error.text}`;
        });
});

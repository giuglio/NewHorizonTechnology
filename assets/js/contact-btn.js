// contactButton.js

document.addEventListener("DOMContentLoaded", function() {
    var contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default action of the link

            // Get the service name from the meta tag
            var serviceName = document.querySelector('meta[name="service-name"]').getAttribute("content");

            // Email address and subject
            var emailAddress = "info@newhorizontechnology.it";
            var subject = "Richiesta servizio : " + serviceName;

            // Compose the mailto link
            var mailtoLink = "mailto:" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject);

            // Open the default email client with the mailto link
            window.location.href = mailtoLink;
        });
    }
});

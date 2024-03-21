// formButton.js

document.addEventListener("DOMContentLoaded", function() {
    var contactBtn = document.getElementById("formBtn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function(event) {
            event.preventDefault();

            // Inserisci qui il link desiderato
            var link = "https://9yu8iq6i7dr.typeform.com/to/p39n5JCS";

            // Reindirizza alla pagina specificata dal link
            window.location.href = link;
        });
    }
});

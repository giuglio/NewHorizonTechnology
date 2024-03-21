
// Footer block (modifica qua il footer)

document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById('footer-container');

    if (footerContainer) {
        const footerContent = `
            <!-- [Footer Section] -->
            <section id="Footer_section">

                <div class="footer__content_div">

                    <!-- Text -->
                    <div class="footer__text_block">
                        <span class="gen__big_title">COLLABORA<BR>CON NOI</span>
                        <!-- Button -->
                        <!-- Text -->
                        <a id="mailBtn" class="gen__first_type_btn" href="#">
                            <span>Mandaci una mail</span>
                        </a>
                    </div>

                    <!-- Links -->
                    <div class="footer__links_block">

                        <!-- Logo -->
                        <img class="footer__logo" src="/assets/logo/Medium-White.svg" alt="logo-nht">

                        <!-- Links -->
                        <div class="footer__links_container">

                            <div class="footer__links_column">

                                <a href="https://www.instagram.com/new.horizon.technology/" class="footer__link"><i class="bi bi-instagram"></i>Instagram</a>
                                <a href="" class="footer__link"><i class="bi bi-linkedin"></i>Linkedin</a>
                                <a href="https://www.youtube.com/channel/UC_Af6ZuQhYt0rbki9Pc9rNQ" class="footer__link"><i class="bi bi-youtube"></i>Youtube</a>

                            </div>

                            <div class="footer__links_column">

                                <span class="footer__link" data-bs-toggle="offcanvas" href="#Services__offcanvas" role="button" aria-controls="Services__offcanvas"><i class="bi bi-arrow-up-right"></i>Servizi</span>
                                <span class="footer__link"><i class="bi bi-arrow-up-right"></i>Contatti</span>
                                <span class="footer__link"><i class="bi bi-arrow-up-right"></i>Store</span>

                            </div>

                        </div>

                    </div>


                    <!-- Separator -->
                    <div class="footer__separator"></div>

                    <span id="the__credits">© 2024 New Horizon Technology | All rights reserved.</span>

                </div>

            </section>
        `;

        footerContainer.innerHTML = footerContent;
        initializeAOS(); // Chiamata a initializeAOS per inizializzare AOS dopo l'inserimento del footer
    }
});

// File: footer.js

document.addEventListener("DOMContentLoaded", function() {
    const mailBtn = document.getElementById('mailBtn');
    if (mailBtn) {
        mailBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default action of the link

            // Email address
            var emailAddress = "info@newhorizontechnology.it";

            // Oggetto generico
            var subject = "Richiesta di collaborazione";

            // Compose the mailto link
            var mailtoLink = "mailto:" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject);

            // Open the default email client with the mailto link
            window.location.href = mailtoLink;
        });
    }
});


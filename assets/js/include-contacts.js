// Contact block (modifica qua il redirect ai contatti)

document.addEventListener("DOMContentLoaded", function () {
    const contactContainer = document.getElementById('contact-container');

    if (contactContainer) {
        const contactContent = `
            <!-- [Contact Section] -->
            <section id="Contact__section">

                <!-- Content -->
                <div class="contact__content_div">

                    <span class="gen__title makeitblue">CONVINTO?</span>
                    <span class="gen__body_text makeitblue text-center">Non esitare, contattaci per il servizio<br>
                        o per qualsiasi dubbio e chiarimento</span>

                    <!-- Button -->
                    <a data-aos="fade-right" data-aos-delay="200" class="gen__second_type_btn" href="">
                        <!-- Text -->
                        <span>Contattaci</span>

                        <!-- Icon -->
                        <i class="bi bi-arrow-right"></i>
                    </a>

                </div>

            </section>
        `;

        contactContainer.innerHTML = contactContent;
        initializeAOS(); // Chiamata a initializeAOS per inizializzare AOS dopo l'inserimento della sezione di contatto
    }
});

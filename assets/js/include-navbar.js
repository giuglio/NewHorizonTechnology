
// Navbar block (modifica qua la navbar)

document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById('navbar-container');

    if (navbarContainer) {
        const navbarContent = `
            <!-- (Navbar) -->
            <div id="Navbar__main">

                <!-- Logo -->
                <a href="/index.html"><img id="navbar__logo" src="/assets/logo/Medium-White.webp" alt="nht_logo"></a>

                <!-- Links -->
                <div id="navbar__links_container">

                    <li data-aos="fade-up" data-aos-delay="400" class="navbar__link"><a class="link" href="/index.html">Home</a></li>
                    <li data-aos="fade-up" data-aos-delay="500" class="navbar__link" data-bs-toggle="offcanvas" href="#Services__offcanvas" role="button" aria-controls="Services__offcanvas"><a class="link" href="#">Servizi</a></li>
                    <li data-aos="fade-up" data-aos-delay="700" class="navbar__link"><a class="link" href="#">Store</a></li>

                </div>

                <li id="btn__contatti" data-aos="fade-up" data-aos-delay="800" class="gen__first_type_btn"><a href="/contatti.html">Contatti</a></li>

                    <li data-aos="fade-up" data-aos-delay="100" id="navbar__side_menu_btn" class="navbar__link" data-bs-toggle="offcanvas" data-bs-target="#sidebar__menu" aria-controls="sidebar__menu"><i class="bi bi-list"></i></li>

            </div>

            <!-- (Services Offcanvas) -->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="Services__offcanvas" aria-labelledby="Services__offcanvasLabel">
                <div class="offcanvas__header">

                    <a id="sidebar__service_back" href="#" role="button" aria-controls="Services__offcanvas">
                        <i class="offcanvas__closer bi bi-arrow-left"></i>
                    </a>

                    <a class="sidebar__tohide" href="/index.html"><img id="navbar__logo" style="width: 60px;" src="/assets/logo/Small-White.webp" alt="nht_logo"></a>
                    <a data-bs-dismiss="offcanvas" aria-label="Close"><i class="offcanvas__closer bi bi-x-lg"></i></a>
                </div>

                <div class="offcanvas__body">
                    <!-- links -->
                    <div class="offcanvas__link_container">
                        <a class="offcanvas__link" href="/services/programmazioneRobot.html">PROGRAMMAZIONE ROBOT</a>
                        <a class="offcanvas__link" href="/services/stampa3d.html">STAMPA 3D</a>
                        <a class="offcanvas__link" href="/services/videomaking.html">VIDEOMAKING</a>
                        <a class="offcanvas__link" href="/services/prototipazione.html">PROTOTIPAZIONE</a>
                        <a class="offcanvas__link" href="/services/webDesignDevelopment.html">WEB DESIGN & DEVELOPMENT</a>
                        <a class="offcanvas__link" href="/services/softwareDevelopment.html">SOFTWARE DEVELOPMENT</a>
                        <a class="offcanvas__link" href="/services/modellazione3d.html">MODELLAZIONE 3D</a>
                    </div>

                    <div id="offcanvas__poster" style="background-image: url('/assets/images/offcanvas_images/webDevelopment.webp');" alt=""></div>

                    <!-- Includi questo script nella tua pagina HTML -->
                    <script src="/assets/js/offcanvas.js"></script>
                </div>
            </div>

            <!-- (Sidebar Menu) -->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar__menu" aria-labelledby="sidebar__menuLabel">
                <div class="offcanvas__header sidebar__factor">
                    <a href="/index.html"><img id="navbar__logo" style="width: 60px;" src="/assets/logo/Small-White.webp" alt="nht_logo"></a>
                    <a data-bs-dismiss="offcanvas" aria-label="Close"><i class="offcanvas__closer bi bi-x-lg"></i></a>
                </div>

                <div class="offcanvas__body">
                    <!-- links -->
                    <div class="offcanvas__link_container sidebar__factor">
                        <li class="sidebar__link"><a class="link" href="/index.html">Home</a></li>
                        <li class="sidebar__link" data-bs-toggle="offcanvas" href="#Services__offcanvas" role="button" aria-controls="Services__offcanvas"><a class="link" href="#">Servizi</a></li>
                        <li class="sidebar__link"><a class="link" href="#">Store</a></li>
                        <li class="sidebar__link"><a class="link" href="/contatti.html">Contattaci</a></li>
                    </div>

                </div>
            </div>
        `;

        navbarContainer.innerHTML = navbarContent;

        // Chiamata a navbar.js dopo che il contenuto è stato inserito
        const script = document.createElement('script');
        script.src = '/assets/js/offcanvas.js';
        document.body.appendChild(script);

        var servicesOffcanvas = new bootstrap.Offcanvas(document.getElementById('Services__offcanvas'));
        var sidebarMenuOffcanvas = new bootstrap.Offcanvas(document.getElementById('sidebar__menu'));

        document.getElementById('sidebar__service_back').addEventListener('click', function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link

            // Verifica se l'Offcanvas dei servizi è aperto, e se sì, chiudilo
            if (servicesOffcanvas._element.classList.contains('show')) {
                servicesOffcanvas.hide();
            }

            // Apri o chiudi la sidebar a seconda dello stato attuale
            sidebarMenuOffcanvas.toggle();
        });

        // Aggiungi un listener per chiudere l'Offcanvas dei servizi quando la sidebar viene aperta
        document.getElementById('sidebar__menu').addEventListener('shown.bs.offcanvas', function() {
            if (servicesOffcanvas._element.classList.contains('show')) {
                servicesOffcanvas.hide();
            }
        });

        // Funzione per verificare se entrambe le offcanvas sono chiuse e mostrare i bottoni e le immagini dello scroller se necessario
        function checkAndShowElements() {
            setTimeout(() => {
                const offcanvasServices = document.getElementById('Services__offcanvas');
                const offcanvasSidebar = document.getElementById('sidebar__menu');

                // Verifica se entrambe le offcanvas sono chiuse e mostra i bottoni e le immagini dello scroller di conseguenza
                if (!offcanvasServices.classList.contains('show') && !offcanvasSidebar.classList.contains('show')) {
                    const firstTypeElements = document.querySelectorAll('.gen__first_type_btn, .scroller__image');
                    firstTypeElements.forEach(element => {
                        element.style.opacity = '1';
                    });
                }
            }, 100); // Aggiunto un ritardo di 300 millisecondi per assicurarsi che le offcanvas si siano completamente chiuse prima di effettuare il controllo
        }

        // Nascondi i bottoni e le immagini dello scroller quando almeno una delle due offcanvas viene mostrata
        // function hideElements() {
        //     const firstTypeElements = document.querySelectorAll('.gen__first_type_btn, .scroller__image');
        //     firstTypeElements.forEach(element => {
        //         element.style.opacity = '0';
        //     });
        // }

        document.getElementById('Services__offcanvas').addEventListener('show.bs.offcanvas', hideElements);
        document.getElementById('sidebar__menu').addEventListener('show.bs.offcanvas', hideElements);

        // Controlla e mostra i bottoni e le immagini dello scroller quando una delle offcanvas si chiude
        document.getElementById('Services__offcanvas').addEventListener('hidden.bs.offcanvas', checkAndShowElements);
        document.getElementById('sidebar__menu').addEventListener('hidden.bs.offcanvas', checkAndShowElements);

            }
        });

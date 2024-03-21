// navbar.js

document.addEventListener("DOMContentLoaded", function() {
    // Il tuo codice JavaScript attuale per il Navbar va qui
    const links = document.querySelectorAll('.offcanvas__link');
    const poster = document.getElementById('offcanvas__poster');

    const serviceImageMap = {
        "PROGRAMMAZIONE ROBOT": "/assets/images/offcanvas_images/programmazioneRobot.webp",
        "STAMPA 3D": "/assets/images/offcanvas_images/stampa3d.webp",
        "VIDEOMAKING": "/assets/images/offcanvas_images/videomaking.webp",
        "PROTOTIPAZIONE": "/assets/images/offcanvas_images/prototipazione.webp",
        "WEB DESIGN & DEVELOPMENT": "/assets/images/offcanvas_images/webDevelopment.webp",
        "SOFTWARE DEVELOPMENT": "/assets/images/offcanvas_images/softwareDevelopment.webp",
        "MODELLAZIONE 3D": "/assets/images/offcanvas_images/modellazione3d.webp"
    };

    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const serviceName = link.textContent.trim();
            const backgroundImage = serviceImageMap[serviceName];
            poster.style.backgroundImage = `url(${backgroundImage})`;
        });
    });
});

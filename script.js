 const header = document.querySelector('header');
        const menuIcon = document.querySelector('.menu-icon');
        const navbar = document.querySelector('.navbar');

        window.onscroll = () => {
            header.classList.toggle('sticky', window.scrollY > 100);
        };

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('active');
            navbar.classList.toggle('active');
        };

        navbar.querySelectorAll('a').forEach(link => {
            link.onclick = () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('active');
            };
        });

        ScrollReveal({
            reset: true,
            distance:'80px',
            duration:2000,
            delay:200
        });
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img,.container , .project, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content' ,{ origin: 'right' });
    

    
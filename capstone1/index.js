    // Simple scroll spy for active navigation
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav .hidden a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-primary', 'border-b-2', 'border-primary', 'pb-1');
                link.classList.add('text-on-surface-variant');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('text-primary', 'border-b-2', 'border-primary', 'pb-1');
                    link.classList.remove('text-on-surface-variant');
                }
            });
        });

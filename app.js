document.addEventListener('DOMContentLoaded', ()=> {
	
	const previousButton = document.querySelector('.previous');
	const nextButton = document.querySelector('.next');
	const content = document.querySelector('.carousel .content');
	const totalItems = document.querySelectorAll('.carousel .content >*').length - 1;
	let activeItem = 0;
	
	// Fungsi untuk menggeser item ke kiri
	function slideLeft() {
		if (activeItem === 0) {
			activeItem = totalItems;
			content.style.transform = `translateX(-${totalItems * 100}%)`;
		} else {
			activeItem--;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		}
	}

	// Fungsi untuk menggeser item ke kanan
	function slideRight() {
		if (activeItem < totalItems) {
			activeItem++;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		} else {
			activeItem = 0;
			content.style.transform = `none`;
		}
	}

	previousButton.addEventListener('click', slideLeft);

	nextButton.addEventListener('click', slideRight);

	// Menambahkan fungsi setInterval untuk menggeser item setiap 10 detik
	setInterval(() => {
		slideRight();
	}, 3000);

});

const navLinks = document.querySelectorAll('a');
        const body = document.querySelector('body');

        navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // prevent default behavior of the link
            event.preventDefault();

            // create new element for slide down animation
            const slideDown = document.createElement('div');
            slideDown.classList.add('slide-down');
            body.appendChild(slideDown);

            // delay slide down animation by a few milliseconds
            setTimeout(function() {
            slideDown.classList.add('active');
            }, 10);

            // delay actual page refresh by a few milliseconds
            setTimeout(function() {
            window.location.href = link.getAttribute('href');
            }, 800);
        });
        });

		
		const cardContainer = document.querySelector('.card-container');
        let isDown = false;
        let startX;
        let scrollLeft;
        let rafId;

        cardContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            cardContainer.classList.add('active');
            startX = e.pageX - cardContainer.offsetLeft;
            scrollLeft = cardContainer.scrollLeft;
        });

        cardContainer.addEventListener('mouseleave', () => {
            isDown = false;
            cardContainer.classList.remove('active');
        });

        cardContainer.addEventListener('mouseup', () => {
            isDown = false;
            cardContainer.classList.remove('active');
        });

        cardContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();

            const x = e.pageX - cardContainer.offsetLeft;
            const walk = (x - startX) * 1.5;

            if (rafId) {
                cancelAnimationFrame(rafId);
            }

            rafId = requestAnimationFrame(() => {
                cardContainer.scrollLeft = scrollLeft - walk;
            });
        });

		


   
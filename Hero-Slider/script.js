let nextBtn = document.querySelector(".right-btn");
let prevBtn = document.querySelector(".left-btn");

// Slider Navigation
nextBtn.addEventListener('click', () => {
    let slides = document.querySelectorAll('.slide');
    document.querySelector(".hero-banner").appendChild(slides[0]);
    // Reset animation by removing and re-adding the slide
    resetAnimations();
});

prevBtn.addEventListener('click', () => {
    let slides = document.querySelectorAll('.slide');
    document.querySelector(".hero-banner").prepend(slides[slides.length - 1]);
    // Reset animation by removing and re-adding the slide
    resetAnimations();
});

// Reset animations when slide changes
function resetAnimations() {
    const firstSlide = document.querySelector('.slide:nth-child(1)');
    const contentElements = firstSlide.querySelectorAll('[style*="animation"], [class*="animate"]');
    
    // Force reflow to restart animations
    contentElements.forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // Trigger reflow
        el.style.animation = '';
    });
}

// Play button functionality - Movie trailers
const movieTrailers = {
    'Inception': 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    'The Dark Knight': 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    'Interstellar': 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    'The Matrix': 'https://www.youtube.com/watch?v=vKQi3bBA1y8'
};

// Add event listeners to all play buttons
document.querySelectorAll('.btn-play').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const slides = document.querySelectorAll('.slide');
        const currentSlide = slides[0];
        const movieTitle = currentSlide.querySelector('h1').textContent;
        const trailerUrl = movieTrailers[movieTitle];
        
        if (trailerUrl) {
            window.open(trailerUrl, '_blank');
        }
    });
});

// Add to list functionality
document.querySelectorAll('.btn-list').forEach(btn => {
    btn.addEventListener('click', () => {
        const slides = document.querySelectorAll('.slide');
        const currentSlide = slides[0];
        const movieTitle = currentSlide.querySelector('h1').textContent;
        
        // Get saved movies from localStorage
        let savedMovies = JSON.parse(localStorage.getItem('myList')) || [];
        
        if (!savedMovies.includes(movieTitle)) {
            savedMovies.push(movieTitle);
            localStorage.setItem('myList', JSON.stringify(savedMovies));
            
            // Visual feedback
            btn.textContent = '✓ Added';
            btn.style.background = '#46d369';
            btn.style.borderColor = '#46d369';
            
            setTimeout(() => {
                btn.textContent = '+ My List';
                btn.style.background = '';
                btn.style.borderColor = '';
            }, 2000);
        } else {
            btn.textContent = 'Already in List';
            setTimeout(() => {
                btn.textContent = '+ My List';
            }, 2000);
        }
    });
});

// Auto-play slider every 8 seconds
let autoPlayInterval = setInterval(() => {
    nextBtn.click();
}, 8000);

// Pause auto-play on hover
const heroBanner = document.querySelector('.hero-banner');
heroBanner.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

heroBanner.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => {
        nextBtn.click();
    }, 8000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
        prevBtn.click();
    }
});

// Movie card click handlers
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', () => {
        const movieTitle = card.querySelector('.card-title').textContent;
        alert(`Coming soon: ${movieTitle} - Full movie experience!`);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)';
    }
});
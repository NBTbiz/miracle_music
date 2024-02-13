document.addEventListener("DOMContentLoaded", function () {
    // Loader animation and content display
    setTimeout(function () {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 2000); // Adjust the delay based on your design

    setTimeout(function() {
        document.querySelector('.myDiv').style.display = 'block';
        }, 2000);

    // Lottie Animation Setup
    const animationData = 'miracle_music.json';
    const animationContainer = document.getElementById('animation');
    const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationData
    });

    // Counting animation
    let nums = document.querySelectorAll(".nums .num");
    nums.forEach((num) => startCount(num, 1000)); // Start counting after 1 second

    // Lazy loading
    const lazyImages = document.querySelectorAll('.lazy');
    lazyImages.forEach(lazyLoad);

    // Display WhatsApp button
    setTimeout(function () {
        document.getElementById('whatsappButton').style.display = 'flex';
    }, 2000); // Adjust the delay based on your design
});

// Function to start the counting animation for each element
function startCount(el, startTime) {
    let goal = parseInt(el.dataset.goal, 10);
    setTimeout(() => {
        let count = setInterval(() => {
            el.textContent++;
            if (parseInt(el.textContent, 10) === goal) {
                clearInterval(count);
            }
        }, 3000 / goal);
    }, startTime);
}

// Lazy loading function
const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                img.setAttribute('src', src);
                img.classList.remove('lazy');
                observer.disconnect();
            }
        });
    });

    io.observe(target);
};



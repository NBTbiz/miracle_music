

// <!-- loader --> 
    document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000);
    setTimeout(function() {
    document.querySelector('.myDiv').style.display = 'block';
    }, 3000);

    // Lottie Animation Setup
    const animationData = 'path/to/miracle_music.json';
    const animationContainer = document.getElementById('animation');
    
    const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationData
    });



    });
// <!-- loader end --> 
// <!-- counter --> 
    // Select all elements with class ".nums .num"
        let nums = document.querySelectorAll(".nums .num");

        // Function to start the counting animation for each element
        function startCount(el) {
            let goal = parseInt(el.dataset.goal, 10);
            let startTime = 4000; // Delay start time in milliseconds (3 seconds)
            
            setTimeout(() => {
                let count = setInterval(() => {
                        el.textContent++;
                        if (parseInt(el.textContent, 10) === goal) {
                            clearInterval(count);
                        }
                    }, 3000 / goal); // Adjust speed: 2000 milliseconds divided by goal
                }, startTime);
            }

        // Start counting for each element after 3 seconds
        nums.forEach((num) => startCount(num));
// <!-- counter end -->

// <!-- for lazy loading --> 
        const lazyImages = document.querySelectorAll('.lazy');

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

        lazyImages.forEach(lazyLoad);

        setTimeout(function() {
            document.getElementById('whatsappButton').style.display = 'flex';
            }, 4000); // Delay in milliseconds (here, 4000ms = 4 seconds)
// <!-- for lazy loading end --> 






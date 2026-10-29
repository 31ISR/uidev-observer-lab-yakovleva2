const staggered = document.querySelectorAll(".services-grid, .stats-grid, .testimonials");

const options = {
    threshold: 0.3,
    rootMargin: "0px 0px -80px 0px"
};

const recipleObserver = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".stagger-item");
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 300);
            });
        }
    });
}, options);

const animatedCount = document.querySelectorAll(".animate-on-scroll .slide-left .slide-right .scale-up");
const animateObserver = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate')
        }
    });
}, options);

animatedCount.forEach((card)=> {
    animateObserver.observe(card);
});

const scrollindicator = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
    const percent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100 + "%";
    scrollindicator.style.width = percent;
});

const sidebar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        sidebar.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        sidebar.style.background = "rgba(10, 10, 10, 0.9)";
    }
});

const tocLinks = document.querySelectorAll(".nav-links a");
tocLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();   
        const id = link.getAttribute("href");
        console.log("Клик по ссылке на", id);
        document.querySelector(id).scrollIntoView({behavior: "smooth", block: "center"});
    });
}); 

for (let i = 0; i < 50; i++) {
    const flake = document.createElement("div");
    flake.classList.add("particle");
    flake.style.left = Math.random() * 100 + "%";
    flake.style.animationDelay = Math.random() * 100 + "ms";
    flake.style.animationDuration = Math.random() * 10000 + "ms";
    document.querySelector('.hero').appendChild(flake);
}

staggered.forEach((card)=> {
    recipleObserver.observe(card);
});

function countUp(element, target, index, duration = 2000) {
    let current = 0;
    const step = target/(duration/16);
    setInterval(()=> {
        if (current + step < target) {
            current += step
            element.innerHTML = Math.round(current)
        }else {
            switch(index) {
                case 0:
                    element.innerHTML = "1M+"
                    break;
                case 1:
                    element.innerHTML = "99.9%"
                    break;
                default:
                    element.innerHTML = target
                    break;
            }
        }
    }, duration/16)
}


// Aos
AOS.init({
    duration: 2000,
});

// hero-styles
const likes = [
    "learn new things",
    "solve problems",
    "work in a team",
    "design solutions"
];
let i = 0;

const like = () => {
    if (i === likes.length - 1) {
        i = 0;
    } else {
        i++;
    }
    document.getElementById("likes").innerHTML = likes[i];
};
like();

setInterval(like, 1500);

// Menu Mobile
const barra = document.getElementById("btnMenu");
const menuSide = document.querySelector(".menu-side");
const menuMobile = document.querySelector(".menu-mobile");

barra.addEventListener("click", function() {
    menuSide.classList.toggle("active");
    menuMobile.classList.toggle("line");
});

const startMenu = document.getElementById("start-menu");
const aboutMeMenu = document.getElementById("about-me-menu");
const projectsMenu = document.getElementById("projects-menu");
const skillMenu = document.getElementById("skill-menu");
const contactMenu = document.getElementById("contact-menu");

function scrollDistance(e, element) {
    e.preventDefault();
    let hash = element.getAttribute("href");
    let target = document.querySelector(hash);


    let headerOffset = 100;
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
}

function scrollToReference(e, element) {
    scrollDistance(e, element);
    menuSide.classList.toggle("active");
    menuMobile.classList.toggle("line");
}

startMenu.addEventListener("click", (e) => {
    scrollToReference(e, startMenu);
});
aboutMeMenu.addEventListener("click", (e) => {
    scrollToReference(e, aboutMeMenu);
});
projectsMenu.addEventListener("click", (e) => {
    scrollToReference(e, projectsMenu);
});
skillMenu.addEventListener("click", (e) => {
    scrollToReference(e, skillMenu);
});
contactMenu.addEventListener("click", (e) => {
    scrollToReference(e, contactMenu);
});

//Scroll
const start = document.querySelectorAll(".start");
const aboutMe = document.querySelectorAll(".aboutMe");
const projects = document.querySelectorAll(".projects");
const skill = document.querySelectorAll(".skill");
const contact = document.querySelectorAll(".contact");

start.forEach((st) => {
    st.addEventListener("click", (e) => {
        scrollDistance(e, st);
    });
});

aboutMe.forEach((st) => {
    st.addEventListener("click", (e) => {
        scrollDistance(e, st);
    });
});

projects.forEach((st) => {
    st.addEventListener("click", (e) => {
        scrollDistance(e, st);
    });
});

skill.forEach((st) => {
    st.addEventListener("click", (e) => {
        scrollDistance(e, st);
    });
});

contact.forEach((st) => {
    st.addEventListener("click", (e) => {
        scrollDistance(e, st);
    });
});

// Fixed Header

const fixedHeader = document.getElementById("fixed-header");

window.addEventListener("scroll", () => {
    let offsetHeader = 750;
    if (window.scrollY >= offsetHeader) {
        fixedHeader.style.marginTop = "0px";
    } else if (window.scrollY <= offsetHeader) {
        fixedHeader.style.marginTop = "-90px";
    }
});

// Particles
particlesJS({
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#fff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#fff",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.6,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 160,
            color: "#fff",
            opacity: 0.6,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        }
    },
    retina_detect: true,
});

const git1 = document.getElementById("git-1");

const git2 = document.getElementById("git-2");
const git3 = document.getElementById("git-3");
const git4 = document.getElementById("git-4");
const git5 = document.getElementById("git-5");
const git6 = document.getElementById("git-6");

git1.addEventListener("click", function onClick() {
    window.open("https://github.com/Samuel0023/matrix", '_blank');
});

git2.addEventListener("click", function onClick() {
    window.open("https://github.com/Samuel0023/RESTserver", '_blank');
});
git3.addEventListener("click", function onClick() {
    window.open("https://github.com/Samuel0023/Websocket-server", '_blank');
});
git4.addEventListener("click", function onClick() {
    window.open("https://github.com/Samuel0023/Clima-app", '_blank');
});
git5.addEventListener("click", function onClick() {
    window.open("https://github.com/Samuel0023/to-do.app", '_blank');
});
git6.addEventListener("click", function onClick() {
    window.open("https://github.com/Samuel0023", '_blank');
});

const dep1 = document.getElementById('dep-1');
const dep2 = document.getElementById('dep-2');
const dep3 = document.getElementById('dep-3');


dep1.addEventListener("click", function onClick() {
    window.open("https://matrix-flax.vercel.app", '_blank');
});
dep2.addEventListener("click", function onClick() {
    window.open("https://sams-proyect.herokuapp.com", '_blank');
});

dep3.addEventListener("click", function onClick() {
    window.open("https://chat-with-sockets-samuel.herokuapp.com", '_blank');
});


const mail = document.getElementById('mail');
const linkedin = document.getElementById('linkedin');

mail.addEventListener("click", function onClick() {
    window.open("mailto:enrissmuelo@gmail.com", "_blank");
});

linkedin.addEventListener("click", function onClick() {
    window.open("https://www.linkedin.com/in/samuelOnti/", "_blank");
});
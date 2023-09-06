

gsap.from('.box span', {
    opacity: 0,
    y: -100,
    duration: 0.8,
})


// BOX.repeat(-1);






// 메뉴이동
let links = gsap.utils.toArray(".pr_nav ul li a");

links.forEach(link => {
    let element = document.querySelector(link.getAttribute("href"));
    let linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top"
    });

    ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: self => setActive(link)
    });

    link.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, {
            duration: 1,
            scrollTo: e.target.hash,
            overwrite: "auto"
        })
    })
});

function setActive(link) {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
}





// 여러개 이질감 표현하기
gsap.utils.toArray(".project").forEach(item => {
    gsap.from(item, {
        scale: 0.9,
        // '-webkit-filter': 'saturate(0.1)',
        //  yPercent: 10,
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "center center",
            scrub: 0.2,
        },
    })
});

// 한번에 이질감 표현하기
gsap.from('.traning_con', {
    scale: 0.9,
    ease: "none",
    duration: 0.5,
    scrollTrigger: {
        trigger: '.traning_con',
        start: "top bottom",
        end: "center center",
        scrub: 0.2,
    },
})



const MENU_BTN = document.querySelector('.btn');
const MENU = document.querySelector('.menu_con');
const CON = document.querySelector('.inner')
//const BTN = document.querySelector('.btn');


MENU_BTN.addEventListener('click', e => {
    e.preventDefault();
    MENU.classList.toggle('on');
    CON.classList.toggle('on');

    const LINK = document.querySelectorAll('.gnb a');


    LINK.forEach((it, idx) => {
        it.addEventListener('click', e => {
            e.preventDefault();
            gsap.to(window, {
                scrollTo: e.target.hash
            })
        })
    })

});















// const panels = gsap.utils.toArray(".MainContent .itm");

// const H = gsap.to(panels, {
//     xPercent: -100 * (panels.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".MainContent",
//         pin: true,
//         start: "top top",

//         scrub: 0, // 숫자에따라 변함이 있음
//         markers: true,
//         snap: {
//             snapTo: 1 / (panels.length - 1),
//             inertia: false,
//             duration: { min: 0.1, max: 0.1 }
//         },
//         //end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
//     }
// });




// const sections = gsap.utils.toArray(".project");

// gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".MainProject",
//         pin: true,
//         scrub: 1,
//         snap: 1 / (sections.length - 1),
//         end: "+=7000",
//         // end: document.querySelector("#parallax__cont").offsetWidth,
//     }
// });

//const M = document.querySelector('.pr_tab');
// const MT = document.querySelectorAll('.pr_tab a');
// const PJ = document.querySelectorAll('.project_wrap .project');

// MT.forEach((it, idx) => {
//     it.addEventListener('click', (e) => {
//         e.preventDefault();
//         MT.forEach(it =>
//             it.classList.remove('on'))
//         it.classList.add('on');
//         PJ.forEach(it => it.classList.remove('on'))
//         PJ[idx].classList.add('on');
//     })
// });


// let links = gsap.utils.toArray('.pr_tab a');

// links.forEach(link => {
//     let element = document.querySelector(link.getAttribute("href")),

//         linkST = ScrollTrigger.create({
//             trigger: element,
//             start: "top top"
//         });

//     ScrollTrigger.create({
//         trigger: element,
//         start: "top center",
//         end: "bottom center",
//         onToggle: self => setActive(link)
//     });

//     link.addEventListener("click", e => {
//         e.preventDefault();
//         gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
//     });
// });

// function setActive(link) {
//     links.forEach(el => el.classList.remove("active"));
//     link.classList.add("active");
// }



const BOX =
    gsap.from('.MainIntro .box', {
        width: 700,
        height: 700,
        scale: 0.6,
        delay: 1,
        pin: true
    });

// gsap.to('.center_content h2', {
//     rotate: -4,
//     delay: 2,
//     duration: 1,
//     ease: Back.easeIn,
// })

gsap.from('.menu_con', {
    top: -100,
    start: "bottom bottom",
})
gsap.from('.box span', {
    opacity: 0,
    top: -50,
    delay: 2,
})


// BOX.repeat(-1);



const S =
    gsap.from('.project h2', {
        y: -300,
        duration: 2,
        start: "top center",
    });

gsap.from('.project .left', {
    x: -300,
    duration: 2,
    start: "top center",

});

gsap.from('.project .right', {
    x: 300,
    duration: 2,
    start: "top center",
});


gsap.to(S, {
    scrollTrigger: {
        trigger: ".MainProject",
        start: "top center",
    }
})




const MENU_BTN = document.querySelector('.btn');
const MENU = document.querySelector('.menu_con');
const CON = document.querySelector('.inner')
//const BTN = document.querySelector('.btn');


MENU_BTN.addEventListener('click', e => {
    e.preventDefault();
    MENU.classList.toggle('on');
    CON.classList.toggle('on');

    const LINK = document.querySelectorAll('.menu_con a');


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


/* Main navigation */
let panelsSection = document.querySelector("#MainProject"),
    panelsContainer = document.querySelector("#panels-container"),
    tween;

const anchors = document.querySelectorAll(".anchor");


anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        anchors.forEach(it => it.classList.remove('on'))
        e.target.classList.add('on');

        let targetElem = document.querySelector(e.target.getAttribute("href")),
            y = targetElem;
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
            let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
                totalMovement = (panels.length - 1) * targetElem.offsetWidth;
            y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
        }
        gsap.to(window, {
            scrollTo: {
                y: y,
                autoKill: false
            },
            duration: 1,
        });

    });
});




/* Panels */
const panels = gsap.utils.toArray("#panels-container .project");
tween = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#MainProject",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 }
        },
        end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
    }
});


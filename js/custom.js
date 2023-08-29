const panels = gsap.utils.toArray(".MainContent .itm");


const H = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".MainContent",
        pin: true,
        start: "top top",

        scrub: 0, // 숫자에따라 변함이 있음
        markers: true,
        snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 }
        },
        //end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
    }
});

const BOX =
    gsap.from('.MainIntro .box', {
        width: "700px",
        height: "700px",
    });

gsap.to('.MainIntro .box', {
    width: "400px",
    height: "400px",
    start: "top 50px",
    left: "50%", top: "50%",
    delay: 1,
})

gsap.to('.MainIntro .box', {
    width: "85%",
    height: "85%",

    delay: 2,
});
gsap.to('.MainIntro .box', {
    width: "calc(100%)",
    height: "20%",
    left: "50%", top: "80%",

    delay: 3,
});
gsap.to('.MainIntro .box', {
    height: "calc(100%)",
    left: "50%", top: "50%",
    delay: 4,
})

BOX.play(3);



// const T = document.querySelector('#to_top');
// T.addEventListener('click', () => {
//     gsap.to(window, { scrollTo: 0, duration: 1 })
// });



const D = gsap.to('.MainDal .dal', {
    x: 400,
    y: 1000,
    rotation: 720,
    ease: "none",
    scrollTrigger: {
        trigger: ".MainDal",
        pin: true,
        start: "top top",
        end: "+=1600",
        scrub: 0, // 숫자에따라 변함이 있음
        //markers: true
        // snap: {
        //     snapTo: 1 / (panels.length - 1),
        //     inertia: false,
        //     duration: { min: 0.1, max: 0.1 }
        // },
        //end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
    }

});

const MENU_BTN = document.querySelector('.MainIntro .menu');
const MENU = document.querySelector('.MainIntro .menu_con');


MENU_BTN.addEventListener('click', e => {
    e.preventDefault();
    MENU.classList.toggle('on');
})
const panels = gsap.utils.toArray(".MainContent .itm");


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

const BOX =
    //     gsap.from('.MainIntro .box', {
    //         width: "700px",
    //         height: "700px",
    //     });

    // gsap.to('.MainIntro .box', {
    //     width: "400px",
    //     height: "400px",
    //     start: "top 50px",
    //     left: "50%", top: "50%",
    //     delay: 1,
    // })

    // gsap.to('.MainIntro .box', {
    //     width: "85%",
    //     height: "85%",

    //     delay: 2,
    // });
    // gsap.to('.MainIntro .box', {
    //     width: "calc(100%)",
    //     height: "20%",
    //     left: "50%", top: "80%",

    //     delay: 3,
    // });
    gsap.to('.MainIntro .box', {
        height: "calc(100%)",
        width: "calc(100%)",
        left: "50%", top: "50%",
        // delay: 4,
    })

BOX.play(3);



// const T = document.querySelector('#to_top');
// T.addEventListener('click', () => {
//     gsap.to(window, { scrollTo: 0, duration: 1 })
// });



// const D = gsap.to('.MainDal .dal', {
//     x: 400,
//     y: 1000,
//     rotation: 720,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".MainDal",
//         pin: true,
//         start: "top top",
//         end: "+=1600",
//         scrub: 0, // 숫자에따라 변함이 있음
//         //markers: true
//         // snap: {
//         //     snapTo: 1 / (panels.length - 1),
//         //     inertia: false,
//         //     duration: { min: 0.1, max: 0.1 }
//         // },
//         //end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
//     }

// });



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
const MENU = document.querySelector('.MainIntro .menu_con');
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




// $('.menu_tab ul>li').on('click', function (e) {
//     e.preventDefault();
//     let idx = $(this).index();
//     $('.project_wrap>*').eq(idx).addClass('on').siblings().removeClass('on');

// });

const M = document.querySelector('.pr_tab');
const MT = document.querySelectorAll('.pr_tab a');
const PJ = document.querySelectorAll('.project_wrap>*');

MT.forEach((it, idx) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        MT.forEach(it => it.classList.remove('on'))
        it.classList.add('on');
        PJ.forEach(it => it.classList.remove('on'))
        PJ[idx].classList.add('on');
    })
});

let typeSplit = new SplitType('.text_move p', {
    types: 'lines, words, chars',
    tagName: 'span'
})

gsap.from('.word', {
    y: '100%',
    opacity: 0,
    duration: 0.55,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".MainIndex",
        start: "top center",
    }
})

gsap.from('.MainProject .inner', {
    opacity: 0,
    y: -100,
    scrub: true,
    start: "center top",
});


gsap.from('.MainContact .inner', {
    y: 300,
    duration: 2,
    scrollTrigger: {
        trigger: ".MainIndex",
        start: "top center",
    }
})






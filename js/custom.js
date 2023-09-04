const panels = gsap.utils.toArray(".MainContent .itm");


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






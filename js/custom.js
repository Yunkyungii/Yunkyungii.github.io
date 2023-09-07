// const HEADER = document.querySelector('.Header');

// window.addEventListener('scroll', () => {
//     const sct = window.scrollY;
//     sct > 0
//         ? HEADER.classList.add('on')
//         : HEADER.classList.remove('on');
// });





//헤더
gsap.from('.Header', {
    opacity: 0,
    y: -100,
    duration: 0.8,
    delay: 1,
});

// 인트로 아이콘
gsap.from('.box span', {
    opacity: 0,
    y: -100,
    duration: 0.8,
});

//인덱스
gsap.to('.move_l span', {
    xPercent: -150,
    rotation: 30,
    scrollTrigger: {
        trigger: '.MainIndex',
        start: "top center",
        scrub: 0.5,
    },
});

gsap.to('.move_r span', {
    xPercent: 150,
    rotation: -30,
    scrollTrigger: {
        trigger: '.MainIndex',
        start: "top center",
        scrub: 0.5,
    },
});


// 메뉴 나타내기
gsap.fromTo('.pr_nav', {
    xPercent: 100,
    opacity: 0,
},
    {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.MainProject',
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse"
        },
    })


// 메뉴이동
const links = gsap.utils.toArray(".pr_nav ul li a");

links.forEach(link => {
    const element = document.querySelector(link.getAttribute("href"));
    const linkST = ScrollTrigger.create({
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
        //console.log(e.target.hash, linkST.start)
        gsap.to(window, {
            duration: 1,
            scrollTo: linkST.start - 200,
            overwrite: "auto"
        })
    })
});

function setActive(link) {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
};


// 여러개 이질감 표현하기
gsap.utils.toArray(".project").forEach(item => {
    gsap.from(item, {
        scale: 0.8,
        // '-webkit-filter': 'saturate(0.1)',
        //  yPercent: 10,
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "center center",
            scrub: 0.5,
        },
    })
});

// 한번에 이질감 표현하기
gsap.from('.traning_con', {
    scale: 0.8,
    ease: "none",
    duration: 0.5,
    scrollTrigger: {
        trigger: '.traning_con',
        start: "top bottom",
        end: "center center",
        scrub: 0.2,
    },
});






// const MENU_BTN = document.querySelector('.btn');
// const MENU = document.querySelector('.menu_con');
// const CON = document.querySelector('.inner')
//const BTN = document.querySelector('.btn');


// MENU_BTN.addEventListener('click', e => {
//     e.preventDefault();
//     MENU.classList.toggle('on');
//     CON.classList.toggle('on');


// });


const NAV = document.querySelectorAll('.gnb a');

NAV.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        gsap.to(window, {
            duration: 1,
            scrollTo: e.target.hash
        })
    })
});


const SKIP = document.querySelector('.MainIntro .explore');

SKIP.addEventListener("click", e => {
    e.preventDefault();
    gsap.to(window, {
        duration: 1,
        scrollTo: e.target.hash
    })

});



// 모바일
const M = document.querySelector('.Header .mo_btn');
const N = document.querySelector('.gnb')

M.addEventListener("click", function (e) {
    M.addEventListener('click', (e) => {
        e.preventDefault();
        M.classList.toggle('on');
        N.classList.toggle('on');
    });
})



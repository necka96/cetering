var t1 = gsap.timeline({ paused: true })
var t2 = gsap.timeline({ paused: true })
var t3 = gsap.timeline()
var menuToggle = document.getElementById("menuToggle")
var menuBar = gsap.timeline()
var text = document.querySelector("h1")
    char = document.querySelectorAll("h1 span")
    replaceChar = text.querySelectorAll('h1 span:not([data-char="."])')
menuBar.to(".bar-1", 0.5,{
 attr:{d: "M8,2 L2,8"},
 x:1,
 ease: Power2.easeInOut
}, "start")
menuBar.to(".bar-2", 0.5,{
 autoAlpha: 0
}, "start")
menuBar.to(".bar-3", 0.5,{
 attr:{d: "M8,8 L2,2"},
 x:1,
 ease: Power2.easeInOut
}, "start")

menuToggle.addEventListener("click", function(){
 menuBar.reversed(!menuBar.reversed())
 t1.reversed(!t1.reversed())
 t2.reversed(!t2.reversed())
})
menuBar.reverse()
t1.reverse()
t2.reverse()
t1.to(".fullpage-menu", {
 duration:0,
 display: "block",
 ease: "Expo.easeInOut"
})
t1.from(".menu-bg span",{
 duration: 1,
 x: "100%",
 stagger: 0.1,
 ease: "Expo.easeInOut"
})
t1.from(".main-menu li a ",{
 duration: 1.5,
 y: "110%",
 stagger: 0.1,
 ease: "Expo.easeInOut"
}, "-=0.5")
t2.from(".social-links li ",{
 duration: 2,
 y: "-100%",
 opacity: 0,
 stagger: 0.1,
 ease: "Expo.easeInOut"
}, "-=0.5")
t3.set(char,{
 yPercent: -110
})
t3.set(text,{
 autoAlpha: 1
})
t3.to(char,{
 duration: 1,
 yPercent: 0,
 stagger: 0.05,
 ease:"expo.inOut"
}).to(replaceChar,{
 duration: 1,
 yPercent: 110,
 ease:"expo.inOut",
 repeat: -1,
 yoyo: true,
 stagger: 0.1
})

// const counters = document.querySelectorAll(".counter")
// const speed = 100

// counters.forEach(counters => {
//     const updateCounter = () =>{
//         const target = +counters.getAttribute("data-target")
//         const count = +counters.innerText

//         const inc = target / speed
//         if(count < target){
//             counters.innerText = Math.ceil(count + inc)
//             setTimeout(updateCounter, 1)
//         }else{
//             count.innerText = target
//         }
//     }
//     updateCounter()
// })

     var swiper = new Swiper(".mySwiper", {
       autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
    var swiper = new Swiper(".testemonial-swiper", {
        slidesPerView: 3,
        autoplay: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

$(document).ready(function () {
    $(".counter").counterUp({
            delay: 10,
            time: 1200
    })
});
$(document).ready(function () {
  $("#date").html(new Date().getFullYear())
});

$(window).scroll(function () { 
  if($(this).scrollTop() > 1){
    $(".menu").addClass("active")
  }else{
    $(".menu").removeClass("active")
  }
});





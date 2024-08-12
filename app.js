// $(".center-p").scramble(4000, 20, "alphabet", true);
// $(".center-p2").scramble(4000, 20, "alphabet", true);

function StaggerEffect() {
    var tl = gsap.timeline();

    tl.to(".text-loader", {
        opacity: 1,
        duration: 0.09,
        stagger: {
            each: 0.14,
            repeat: 1,
            yoyo: true

        }

    })

    tl.to(".loader", {
        display: "none",
        duration: 0.1
    });

    tl.to(".center-p", {
        onStart: function () {
            $(".center-p").scramble(2000, 10, "alphabet", true);
        }
    }, "scr")
    tl.to(".center-p2", {
        onStart: function () {
            $(".center-p2").scramble(2000, 10, "alphabet", true);
        }
    }, "scr")
    tl.to(".info", {
        onStart: function () {
            $(".info").scramble(2000, 10, "alphabet", true);
        }
    }, "scr")
    tl.to(".contact", {
        onStart: function () {
            $(".contact").scramble(2000, 10, "alphabet", true);
        }
    }, "scr")
}
StaggerEffect();


var tl2 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#one",
            start: "50% 50%",
            end: "150% 50%",
            scrub: true,

        }
    }
);

tl2.to(".flex-p-content", {
    scale: "0.8"
})
    .to("#one-text", {
        top: "50%"
    })


gsap.timeline({
    scrollTrigger: {
        trigger: "#img-one",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,

    }
}).to("#img-one", {
    backgroundSize: "50%",
})



var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#one",
        pin: true,
        // markers: true,
        start: "50% 50%",
        end: "150% 50%",
        scrub: true
    }
});

tl2.to(".flex-p-content", {
    scale: "0.8"
})
    .to("#one-text", {
        top: "50%"
    })


gsap.timeline({
    scrollTrigger: {
        trigger: "#img-one",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-one", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-two",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-two", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-three",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-three", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-four",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-four", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-five",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-five", {
        backgroundSize: "50%",
    });





gsap.timeline({
    scrollTrigger: {
        trigger: "#last",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to(".flex-p-content", {
        scale: "1.2",
    });






document.querySelector("#img-one").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#b7b7b4";
})

document.querySelector("#img-one").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
})


document.querySelector("#img-two").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#c17811";
})

document.querySelector("#img-two").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
})


document.querySelector("#img-three").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#88321e";
})

document.querySelector("#img-three").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
})


document.querySelector("#img-four").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#bbbcb5";
})

document.querySelector("#img-four").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
})


document.querySelector("#img-five").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#97a09f";
})

document.querySelector("#img-five").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
})


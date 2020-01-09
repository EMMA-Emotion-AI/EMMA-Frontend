// @ts-nocheck
(function($){
    "use strict";

    // ====================== //
    // = Copyright (c) EMMA = //
    // ====================== //

    var particlesJS = particlesJS || window.particlesJS;

    function initParticles(){
        particlesJS("bg-animation", {
            "particles": {
                "number": {
                    "value": 250,
                    "density": {
                        "enable": true,
                        "value_area": 900
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                    "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 150,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    let $typedTextSpan = $(".emma-typer");
    let $cursorSpan = $(".emma-cursor");

    let textArray = [
        "EMMA",
        "エマ",
        "EMMA",
        "έμμα",
        "EMMA",
        "えま",
        "EMMA",
        "एम्मा",
        "EMMA",
        "艾瑪",
        "EMMA",
        "إيما",
        "EMMA",
        "אמה",
        "EMMA",
        "Эмма"
    ];

    let typingDelay = 90;
    let erasingDelay = 30;
    let newTextDelay = 1300;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type(){
        if (charIndex < textArray[textArrayIndex].length){
            if (!$cursorSpan.hasClass("typing")) $cursorSpan.addClass("typing");
            $typedTextSpan.append(textArray[textArrayIndex].charAt(charIndex));
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            $cursorSpan.removeClass("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase(){
        if (charIndex > 0){
            if (!$cursorSpan.hasClass("typing")) $cursorSpan.addClass("typing");
            $typedTextSpan.text(textArray[textArrayIndex].substring(0, charIndex - 1));
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            $cursorSpan.removeClass("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    function handleInputChange(){
        $(".input-wrapper > span.input-highlight").html($(this).val().replace(/\n/g, "&nbsp;"));
    }
    
    $(document).ready(function(){
        initParticles();
        setTimeout(type, newTextDelay + 250);
        $(".input-wrapper > input").on("input", handleInputChange);
    });
})(jQuery);

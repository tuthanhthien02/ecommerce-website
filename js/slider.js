const slider1 = document.querySelector("#glide_1");
const slider2 = document.querySelector("#glide_2");
const slider3 = document.querySelector("#glide_3");


if(slider1){
    new Glide(slider1, {
        type : 'carousel',
        startAt: 0,
        autoplay: 10000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: 'linear'
    }).mount();
}


if(slider2){
    new Glide(slider2, {
        type : 'carousel',
        startAt: 0,
        hoverpause: true,
        perView: 4,
        animationDuration: 800,
        animationTimingFunc: 'linear',
        // animationTimingFunc: 'cubic-bezier(.165, .840, .44, .1)',
        breakpoints: {
            1200: {
                perView: 3
            },
            768: {
                perView: 2
            }
        }
    }).mount();
}

if(slider3){
    new Glide(slider3,{
        type : 'carousel',
        startAt: 0,
        hoverpause: true,
        perView: 1,
        animationDuration: 400,
        animationTimingFunc: 'linear'
    }).mount();
}
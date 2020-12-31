const slider1 = document.querySelector("#glide_1");

if(slider1){
    new Glide(slider1, {
        type : 'carousel',
        startAt: 0,
        autoplay: 10000,
        hoverpause: true,
        perView: 1,
        animationDuation: 800,
        animationTimingFunc: 'linear'
    }).mount();
}
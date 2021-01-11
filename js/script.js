// Navigation

const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener('click', () => {
    menu.classList.add("open");
    document.body.classList.add("active");
    navContainer.style.left = "0";
    navContainer.style.width = "30rem";
});

navClose.addEventListener('click', () =>{
    menu.classList.remove("open");
    document.body.classList.remove("active");
    navContainer.style.left = "-30rem";
    navContainer.style.width = "0";
});

// Popup

const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");

if(popup){
    closePopup.addEventListener("click", () => {
       popup.classList.add("hide__popup");
    });

    // window.addEventListener("load", () => {
    //     setTimeout(() => {
    //         popup.classList.remove("hide__popup");
    //     }, 500)
        
    // });
}

// Fixex Navigation

const navBar = document.querySelector(".navigation");
const gotoTop = document.querySelector(".goto-top");
const scrollLink = document.querySelectorAll(".scroll-link");


gotoTop.addEventListener("click", e => {
        e.preventDefault();
        
        // const id = e.currentTarget.getAttribute("href").slice(1);
        // const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const fixNav = navBar.classList.contains("fixed__nav");

        let position = gotoTop.offsetTop - navHeight;

        // if(!fixNav){
        //     position = position - navHeight;
        // }

        window.scrollTo({
            left: 0,
            top: 0
        });

        navContainer.style.left = "-30rem";
        document.body.classList.remove("active");
    });


window.addEventListener("scroll", e => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add("fixed__nav");
    }
    else
    {
        navBar.classList.remove("fixed__nav");
    }

    if(scrollHeight > 300){
        gotoTop.classList.add("show__goto-top");
    }
    else{
        gotoTop.classList.remove("show__goto-top");
    }

});


// AOS
AOS.init();
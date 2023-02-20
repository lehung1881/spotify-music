const menuUser = document.querySelector(".header-right__user");

menuUser.onclick = function () {
    const userOld =document.querySelector(".user-list.user-list--hiden");
    const user = document.querySelector(".user-list");
    if (userOld) {
        userOld.classList.remove("user-list--hiden");
    } else {
        user.classList.add("user-list--hiden");
    }
    
};

document.addEventListener("click", function handleClickOutside(event) {
    const menuUser = document.querySelector(".header-right__user");
    const menuSub = document.querySelector(".user-list.user-list--hiden");
    var check = menuUser.contains(event.target);
    if(menuSub !== null){
        if (!menuSub.contains(event.target) && !check) {
            menuSub.classList.remove("user-list--hiden");
        }
    }
});
    



const navs = document.querySelectorAll(".nav-list__link");
navs.forEach((nav, index) => {
    nav.onclick = function () {
        const navact = document.querySelector(
            ".nav-list__link.nav-list__link--active"
        );
        if (navact) {
            navact.classList.remove("nav-list__link--active");
        }
        nav.classList.add("nav-list__link--active");
    };
});

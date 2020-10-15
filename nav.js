const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li')
//toggle nav
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

        //Animatiom
    navLinks.forEach((link, ResponsiveNavigationBar) => {
        if(link.style.animation)
        {
            link.style.animation = '';
        }
        else
        {
         link.style.animation = `navLinkFade 0.5s ease forwards ${ResponsiveNavigationBar / 7 + 0.5}s`;
        }
         
     });

     //burger Animation
     burger.classList.toggle('togg');

    });
    
}

navSlide();
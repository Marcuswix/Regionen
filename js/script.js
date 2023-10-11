// To the top function
function toTheTop()
{
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
}

// Hide "To the top" -button

window.addEventListener("scroll", function()
{
    let element = document.querySelector("#to-the-top")

    if (window.scrollY > 100)
    {
        element.classList.remove("hide-btn")
    }

    else
    {
        element.classList.add("hide-btn")
    }
})

// Menu function
let menuDevelopment = document.getElementById("togglemenu-development")
let menuHealth = document.getElementById("togglemenu-health")
let menuBackground = document.getElementById("menu-background")
let menuCulture = document.getElementById("togglemenu-culture")

let triggerOne = document.getElementById("development")
let triggerTwo = document.getElementById("health")
let triggerThree = document.getElementById("culture")

triggerOne.addEventListener("mouseenter", function()
{
    menuDevelopment.classList.remove("hide")
    menuBackground.classList.remove("hide")
    menuHealth.classList.add("hide")
    menuCulture.classList.add("hide")
})

triggerTwo.addEventListener("mouseenter", function()
{
    menuHealth.classList.remove("hide")
    menuBackground.classList.remove("hide")
    menuDevelopment.classList.add("hide")
    menuCulture.classList.add("hide")
})

triggerThree.addEventListener("mouseenter", function()
{
    menuCulture.classList.remove("hide")
    menuBackground.classList.remove("hide")
    menuDevelopment.classList.add("hide")
    menuHealth.classList.add("hide")
})

addEventListener("")


// let triggerTwo = document.getElementById("health")
// let triggerThree = document.getElementById("culture")
// let triggerFour = document.getElementById("work")
// let triggerFive = document.getElementById("school")

// let overlay = document.getElementById("overlay");

// triggerOne.addEventListener("mouseenter", function ()
// {
//     menuDevelopment.style.display = "grid";
//     menuHealth.style.display = "none"
    
// });

// triggerTwo.addEventListener("mouseenter", function ()
// {
//     menuHealth.style.display = "grid";
//     menuDevelopment.style.display = "none"
    
// });




// function menuFunction()
// {
//     menu.classList.remove("hide")
//     overlay.classList.add('show')
// }

// menu.addEventListener("click", function() 
//     {
//     menu.classList.add("hide")
//     overlay.classList.remove('show')
//     });


     

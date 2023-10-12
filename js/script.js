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
// const menuDevelopment = document.getElementById("togglemenu-development")
// const menuHealth = document.getElementById("togglemenu-health")
// const menuCulture = document.getElementById("togglemenu-culture")
// const menuWork = document.getElementById("togglemenu-work")
// const menuSchool = document.getElementById("togglemenu-school")
// const menuDemocracy = document.getElementById("togglemenu-democracy")
// const menuAbout = document.getElementById("togglemenu-about")

// // Triggers
// const showDevelopment = document.getElementById("development")
// const showHealth = document.getElementById("health")



// showHealth.addEventListener("mouseenter", function()
// {
//      showActiveColumn(menuHealth)
// })

function hideAllColumns(items) {
    items.forEach(item => {
        document.getElementById(item.dataset.target).classList.add('hide')
    })
}
function showActiveColumn(target) {
    document.getElementById(target).classList.remove("hide")

}

const menuItems = document.querySelectorAll('.main-menu-items');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', function(event) {
        console.log(event)
        hideAllColumns(menuItems)
        showActiveColumn(item.dataset.target)
    })
})

document.querySelector('#main-menu').addEventListener('mouseleave', e => {
    hideAllColumns(menuItems)
})




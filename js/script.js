// "To the top" function
function toTheTop()
{
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
}

// Hide "To the top" - button

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

// Desktop Menu function
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

// Mobil menu function
const toggleButton = document.getElementById("btn-bars")
const mobilMenu = document.getElementById("mobil-menu-list")
const exitMobilMenu = document.getElementById("xmark")
const searchMobil = document.getElementById("search-mobil")

function showMenu()
{
    if (mobilMenu.classList.contains("hide"))
    {
        toggleButton.classList.add("hide")
        mobilMenu.classList.remove("hide")
        exitMobilMenu.classList.remove("hide")
    }
}

function hideMenu()
{
    if (toggleButton.classList.contains("hide"))
    {
        mobilMenu.classList.add("hide")
        exitMobilMenu.classList.add("hide")
        toggleButton.classList.remove("hide")
    }
}

function showSearch ()
{
    if (searchMobil.classList.contains("hide"))
    {
        searchMobil.classList.remove("hide")
    }

    else
    {
        searchMobil.classList.add("hide")
    }
}




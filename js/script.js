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

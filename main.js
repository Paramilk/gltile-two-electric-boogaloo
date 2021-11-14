let currentScroll = true;
let isDesktop = null;

const callAndReturn = (fun) => {fun(); return fun}

document.getElementById("content").addEventListener("scroll", () => {
    let newState = document.getElementById("content").scrollTop === 0

    if (currentScroll !== newState) {
        currentScroll = newState
        console.log(newState)
        switch (currentScroll) {
            case true:
                document.getElementById("scroll").setAttribute("class", "scroll-visible")
                break
            case false:
                document.getElementById("scroll").setAttribute("class", "scroll-invisible")
                break
        }
    }
})

window.addEventListener('resize', callAndReturn(() => {
    let newState = window.innerWidth >= 800

    if (isDesktop !== newState) {
        isDesktop = newState
        let header = document.getElementById(isDesktop ? "header" : "header-mobile")
        let sanity = document.getElementById("sanity")
        sanity.setAttribute("style", `height: ${header.offsetHeight - header.offsetTop + Number(window.getComputedStyle(header)['font-size'].split("px")[0])}px`)
    }
}))

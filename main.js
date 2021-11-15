let currentScroll = true;
let isDesktop = null;

const callAndReturn = (fun) => {fun(); return fun}
const shuffle = (arr) => {console.log(arr); return arr.map((value) => ({value, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({value}) => value)}

document.getElementById("content").addEventListener("scroll", () => {
    let newState = document.getElementById("content").scrollTop === 0

    if (currentScroll !== newState) {
        currentScroll = newState
        console.log(newState)
        if (currentScroll) {
            document.getElementById("scroll").setAttribute("class", "scroll-visible")
        } else {
            document.getElementById("scroll").setAttribute("class", "scroll-invisible")
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

Promise.all([
    fetch("messages.json"),
    fetch("people.json")
]).then(async (data) => {
    return [JSON.parse(await data[0].text()), JSON.parse(await data[1].text())]
}).then((data) => {
    const [messages, people] = data
    let isRight = false
    shuffle(messages).slice(0, 5).forEach((message) => {
        const messageText = message['message'].replaceAll("[", '<span class="quote-highlight">').replaceAll("]", '</span>')
        const person = people[message['from']]
        const template = `
            <div class="testimonial">
                <h4>&ldquo;${messageText}&rdquo;</h4>
                <div><img src="${person.image}" class="testimonial-image" alt=""><span>${person.description}</span></div>
            </div>
        `
        document.getElementById("testimonials").innerHTML += template
    })
})

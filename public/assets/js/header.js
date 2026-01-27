// Header HTML

let header = document.getElementById("header");

header.innerHTML = generateHeader();

let burger = document.getElementById("burger");
let nav = document.getElementById("navigation");

burger.addEventListener("click", function() {
    if (nav.classList.contains("isDisplayed")) {
       nav.classList.remove("isDisplayed"); 
    } else {
        nav.classList.add("isDisplayed");
    }
})

// Generate Header

function generateHeader() {
    let template = `
        <div id="logo-group">
            <img id="grid-icon" src="/assets/images/icon-grid.svg">
            <img id="burger" src="/assets/images/icon-menu.svg">
            <h1>Grid</h1>
        </div>
        <nav id="navigation">
            ${generateNav()}
        </nav>
        <button>Sign In</button>
    `

    return template
}

// Generate Nav

function generateNav() {

    let navLinks = [
        "How it works",
        "Who we are",
        "What we do",
        "Contact us"
    ]

    let template = `<ul>`

    navLinks.forEach( link => {
        template += `
            <li><a href="">${link}</a></li>
        `
        if (link !== "Contact us") {
            template += `
                <li class="navGraphic">
                    <svg>
                        <circle>
                    </svg>
                </li>
            `
        }
    })

    template += `</ul>`

    return template
}

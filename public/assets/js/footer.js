// Footer HTML

let footer = document.getElementById("footer");

footer.innerHTML = generateFooter();

// Generate Header

function generateFooter() {
    return `
        <section id="mobileFooterContent">
            ${generateMobileFooterSection()}
        </section>
        <section id="desktopFooterContent">
            ${generateDesktopInfoSection()}
            ${generateContactSection()}
        </section>
    `
}

// Generate mobile footer

function generateMobileFooterSection() {
    return `
        <p class="copy">Copyright © 2018 • Your Company</p>
        <p class="copy">All rights reserved</p>
        <p class="made">Made in Setproduct.com</p> 
        <p class="made">One man digital agency</p>
        <p class="email">hello@setproduct.com</p>
        <section id="socials-container">
        ${generateSocials("mobile")}
        </section>
    `
}

// Generate Info Section

function generateDesktopInfoSection() {
    return `
    <section id="infoSection">
        ${generateSocials("desktop")}
        ${generateInfomationLinks()}
    </section>
    `
}

function generateSocials(layout) {
    let socials = [
        "facebook",
        "linkedin",
        "slack",
        "twitter"
    ]

    let template = ``

    if (layout === "desktop") {

        template += `
        <section id="socials">
            <h2>FOLLOW US</h2>
            <section id="socials-container">
        `

        socials.forEach( social => {
            template += `<img src="/assets/images/icon-${social}.svg" alt="${social} logo">`
        })

        template += `</section></section>`
    } else {
        socials.forEach( social => {
            template += `<img src="/assets/images/icon-${social}.svg" alt="${social} logo">`
        })
    }


    return template
}

function generateInfomationLinks() {
    let infoLinks = [
        "About Faster App",
        "Get in Touch",
        "Things We Like",
        "Onhovered / Active",
        "Privacy Policy",
        "Terms of Service",
        "We are hiring!",
        "Resources"
    ]

    let template = `
        <section id="infoLinks">
            <h2>INFORMATION</h2>
            <ul>
    `

    infoLinks.forEach( infoLink => {
        template += `<li><a href="">${infoLink}</a></li>`
    })

    template += `
            </ul>
        </section>
    `

    return template
}

// Generate Contact Section

function generateContactSection() {
    return `
    <section id="contactSection">
        <section>
            <h2>FOLLOW US</h2>
            <p>hello@fasterapp.com</p>
        </section>
        <section id="form-container">
            <h2>KEEP IN TOUCH</h2>
            <form>
                <section>
                    <input type="text" id="name" name="name" placeholder="Your name">
                    <input type="email" id="email" name="email" placeholder="E-mail">
                </section>
                <section id="bottom-form">
                    <textarea id="message" name="message">Leave your message</textarea>
                    <input type="submit" value="SEND">
                </section>
            </form>
        </section>
    </section>
    `
}
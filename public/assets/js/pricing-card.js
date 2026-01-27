// Card Content

let pricingCardContents = [
    {
        "name": "Free", 
        "badge": "Fine!", 
        "price": "Free",
        "per": "FOREVER",
        "features": [
            "Components-driven system",
            "Sales-boosting landing pages",
            "Awesome Feather icons pack"
        ],
        "icon": "/assets/images/free-check.svg",
        "cta": "Try for free"
    },
    {
        "name": "👤 Individual", 
        "badge": "BEST!", 
        "price": 24,
        "per": "MONTH",
        "features": [
            "Components-driven system",
            "Sales-boosting landing pages",
            "Awesome Feather icons pack",
            "Themed into 3 different styles",
            "Will help to learn Figma"
        ],
        "icon": "/assets/images/individual-check.svg",
        "cta": "Regular license",
        "isFeatured": true
    },
    {
        "name": "👥 Corporate", 
        "badge": "Wow!", 
        "price": 12,
        "per": "EDITOR",
        "features": [
            "Components-driven system",
            "Sales-boosting landing pages",
            "Awesome Feather icons pack",
            "Themed into 3 different styles"
        ],
        "icon": "/assets/images/corporate-check.svg",
        "cta": "Extended license"
    }
];

// Service card generator

let pricingCardContainer = document.getElementById("pricing-cards-container");

pricingCardContainer.innerHTML = generatePricingCards(pricingCardContents);

// Service Card HTML Template

function generatePricingCards(cardContents) {

    let template = ``;

    cardContents.forEach( content => {
        template += `
            <article class="pricing-card ${content.isFeatured ? "featured": ""}">
                <description>
                    <div class="heading">
                        <h3>${content.name}</h3>
                        <p>${content.badge}</p>
                    </div>
                    <p>$${content.price} <span>/ ${content.per}</span></p>
                    ${generateFeatureList(content.features, content.icon)}
                </description>
                <button>${content.cta}</button>
            </article>
        `
    });

    return template;
}

function generateFeatureList(features, icon) {

    let template = `<ul>`;

    features.forEach( feature => {
        template += `
            <li>
                <img src="${icon}">
                <p>${feature}</p>
            </li>
        `
    });

    template += `</ul>`

    return template;
}
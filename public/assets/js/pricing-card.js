// Card Content

let pricingCardContents = [
    {
        "name": "👤 Individual", 
        "badge": "BEST!", 
        "price": 24,
        "per": "month",
        "features": [
            "Components-driven system",
            "Sales-boosting landing pages",
            "Awesome Feather icons pack",
            "Themed into 3 different styles",
            "Will help to learn Figma"
        ]
    },
    {
        "name": "👤 Individual", 
        "badge": "BEST!", 
        "price": 24,
        "per": "month",
        "features": [
            "Components-driven system",
            "Sales-boosting landing pages",
            "Awesome Feather icons pack",
            "Themed into 3 different styles",
            "Will help to learn Figma"
        ]
    },
    {
        "name": "👤 Individual", 
        "badge": "BEST!", 
        "price": 24,
        "per": "month",
        "features": [
            "Components-driven system",
            "Sales-boosting landing pages",
            "Awesome Feather icons pack",
            "Themed into 3 different styles",
            "Will help to learn Figma"
        ]
    },
];

// Service card generator

let pricingCardContainer = document.getElementById("pricing-cards-container");

pricingCardContainer.innerHTML = generatePricingCards(pricingCardContents);

// Service Card HTML Template

function generatePricingCards(cardContents) {

    let template = ``;

    cardContents.forEach( content => {
        template += `
            <article class="pricing-card">
                <div class="heading">
                    <h3>${content.name}</h3>
                    <p>${content.badge}</p>
                </div>
                <p>$${content.price} <span>/ ${content.per}</span></p>
                ${generateFeatureList(content.features)}
                <button>Learn more</button>
            </article>
        `
    });

    return template;
}

function generateFeatureList(features) {

    let template = `<ul>`;

    features.forEach( feature => {
        template += `
            <li>
                <img>
                <p>${feature}</p>
            </li>
        `
    });

    template += `</ul>`

    return template;
}
// Service Card Content

let serviceCardContents = [
    {
        "imageURL": "/assets/images/icon-phone-call.svg",
        "backgroundColor": "#E84393", 
        "name": "Support", 
        "description": "Delivering faster and more personalized support with shared screens and cool design systems for Figma"
    },
    {
        "imageURL": "/assets/images/icon-pie-chart.svg",
        "backgroundColor": "#0984E3",  
        "name": "Sales Growth", 
        "description": "Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot"
    },
    {
        "imageURL": "/assets/images/icon-zap.svg",
        "backgroundColor": "#6C5CE7",  
        "name": "Component-driven", 
        "description": "Delivering faster and more personalized support with shared screens and cool design systems for Figma"
    },
    {
        "imageURL": "/assets/images/icon-thumbs-up.svg",
        "backgroundColor": "#00B894",  
        "name": "Swap the icon", 
        "description": "You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter"
    },
];

// Service card generator

let servicesContainer = document.getElementById("services-container");

servicesContainer.innerHTML = generateServiceCards(serviceCardContents);

// Service Card HTML Template

function generateServiceCards(cardContents) {

    let template = ``;

    cardContents.forEach( content => {
        template += `
            <article class="services-card">
                <description>
                    <div class="icon-container" style="background-color: ${content.backgroundColor}">
                        <img src=${content.imageURL}>
                    </div>
                    <h3>${content.name}</h3>
                    <p>${content.description}</p>
                </description>
                <button>Learn more</button>
            </article>
        `
    });

    return template;
}
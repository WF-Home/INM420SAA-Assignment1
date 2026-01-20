// Service Card Content

let serviceCardContents = [
    {
        "imageURL": "/assets/images/arrow-down.svg", 
        "name": "Support", 
        "description": "Delivering faster and more personalized support with shared screens and cool design systems for Figma"
    },
    {
        "imageURL": "/assets/images/arrow-down.svg", 
        "name": "Sales Growth", 
        "description": "Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot"
    },
    {
        "imageURL": "/assets/images/arrow-down.svg", 
        "name": "Component-driven", 
        "description": "Delivering faster and more personalized support with shared screens and cool design systems for Figma"
    },
    {
        "imageURL": "/assets/images/arrow-down.svg", 
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
                    <img src=${content.imageURL}>
                    <h3>${content.name}</h3>
                    <p>${content.description}</p>
                </description>
                <button>Learn more</button>
            </article>
        `
    });

    return template;
}
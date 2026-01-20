
import food1 from "./asset/image/food1.jpg";

const content = document.querySelector("#content");
export function loadHome() {
    content.innerHTML = '';
    const container = document.createElement('div');
    container.classList.add('row', 'mt-5', 'grid-container', 'scroolAnimation');
    const div = document.createElement('div');
    div.classList.add('col-lg-6', 'mb-3', 'home-text');
    const headerText = document.createElement('h1');
    headerText.innerHTML = "A <br>Premium <br>And <br>Authentic <br>Steakhouse";
    div.appendChild(headerText);
    container.appendChild(div);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add('col-lg-6', 'img-div', 'scroolAnimation');
    const food_image = document.createElement('img');
    food_image.classList.add('col-lg-6', 'w-75', 'home-main', 'img-fluid');
    food_image.src = food1 ;
    food_image.alt = "Food";
    imageDiv.appendChild(food_image);
    container.appendChild(imageDiv);
    content.appendChild(container);
}
loadHome();


import food2 from './asset/image/food2.jpg';
import food3 from './asset/image/food3.jpg';
import food4 from './asset/image/food4.jpg';
import food5 from './asset/image/food5.jpg';

const content = document.querySelector("#content");
export function menuFunction() {
    content.innerHTML = '';
    const container_div = document.createElement('div');
    container_div.classList.add('container', 'mt-3', 'container-div');
    const divText = document.createElement('div');
    const headText = document.createElement('h1');
    headText.classList.add('fastFood');
    headText.textContent = "FAST FOOD MENU";
    divText.appendChild(headText);
    container_div.appendChild(divText);

    const container_div2 = document.createElement('div');
    container_div2.classList.add('row', 'mb-4', 'div-container');
    function firstFood_function() {
        const foodDiv1 = document.createElement('div');
        foodDiv1.classList.add('food-div', 'col-sm-12', 'col-md-6', 'col-lg-6', 'scroolAnimation');
        const food_divImage = document.createElement("img");
        food_divImage.src = food2; 
        food_divImage.alt = "Egusi Soup";
        food_divImage.classList.add('img-fluid', 'image-scroll', 'food-img');
        const foodHeader = document.createElement('h1');
        foodHeader.textContent = "Egusi Soup";
        const foodDetails = document.createElement("p");
        foodDetails.classList.add('row');
        foodDetails.innerHTML = `
            <span class="col-sm-6 col-md-6 col-lg-6">Small Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$10</span><span class="col-sm-6 col-md-6 col-lg-6">Meduim Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$15</span><span class="col-sm-6 col-md-6 col-lg-6">Large Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$25</span>
        `;
        foodDiv1.appendChild(food_divImage);
        foodDiv1.appendChild(foodHeader);
        foodDiv1.appendChild(foodDetails);
        container_div2.appendChild(foodDiv1);
        container_div.appendChild(container_div2);
        content.appendChild(container_div);
    }
    firstFood_function();

    function secondFood_function() {
        const foodDiv2 = document.createElement('div');
        foodDiv2.classList.add('food-div', 'col-sm-12', 'col-md-6', 'col-lg-6', 'scroolAnimation');
        const food_divImage2 = document.createElement("img");
        food_divImage2.src = food3;
        food_divImage2.alt = "Chicken";
        food_divImage2.classList.add('img-fluid', 'image-scroll', 'food-img');
        const foodHeader2 = document.createElement('h1');
        foodHeader2.textContent = "Chicken";
        const foodDetails2 = document.createElement("p");
        foodDetails2.classList.add('row');
        foodDetails2.innerHTML = `
            <span class="col-sm-6 col-md-6 col-lg-6">Small Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$12</span> <br><span class="col-sm-6 col-md-6 col-lg-6">Meduim Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$16</span> <br><span class="col-sm-6 col-md-6 col-lg-6">Large Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$22</span> <br>
        `;
        foodDiv2.appendChild(food_divImage2);
        foodDiv2.appendChild(foodHeader2);
        foodDiv2.appendChild(foodDetails2);
        container_div2.appendChild(foodDiv2);
        container_div.appendChild(container_div2);
        content.appendChild(container_div);
    }
    secondFood_function();
        
    function thirdFood_function() {
        const foodDiv3 = document.createElement('div');
        foodDiv3.classList.add('food-div', 'col-sm-12', 'col-md-6', 'col-lg-6', 'scroolAnimation');
        const food_divImage3 = document.createElement("img");
        food_divImage3.src = food4;
        food_divImage3.alt = "Jellof Rice";
        food_divImage3.classList.add('img-fluid', 'image-scroll', 'food-img');
        const foodHeader3 = document.createElement('h1');
        foodHeader3.textContent = "Jellof Rice";
        const foodDetails3 = document.createElement("p");
        foodDetails3.classList.add('row');
        foodDetails3.innerHTML = `
            <span class="col-sm-6 col-md-6 col-lg-6">Small Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$12</span> <br><span class="col-sm-6 col-md-6 col-lg-6">Meduim Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$16</span> <br><span class="col-sm-6 col-md-6 col-lg-6">Large Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$22</span> <br>
        `;
        foodDiv3.appendChild(food_divImage3);
        foodDiv3.appendChild(foodHeader3);
        foodDiv3.appendChild(foodDetails3);
        container_div2.appendChild(foodDiv3);
        container_div.appendChild(container_div2);
        content.appendChild(container_div);
    }
    thirdFood_function();

    function fouthFood_function() {
        const foodDiv4 = document.createElement('div');
        foodDiv4.classList.add('food-div', 'col-sm-12', 'col-md-6', 'col-lg-6', 'scroolAnimation');
        const food_divImage4 = document.createElement("img");
        food_divImage4.src = food5;
        food_divImage4.alt = "White Rice";
        food_divImage4.classList.add('img-fluid', 'image-scroll', 'food-img');
        const foodHeader4 = document.createElement('h1');
        foodHeader4.textContent = "White Rice";
        const foodDetails4 = document.createElement("p");
        foodDetails4.classList.add('row');
        foodDetails4.innerHTML = `
            <span class="col-sm-6 col-md-6 col-lg-6">Small Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$15</span> <br><span class="col-sm-6 col-md-6 col-lg-6">Meduim Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$23</span> <br><span class="col-sm-6 col-md-6 col-lg-6">Large Size</span> <span class="col-sm-6 col-md-6 col-lg-6">$30</span> <br>
        `;
        foodDiv4.appendChild(food_divImage4);
        foodDiv4.appendChild(foodHeader4);
        foodDiv4.appendChild(foodDetails4);
        container_div2.appendChild(foodDiv4);
        container_div.appendChild(container_div2);
        content.appendChild(container_div);
    }
    fouthFood_function();
};

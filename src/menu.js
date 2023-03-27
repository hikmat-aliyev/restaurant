import './styles.css';

function menuLoad() {
    const divContent = document.getElementById("content");
    while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }
    const firstMeal = document.createElement("div");
    firstMeal.setAttribute("class", "meal-div")
    divContent.appendChild(firstMeal);
    const firstMealName = document.createElement("h5");
    firstMealName.textContent = 'Mapo tofu';
    const firstMealImg = document.createElement("img");
    firstMealImg.src = "../images/sichuan.png"
    const firstMealDescription = document.createElement("p");
    firstMealDescription.setAttribute("class", "meal-descriptions")
    firstMealDescription.textContent = 'It consists of tofu set in a spicy sauce, typically a thin, oily, and bright red suspension.'
    firstMealImg.setAttribute("class", "meal-images");
    firstMeal.appendChild(firstMealName);
    firstMeal.appendChild(firstMealImg);
    firstMeal.appendChild(firstMealDescription);
    divContent.appendChild(firstMeal);

    const secondMeal = document.createElement("div");
    secondMeal.setAttribute("class", "meal-div");
    const secondMealName = document.createElement("h5");
    secondMealName.textContent = 'Fried rice';
    const secondMealImg = document.createElement("img");
    secondMealImg.src = "../images/fried-rice.png"
    const secondMealDescription = document.createElement("p");
    secondMealDescription.textContent = 'It is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is  mixed with other ingredients such as eggs, vegetables, seafood, or meat.'
    secondMealImg.setAttribute("class", "meal-images");
    secondMealDescription.setAttribute("class", "meal-descriptions")
    secondMeal.appendChild(secondMealName);
    secondMeal.appendChild(secondMealImg);
    secondMeal.appendChild(secondMealDescription);
    divContent.appendChild(secondMeal);


    const thirdMeal = document.createElement("div");
    thirdMeal.setAttribute("class", "meal-div")
    const thirdMealName = document.createElement("h5");
    thirdMealName.textContent = 'Chow mein';
    const thirdMealImg = document.createElement("img");
    thirdMealImg.src = "../images/chow-mein.png"
    const thirdMealDescription = document.createElement("p");
    thirdMealDescription.textContent = 'It is made from stir-fried noodles with vegetables and sometimes meat or tofu.'
    thirdMealImg.setAttribute("class", "meal-images");
    thirdMealDescription.setAttribute("class", "meal-descriptions")
    thirdMeal.appendChild(thirdMealName);
    thirdMeal.appendChild(thirdMealImg);
    thirdMeal.appendChild(thirdMealDescription);
    divContent.appendChild(thirdMeal);
  
     
}

export { menuLoad }
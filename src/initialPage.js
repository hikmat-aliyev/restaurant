import './styles.css';


function pageLoad () {
    const divContent = document.getElementById("content");
    while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }

    const title = document.createElement("p");
    title.textContent = "Hikmat's Restaurant";
    const about = document.createElement("p");
    about.textContent = "Serving people since 1925";
    divContent.appendChild(title);
    divContent.appendChild(about);
    const img = document.createElement("img");
    img.src = "../images/chef.jpg";
    img.setAttribute("id", "chef-img")
    divContent.appendChild(img);
}

export { pageLoad }
import './styles.css';

function contactLoad() {
    const divContent = document.getElementById("content");
    while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }

    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("id", "contact-div");
    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact US";
    const contactInfo = document.createElement("h4");
    contactInfo.textContent = "Manager: +994 51 390 00 15";
    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactInfo);
    divContent.appendChild(contactDiv);

}

export { contactLoad }
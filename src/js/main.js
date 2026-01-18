import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setIntroInfo(data) {
    const intro = document.querySelector(".intro");
    intro.innerHTML = `<h2>${data.fullName}</h2><p>${data.description}</p>`
}

function setInfoInfo(data) {
    let html =``;

    data.forEach((object) => {
        html += mediaCardTemplate(object);
    });

    const info = document.querySelector(".info");
    info.innerHTML = html;
}

setHeaderFooter(getParkData());
setIntroInfo(getParkData());
setInfoInfo(parkInfoLinks);
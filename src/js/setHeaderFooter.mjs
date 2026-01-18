import { footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    const title = document.querySelector("title");
    title.innerHTML = data.fullName;

    const heroImage = document.querySelector(".hero-banner > img");
    heroImage.src = data.images[0].url;
    heroImage.alt = data.images[0].altText;

    const heroName = document.querySelector(".hero-banner__title");
    heroName.innerHTML = data.name;

    const designation = document.querySelector(".hero-banner__subtitle");
    designation.innerHTML = `<span>${data.designation}</span><span>${data.states}</span>`;
}

function setFooterInfo(data) {
    const parkFooter = document.querySelector("#park-footer");
    parkFooter.innerHTML = footerTemplate(data);
}

function setHeaderFooter(data) {
    setHeaderInfo(data);
    setFooterInfo(data);
}

export default setHeaderFooter;
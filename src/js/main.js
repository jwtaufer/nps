import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

const title = document.querySelector("title");
title.innerHTML = parkData.fullName;

const heroImage = document.querySelector(".hero-banner > img");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

const heroName = document.querySelector(".hero-banner__title");
heroName.innerHTML = parkData.name;

const designation = document.querySelector(".hero-banner__subtitle");
designation.innerHTML = `<span>${parkData.designation}</span><span>${parkData.states}<span>`;
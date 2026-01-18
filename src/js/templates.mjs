export function mediaCardTemplate(info) {
    return `<div class="media-card">
        <a href="${info.link}">
            <img src="${info.image}" />
            <h3>${info.name}</h3>
        </a>
        <p>${info.description}</p>
    </div>`;
}

export function footerTemplate(data) {
    const mailingAddress = data.addresses.find((address) => address.type === "Mailing");
    const voicePhoneNumber = data.contacts.phoneNumbers.find((number) => number.type === "Voice");

    return`<h4>CONTACT INFO</h4>
    <div class="mailing-address">
        <h5>Mailing Address:</h5>
        <p>${mailingAddress.line1}</p>
        <p>${mailingAddress.city}, ${mailingAddress.stateCode} ${mailingAddress.postalCode}</p>
    </div>
    <div class="phone">
        <h5>Phone:</h5>
        <p>${voicePhoneNumber.phoneNumber}</p>
    </div>`
}
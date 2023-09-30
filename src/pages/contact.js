const displayContact = () => {
  const contentDiv = document.querySelector('.content');

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');
  mainDiv.classList.add('contactpage');

  const contactHeader = document.createElement('div');
  contactHeader.classList.add('contact-header');
  contactHeader.innerHTML = `Contact us:`;
  mainDiv.appendChild(contactHeader);

  const phoneContainer = document.createElement('div');
  phoneContainer.classList.add('container');
  const phoneEmoji = document.createElement('div');
  phoneEmoji.classList.add('emoji');
  phoneEmoji.innerHTML = `&#128222;`;
  phoneContainer.appendChild(phoneEmoji);
  const phoneNumber = document.createElement('div');
  phoneNumber.classList.add('phone-number');
  phoneNumber.innerHTML = `+12 34 567 890`;
  phoneContainer.appendChild(phoneNumber);
  mainDiv.appendChild(phoneContainer);

  const emailContainer = document.createElement('div');
  emailContainer.classList.add('container');
  const emailEmoji = document.createElement('div');
  emailEmoji.classList.add('emoji');
  emailEmoji.innerHTML = `&#128231;`;
  emailContainer.appendChild(emailEmoji);
  const email = document.createElement('div');
  email.classList.add('email');
  email.innerHTML = `email@address.site`;
  emailContainer.appendChild(email);
  mainDiv.appendChild(emailContainer);

  const addressContainer = document.createElement('div');
  addressContainer.classList.add('container');
  const addressEmoji = document.createElement('div');
  addressEmoji.classList.add('emoji');
  addressEmoji.innerHTML = `&#128205;`;
  addressContainer.appendChild(addressEmoji);
  const address = document.createElement('div');
  address.classList.add('address');
  address.innerHTML = `34 Bernhard Street,<br>Cape Town,<br>South Africa,<br>7780`;
  addressContainer.appendChild(address);
  mainDiv.appendChild(addressContainer);



  contentDiv.appendChild(mainDiv);
}

export default displayContact;

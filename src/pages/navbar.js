const displayNav = () => {
  const contentDiv = document.querySelector('.content');

  const navDiv = document.createElement('div');
  navDiv.classList.add('nav');

  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = `Ice Cream Haven`;

  const linksDiv = document.createElement('div');
  linksDiv.classList.add('links');

  const homeLink = document.createElement('div');
  homeLink.innerHTML = `Home`;
  homeLink.classList.add('home');

  const menuLink = document.createElement('div');
  menuLink.innerHTML = `Menu`;
  menuLink.classList.add('menu');

  const contactLink = document.createElement('div');
  contactLink.innerHTML = 'Contact';
  contactLink.classList.add('contact');

  contentDiv.appendChild(navDiv);

  navDiv.appendChild(title);
  navDiv.appendChild(linksDiv);

  linksDiv.appendChild(homeLink);
  linksDiv.appendChild(menuLink);
  linksDiv.appendChild(contactLink);
}

export default displayNav;

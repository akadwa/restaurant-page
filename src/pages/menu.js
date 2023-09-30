import Image1 from '../images/dana-devolk-5-RS_ScO3X4-unsplash.jpg';
import Image2 from '../images/la-albuquerque--xq5BTa2vSk-unsplash.jpg';
import Image3 from '../images/rachael-gorjestani-HLt6jQLf_J0-unsplash.jpg';
import Image4 from '../images/raphael-lovaski-Nag3E3yzygU-unsplash.jpg';

const displayMenu = () => {
  const contentDiv = document.querySelector('.content');

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');
  mainDiv.classList.add('menupage-text');

  const menuHeader = document.createElement('div');
  menuHeader.classList.add('menu-header');
  menuHeader.innerHTML = `Menu`;
  mainDiv.appendChild(menuHeader);

  const gridItem1 = document.createElement('div');
  gridItem1.classList.add('grid-item');
  const image1 = document.createElement('img');
  image1.src = Image1;
  const itemName1 = document.createElement('div');
  itemName1.classList.add('item-name');
  itemName1.innerHTML = `English Toffee`;
  const itemPrice1 = document.createElement('div');
  itemPrice1.classList.add('price');
  itemPrice1.innerHTML = `$1.99`;
  gridItem1.appendChild(image1);
  gridItem1.appendChild(itemName1);
  gridItem1.appendChild(itemPrice1);

  const gridItem2 = document.createElement('div');
  gridItem2.classList.add('grid-item');
  const image2 = document.createElement('img');
  image2.src = Image2;
  const itemName2 = document.createElement('div');
  itemName2.classList.add('item-name');
  itemName2.innerHTML = `Candy Floss`;
  const itemPrice2 = document.createElement('div');
  itemPrice2.classList.add('price');
  itemPrice2.innerHTML = `$2.99`;
  gridItem2.appendChild(image2);
  gridItem2.appendChild(itemName2);
  gridItem2.appendChild(itemPrice2);

  const gridItem3 = document.createElement('div');
  gridItem3.classList.add('grid-item');
  const image3 = document.createElement('img');
  image3.src = Image3;
  const itemName3 = document.createElement('div');
  itemName3.classList.add('item-name');
  itemName3.innerHTML = `Caramel Swirl`;
  const itemPrice3 = document.createElement('div');
  itemPrice3.classList.add('price');
  itemPrice3.innerHTML = `$2.49`;
  gridItem3.appendChild(image3);
  gridItem3.appendChild(itemName3);
  gridItem3.appendChild(itemPrice3);

  const gridItem4 = document.createElement('div');
  gridItem4.classList.add('grid-item');
  const image4 = document.createElement('img');
  image4.src = Image4;
  const itemName4 = document.createElement('div');
  itemName4.classList.add('item-name');
  itemName4.innerHTML = `Choc Mint`;
  const itemPrice4 = document.createElement('div');
  itemPrice4.classList.add('price');
  itemPrice4.innerHTML = `$2.49`;
  gridItem4.appendChild(image4);
  gridItem4.appendChild(itemName4);
  gridItem4.appendChild(itemPrice4);

  mainDiv.appendChild(gridItem1);
  mainDiv.appendChild(gridItem2);
  mainDiv.appendChild(gridItem3);
  mainDiv.appendChild(gridItem4);


  // const image = document.createElement('img');
  // image.src = Image;
  // mainDiv.innerHTML = `Hello`;
  // mainDiv.appendChild(image);

  contentDiv.appendChild(mainDiv);
}

export default displayMenu;

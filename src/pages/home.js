const displayHome = () => {
  const contentDiv = document.querySelector('.content');

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');
  mainDiv.classList.add('homepage-text');
  mainDiv.innerHTML = `Welcome to our delightful world of frozen indulgence! At Ice Cream Haven, we believe that every scoop of
      ice
      cream should be a moment of pure bliss. Step into our virtual ice cream parlor and embark on a journey of
      tantalizing
      flavors and creamy delights. From classic favorites like velvety vanilla and rich chocolate to innovative
      creations that
      push the boundaries of taste, our handcrafted ice creams are made with the finest ingredients and a sprinkle of
      love.
      Whether you're seeking a refreshing treat on a sunny day or a sweet escape from the ordinary, our wide range of
      flavors
      and toppings will satisfy every craving. Join us in celebrating the joy of ice cream and experience a taste
      sensation
      that will leave you craving for more. Indulge in the magic of frozen perfection at Ice Cream Haven.`;

  contentDiv.appendChild(mainDiv);
}

export default displayHome;

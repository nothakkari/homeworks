const socialList = document.getElementById('socialList');
    const links = socialList.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('mouseover', changeColor);
      links[i].addEventListener('click', preventDefaultAndChangeColor);
    }

    function changeColor(event) {
      const randomColor = getRandomColor();
      event.target.style.color = randomColor;
    }

    function preventDefaultAndChangeColor(event) {
      event.preventDefault();
      const randomColor = getRandomColor();
      event.target.style.color = randomColor;
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
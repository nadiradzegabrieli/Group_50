    function showImage(role) {
      const imageBox = document.getElementById('imageDisplay');
      const img = document.createElement('img');

      if (role === 'programmer') {
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyfqMRqQZZQ2OoOgWcE7BzDk0fpfQ693YTw&s';
      } else if (role === 'designer') {
        img.src = 'https://icieducation.co.uk/blog/wp-content/uploads/2022/11/a-graphic-designer-working-on-his-desktop-computer.jpg';
      } else if (role === 'mechanic') {
        img.src = 'https://www.autotrainingcentre.com/wp-content/uploads/2024/07/auto-mechanic.jpg';
      }

      imageBox.appendChild(img);
    }

    
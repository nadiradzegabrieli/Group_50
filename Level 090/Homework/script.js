const addBtn = document.getElementById('add-btn');
    const countEl = document.getElementById('count');

    let cartCount = localStorage.getItem('cartCount') || 0;
    countEl.textContent = cartCount;


    addBtn.addEventListener('click', () => {
      cartCount++;
      localStorage.setItem('cartCount', cartCount);
      countEl.textContent = cartCount;


      addBtn.textContent = 'დამატებულია!';
      setTimeout(() => addBtn.textContent = 'დამატება კალათაში', 1000);
    });
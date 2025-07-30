const catImg = document.getElementById('catImage');
const btn = document.getElementById('getCat');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    catImg.src = data[0].url;
  } catch (error) {
    console.error('Cat-fetching failed 🐾', error);
  }
});
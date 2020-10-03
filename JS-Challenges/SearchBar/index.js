const searchInput = document.getElementById('searchInput');
const allNames = document.getElementsByClassName('name'); // Creats an HTML collection (Data to be searched)

// Search function
searchInput.addEventListener('keyup', (event) => {
  let searchQuery = event.target.value.toLowerCase();

  for (let i = 0; i < allNames.length; i++) {
    const currentName = allNames[i].textContent.toLowerCase();
    if (currentName.includes(searchQuery)) {
      allNames[i].style.display = 'block';
    } else {
      allNames[i].style.display = 'none';
    }
  }
});

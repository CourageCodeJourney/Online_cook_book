const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const items = document.querySelectorAll('.item'); // Select all recipe items

searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput');
    const items = document.querySelectorAll('.item'); // Select all recipe items
    
    searchInput.addEventListener('keyup', () => {  // Use 'keyup' event
      const searchTerm = searchInput.value.toLowerCase(); // Get search term in lowercase
    
      items.forEach(item => {
        const recipeTitle = item.querySelector('p').textContent.toLowerCase(); // Get recipe title in lowercase
        const match = recipeTitle.includes(searchTerm); // Check for match
    
        item.style.display = match ? 'block' : 'none'; // Ternary operator for display
      });
    });
});
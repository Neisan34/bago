// filter.js
document.addEventListener('DOMContentLoaded', function() {
  const productCategoryDropdown = document.getElementById('product-category');
  const sortOptionsDropdown = document.getElementById('sort-options');
  const products = document.querySelectorAll('.col-4');

  productCategoryDropdown.addEventListener('change', updateFilters);
  sortOptionsDropdown.addEventListener('change', updateSorting);

  function updateFilters() {
    const selectedCategory = productCategoryDropdown.value;

    products.forEach(product => {
      product.style.display = selectedCategory === 'all' || product.id === selectedCategory ? 'block' : 'none';
    });
  }

  function updateSorting() {
    const selectedOption = sortOptionsDropdown.value;

    if (selectedOption === 'price') {
      Array.from(products)
          .sort((a, b) => {
              const priceA = parseInt(a.getAttribute('data-price'));
              const priceB = parseInt(b.getAttribute('data-price'));
              return priceA - priceB; // Sort in ascending order of price
          })
          .forEach(product => product.parentElement.appendChild(product));
    } else if (selectedOption === 'rating') {
      Array.from(products)
        .sort((a, b) => {
          const ratingA = a.querySelectorAll('.fa-solid.fa-star').length;
          const ratingB = b.querySelectorAll('.fa-solid.fa-star').length;
          return ratingB - ratingA; // Sort in descending order of rating
        })
        .forEach(product => product.parentElement.appendChild(product));
    }
  }
});

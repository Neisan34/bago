const searchByNameInput = document.getElementById("searchByName");
const searchByNameButton = document.getElementById("searchByNameButton");
const products = document.querySelectorAll(".col-4");

searchByNameButton.addEventListener("click", performNameSearch);

function performNameSearch() {
    const searchTerm = searchByNameInput.value.toLowerCase();
    const searchResults = [];

    products.forEach(product => {
        const productName = product.querySelector("h4").textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            searchResults.push(product);
        }
    });

    displaySearchResultsByName(searchResults);
}

function displaySearchResultsByName(results) {
    const searchResultsContainer = document.querySelector(".search-results");
    searchResultsContainer.innerHTML = "";

    if (results.length === 0) {
        searchResultsContainer.textContent = "No matching products found.";
    } else {
        results.forEach(result => {
            searchResultsContainer.appendChild(result.cloneNode(true));
        });
    }
}
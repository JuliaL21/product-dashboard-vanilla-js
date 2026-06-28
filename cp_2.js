const API_URL = "https://www.course-api.com/javascript-store-products";

// Step 3: Promise-based fetch using .then() and .catch()
function fetchProductsThen() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => console.log(product.fields.name));
    })
    .catch((error) => handleError(error));
}

// Step 4: async/await fetch with try/catch
async function fetchProductsAsync() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

// Step 5: render the first 5 products
function displayProducts(products) {
  const container = document.getElementById("product-container");

  products.slice(0, 5).forEach((product) => {
    const { name, price, image } = product.fields;

    const card = document.createElement("div");
    card.classList.add("product-card");

    // price comes in cents from this API, convert to dollars
    const dollars = (price / 100).toFixed(2);

    card.innerHTML = `
      <img src="${image[0].url}" alt="${name}" />
      <h3>${name}</h3>
      <p class="price">$${dollars}</p>
    `;

    container.appendChild(card);
  });
}

// Step 6: reusable error handler
function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}

// Step 7: call both functions
fetchProductsThen();
fetchProductsAsync();

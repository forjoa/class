const container = document.getElementById("root");
const name = document.createElement("h3");

fetch("http://localhost:3000/api/products/show")
  .then((response) => response.json())
  .then((productos) => {
    productos.forEach((producto) => {
      const name = document.createElement("h3");
      const description = document.createElement("p");
      const price = document.createElement("h2");

      name.textContent = producto.name;
      description.textContent = producto.description;
      price.textContent = producto.price;

      container.appendChild(name);
      container.appendChild(description);
      container.appendChild(price);
    });
  })
  .catch((error) => {
    console.error(error);
  });

const root = document.getElementById("root");
const name = document.createElement("h3");

let productos = [];
let cart = [];

// show products
fetch("http://localhost:3000/api/products/show")
  .then((response) => response.json())
  .then((products) => {
    productos = products;
    productos.forEach((producto) => {
      const container = document.createElement("div");
      container.className = "producto";

      const name = document.createElement("h3");
      const description = document.createElement("p");
      const price = document.createElement("h2");
      const buy = document.createElement("button");

      name.textContent = producto.name;
      description.textContent = producto.description;
      price.textContent = `€ ${producto.price}`;
      buy.textContent = "Añadir";

      if (!producto.availability) {
        buy.disabled = true;
        buy.textContent = "No disponible";
      }

      container.appendChild(name);
      container.appendChild(description);
      container.appendChild(price);
      container.appendChild(buy);

      container.setAttribute("data_id", producto.id);
      container.setAttribute("category_id", producto.category_id);
      container.setAttribute("name", producto.name);
      container.setAttribute("description", producto.description);
      container.setAttribute("price", producto.price);

      root.appendChild(container);
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        cart.push({
          id: e.target.parentNode.getAttribute("data_id"),
          name: e.target.parentNode.getAttribute("name"),
          description: e.target.parentNode.getAttribute("description"),
          price: Number(e.target.parentNode.getAttribute("price")),
        });
        cartContainer.innerHTML = "";

        counter.innerText = cart.length;

        cart.forEach((prod, index) => {
          const prodCartCont = document.createElement("div");
          prodCartCont.className = "prodInCart";
          const name = document.createElement("h4");
          const price = document.createElement("p");

          name.textContent = prod.name;
          price.textContent = prod.price;

          prodCartCont.append(name);
          prodCartCont.append(price);

          cartContainer.append(prodCartCont);
        });
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });

// filter
const select = document.querySelector("select");

select.addEventListener("change", () => {
  const selectedCategoryId = select.value;
  const productos = root.querySelectorAll(".producto");

  productos.forEach((producto) => {
    const categoryId = producto.getAttribute("category_id");
    if (selectedCategoryId === "all" || categoryId === selectedCategoryId) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
});

// cart
const cartContainer = document.getElementById("cart");

function openCart() {
  cartContainer.style.display == "block"
    ? (cartContainer.style.display = "none")
    : (cartContainer.style.display = "block");
}

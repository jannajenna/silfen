const urlParams = new URLSearchParams(window.location.search);
const url = `https://abarela.dk/silfen/silfen_wordpress/wp-json/wp/v2/product`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach(showProduct);
    // showProduct(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProduct(product) {
  // grab the template\
  const template = document.querySelector("#template").content;
  // clone the template
  const copy = template.cloneNode(true);
  // change content

  copy.querySelector(".bagname").textContent = product.productname;
  copy.querySelector(".price").textContent = "DKK " + product.price;
  // copy.querySelector(
  //   ".smallProduct img"
  // ).src = `https://hubkur.dk/databases1/wp-content/uploads/2022/03/house_2.jpg`;
  copy.querySelector(".hoverImg").src = product.image.guid;

  // document.body.style.backgroundImage = "url('img_tree.png')

  // ).src = `https://hubkur.dk/databases1/wp-content/uploads/2022/03/house_${product._id}.jpg`;
  // grab parent
  const parent = document.querySelector(".HPproducts");
  // append
  parent.appendChild(copy);
}

// let atc = document.querySelector(".hoverImg");
// let element = document.querySelector(".addtocart");
// atc.addEventListener("mouseenter", function () {
//   showaddtocart();
// });
// atc.addEventListener("mouseleave", function () {
//   hideaddtocart();
// });
// function showaddtocart() {
//   element.classList.remove("hide");
// }
// function hideaddtocart() {
//   element.classList.add("hide");
// }

window.addEventListener("load", burguermenuo, hovermenu);
/* Menu hover */

function hovermenu() {
  document
    .getElementById("txtdrop")
    .addEventListener("mouseenter", function () {
      document.getElementById("dropid").classList.remove("hide");
    });
}

/* Burguer menu */

function burguermenuo() {
  document.getElementById("openb").addEventListener("click", function () {
    document.getElementById("openb").classList.add("hide");
    document.getElementById("closeb").classList.remove("hide");
    document.getElementById("closeb").addEventListener("click", burguermenux);
    document.getElementById("tbcontent").classList.remove("hide");
  });
}

function burguermenux() {
  document.getElementById("closeb").addEventListener("click", function () {
    document.getElementById("closeb").classList.add("hide");
    document.getElementById("openb").classList.remove("hide");
    document.getElementById("openb").addEventListener("click", burguermenuo);
    document.getElementById("tbcontent").classList.add("hide");
  });
}

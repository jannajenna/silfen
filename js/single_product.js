const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("id");
const url = `https://abarela.dk/silfen/silfen_wordpress/wp-json/wp/v2/product?include=${query}`;
// const url = `https://hubemmd-34fa.restdb.io/rest/bed-fashion;

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

  document.querySelector(".PPname").textContent = product.productname;
  document.querySelector(".PPprice").textContent =
    "DKK " + product.price + ",00";

  document.querySelector(".PPproduct img").src = product.image.guid;
  document.querySelector(".PPdescription").textContent =
    product.productdescription;

  // console.log("yes");

  // document
  //   .querySelector("a")
  //   .setAttribute("href", `html/product_view.html?category=accessories`);

  // document
  //   .querySelector(".a2")
  //   .setAttribute("href", `productlist.html?category=frames_and_mattresses`);
  // document
  //   .querySelector(".a3")
  //   .setAttribute("href", `productlist.html?category=mattresses`);
  // document
  //   .querySelector(".a4")
  //   .setAttribute("href", `productlist.html?category=accessories`);

  // // grab parent
  // const parent = document.querySelector(".HPproducts");
  // // append
  // parent.appendChild(copy);
}

let atc = document.querySelector(".hoverImg");
let element = document.querySelector(".addtocart");
atc.addEventListener("mouseenter", function () {
  showaddtocart();
});
atc.addEventListener("mouseleave", function () {
  hideaddtocart();
});
function showaddtocart() {
  element.classList.remove("hide");
}
function hideaddtocart() {
  element.classList.add("hide");
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

  window.addEventListener("load", burguermenuo);
  /* Menu hover */

  /* function hovermenu() {
  document.getElementById("txtdrop").addEventListener("mouseover", function () {
    document.getElementById("dropid").classList.remove("hide");
  });
} */

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
}

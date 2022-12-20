const url = "https://course-api.com/javascript-store-products";

const productCenter = document.querySelector(".product-center");
// console.log(productCenter);

// ===== function fetchProducts=====
const fetchProducts = async () => {
  productCenter.innerHTML = `<div class="spinner"></div`;
    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
            throw new Error('error')
        }
      const data = await response.json();
      //   console.log(data);
      return data
      
    } catch {
        productCenter.innerHTML = `<h5> There was an Error</h5>`
        // console.log('there was an error');
  }
};
// ===== function displayProducts=====
const displayProducts = (data) => {
  const allProducts = data
      .map((product) => {
        const {id} = product
      const { price, name, image } = product.fields;
    //   console.log(image);
        const { url:imgUrl } = image[0];
        // console.log(imgUrl);

      return `<a href="./product.html?id=${id}&name=hiren&age=49" class="single-product">
<img src="${imgUrl}" alt="" class=" img">
<div class="product-title">${name}</div>
<span class="product-price">$${price/100}</span>

</a>`;
    })
        .join("");
    productCenter.innerHTML = allProducts
};
// ===== function start=====
const start = async () => {
    console.log(fetchProducts());
    const data = await fetchProducts()
    displayProducts(data)
}
start();

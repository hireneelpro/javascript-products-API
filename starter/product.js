const url =
    "https://course-api.com/javascript-store-single-product";
//   url of single product js without id 
const product = document.querySelector(".product")
const fetchProduct = async () => {
    product.innerHTML = '<div class="spinner"></div>';
    
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    const name = params.get('name')
    // console.log(name);
    const response = await fetch(`${url}?id=${id}`)
    const data = await response.json()
    // console.log(data);
    return data
}
const displayProduct = (data) => {
    const img = data.fields.image
    // console.log(img);
    const imgUrl = img[0].url
    // console.log(data.fields.colors[1]);
    // console.log(data.fields.colors[0]);
    const colorArray = data.fields.colors
    console.log(colorArray);
    const colorContainer = document.querySelector('.product-color-container')
    const colorHtml = colorArray.map((each) => {
        return `<span style="background-color:${each}" class="product-color"></span>`;
    }).join("")

    product.innerHTML= `<div class="img-wrapper">
            <img class="img single-img" src="${imgUrl}" alt="">
        </div>
        <div class="product-info">
         <h3 class="product-title">${data.fields.name}</h3>
         <h5 class="product-company">${data.fields.company}</h5>
         <span class="product-price">$${data.fields.price/100}</span>
         <div class="product-color-container">
             ${colorHtml}
         </div>
         <p class="product-text">${data.fields.description} </p>
         <button class="btn">add to cart</button>

        </div>`;
}


const start = async () => {
    const data = await fetchProduct()
    displayProduct(data)
}

start()
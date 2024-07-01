let productHTML="";

products.forEach((product)=>{
    productHTML+=
        `
        <a href="#" class="product-container">
                <div class="product-image">
                    <img src="${product.image}">
                </div>
                <section class="product-details">
                    <div class="product-name">
                        <h3 >${product.name}</h3>
                    </div>
                    <div class="product-price">
                        <p>${product.price}</p>
                    </div>
                    <div class="product-rating-container">
                        <div class="product-ratings">
                            <p>${product.ratings}</p>
                        </div>
                        <div class="product-sold">
                            <p>${product.sold} sold</p>
                        </div>
                    </div>
                    <div class="product-location">
                        <p>${product.location}</p>
                    </div>
                </section>
            </a>
        `;
    });

    document.querySelector(".display-product").innerHTML=productHTML;
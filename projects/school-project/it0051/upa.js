let upaHTML="";

properties.forEach((property)=>{
    upaHTML+=`
    <section class="upa-container">
        <div class="upa-gallery">
            <img src="${property.image1}">
            <img src="${property.image2}">
            <img src="${property.image3}">
            <img src="${property.image4}">
            <img src="${property.image5}">
        </div>
        <div class="upa-details">
            <ul>
                <li class="upa-location">${property.location}</li>
                <li class="upa-type">${property.type}</li>
                <li class="upa-rating">${property.rating}</li>
                <li class="upa-price">PHP ${property.price}0</li>
            </ul>
        </div>
        <div class="view-button">
            <form action="sample.html">
            <button onclick="load()">VIEW</button>
            </form>
        </div>
    </section>
    `;
});

document.querySelector(".upa").innerHTML=upaHTML;
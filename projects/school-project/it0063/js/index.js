let serviceHTML="";

services.forEach((services)=>{
    serviceHTML+=`
    <div class="service-container">
        <div class="img-container">
            <img src="${services.image}">
        </div>
        <div class="service-details-container">
            <h3>${services.service}</h3>
            <p>${services.description}</p>
        </div>
        <div class="service-btn-container">
            <button onclick="${services.modal}">${services.btn}</button>
        </div>
    </div>
    `;
});

document.querySelector(".services").innerHTML=serviceHTML;



let productHTML="";

products.forEach((products)=>{
    productHTML+=`
    <section class="product">
         <div class="img-container">
            <img src="${products.image}">
        </div>
        <div class="product-details">
            <p class="product-name">${products.product}</p>
            <p class="product-price">PHP ${products.price}</p>
        </div>
        <div class="product-order">
            <p>QTY</p>
            <input type="number" class="qty">
        </div>
    </section>
    `;
});

document.querySelector(".menu").innerHTML=productHTML;






function showPrint(){
    
    const print=document.getElementById('digital-printing');
    const overlay=document.getElementById('modal-overlay');
    print.style.display="block";
    overlay.style.display="block";
}
function closeModal(){
    const print=document.getElementById('digital-printing');
    const overlay=document.getElementById('modal-overlay');
    print.style.display="none";
    overlay.style.display="none";
}
function printDetails(){
    const name=document.getElementById('name').value;
    const paper=document.getElementById('paper').value;
    const ink=document.getElementById('ink').value;
    const binding=document.getElementById('binding').value;
    const laminate=document.getElementById('laminate').value;
    const remarks=document.getElementById('remarks').value;
    alert(`Name: ${name}, Paper Stock: ${paper}, Ink Brand: ${ink}, Binding: ${binding}, Laminate: ${laminate}, Remarks: ${remarks}`);
}
function showMenu(){
    
    const menu=document.getElementById('view-menu');
    const overlay=document.getElementById('modal-overlay');
    menu.style.display="block";
    overlay.style.display="block";
}
function closeMenu(){
    const menu=document.getElementById('view-menu');
    const overlay=document.getElementById('modal-overlay');
    menu.style.display="none";
    overlay.style.display="none";
}
function orderDetails(){
    alert(`Order Placed!`);
}
let projectsHTML="";

projects.forEach((projects)=>{
    projectsHTML+=`
    <section class="project-container">
        <div class="project-details">
        <h2>${projects.name}</h2>
            <p>${projects.description}</p>
        </div>
        <div class="project-image">
            <img src="${projects.image}">
        </div>
        <div class="view-btn-container">
        <a href="${projects.location}" target="_blank"><button>VIEW ${projects.name}</button></a>
        </div>
    </section> 
    `;
});

document.querySelector(".js-projects").innerHTML=projectsHTML;
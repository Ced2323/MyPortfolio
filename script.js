function toggleProject(id) {

  // Get all project detail sections
  const allProjects = document.querySelectorAll(".project-details");

  allProjects.forEach(project => {
    // If it's NOT the clicked one, remove active
    if (project.id !== id) {
      project.classList.remove("active");
    }
  });

  // Toggle the clicked one
  const clickedProject = document.getElementById(id);
  clickedProject.classList.toggle("active");
}

const projects = {

multimedia:[
"multi.jpg"
],

entrep:[
"https://youtube.com/embed/SViShkSoP4c"
],

fundamentals:[
"funda.jpeg",
"funda2.jpeg"
],

contemporary:[
"contemp.jpeg",
"contemp2.jpeg"
],

embedded:[
"emb.jpeg",
"emb2.jpeg"
]

};

let currentProject = [];
let currentIndex = 0;

function openProject(name){

currentProject = projects[name];
currentIndex = 0;

document.getElementById("projectModal").style.display = "block";

showSlide();
}

function showSlide(){

const content = document.getElementById("modalContent");
content.innerHTML = "";

let item = currentProject[currentIndex];

if(item.includes("youtube")){
content.innerHTML = `
<iframe width="800" height="450"
src="${item}"
frameborder="0"
allowfullscreen>
</iframe>`;
}
else{
content.innerHTML = `<img src="${item}">`;
}

}

function nextSlide(){

currentIndex++;

if(currentIndex >= currentProject.length){
currentIndex = 0;
}

showSlide();
}

function prevSlide(){

currentIndex--;

if(currentIndex < 0){
currentIndex = currentProject.length - 1;
}

showSlide();
}

function closeModal(){

document.getElementById("projectModal").style.display = "none";

}


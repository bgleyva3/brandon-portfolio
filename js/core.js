const aboutMeBtn = document.getElementById("aboutMe")
const projectsBtn = document.getElementById("projects")
const aboutMeContent = document.getElementById("aboutMeContent")
const projectsContent = document.getElementById("projectsContent")
const bgSibling = document.getElementById("bgSibling")
const headerBgSibling = document.getElementById("headerBgSibling")


let openAbout = true;
let openProjects = true;

const moveAbout = (state) => {
    if(state === "button" && openAbout){
        aboutMeContent.classList.remove("hide-about")
        bgSibling.classList.remove("no-display")
        headerBgSibling.classList.remove("no-display")
        openAbout = false;
    } else {
        aboutMeContent.classList.add("hide-about")
        bgSibling.classList.add("no-display")
        headerBgSibling.classList.add("no-display")
        openAbout = true
    }
}

const moveProjects = (state) => {
    if(state ==="button" && openProjects){
        projectsContent.classList.remove("hide-projects")
        bgSibling.classList.remove("no-display")
        headerBgSibling.classList.remove("no-display")
        openProjects = false
    } else {
        projectsContent.classList.add("hide-projects")
        bgSibling.classList.add("no-display")
        headerBgSibling.classList.add("no-display")
        openProjects = true
    }
}

aboutMeBtn.addEventListener("click", () => {moveProjects("close"); moveAbout("button")});

projectsBtn.addEventListener("click", () => {moveAbout("close"); moveProjects("button")});

bgSibling.addEventListener("click", () => {moveAbout("close"); moveProjects("close") });

headerBgSibling.addEventListener("click", () => {moveAbout("close"), moveProjects("close")});

setTimeout(function(){ 
    document.getElementById("github").classList.remove("no-display")
    document.getElementById("aboutMe").classList.remove("no-display")
    document.getElementById("projects").classList.remove("no-display")
    document.getElementById("linkedin").classList.remove("no-display")
    document.getElementById("author").classList.remove("no-display")
}, 2000);
const aboutMeBtn = document.getElementById("aboutMe")
const projectsBtn = document.getElementById("projects")
const aboutMeContent = document.getElementById("aboutMeContent")
const projectsContent = document.getElementById("projectsContent")
const bgSibling = document.getElementById("bgSibling")
const headerBgSibling = document.getElementById("headerBgSibling")
const allProjectContainer = document.getElementById("allProjectContainer")

let timeOut2;

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
        clearTimeout(timeOut2)
        projectsContent.classList.remove("no-a-display")
        bgSibling.classList.remove("no-display")
        headerBgSibling.classList.remove("no-display")
        //allProjectContainer.classList.remove("no-display")
        handleProjectsHide("show")
        openProjects = false
    } else {
        projectsContent.classList.add("hide-projects")
        bgSibling.classList.add("no-display")
        headerBgSibling.classList.add("no-display")
        //allProjectContainer.classList.add("no-display")
        handleProjectsHide()
        openProjects = true
    }
}

const handleProjectsHide = (action) =>{
    if(action === "show"){
        setTimeout(function(){
            projectsContent.classList.remove("hide-projects")
        }, 1)
    } else {
        timeOut2 = setTimeout(function(){
            projectsContent.classList.add("no-a-display")
        }, 500)
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


const hereButton = document.getElementById("here-button")
const studyPlanBackground = document.getElementById("studyPlanBackground")
const closeButton = document.getElementById("closeButton")

hereButton.addEventListener("click", () => document.getElementById("studyPlanParent").classList.remove("hide-study-plan"));
studyPlanBackground.addEventListener("click", () => document.getElementById("studyPlanParent").classList.add("hide-study-plan"));
closeButton.addEventListener("click", () => document.getElementById("studyPlanParent").classList.add("hide-study-plan"));
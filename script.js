document.addEventListener('DOMContentLoaded', () => {
    setMenuElement(document.getElementById("projectMenu"));
});

function changeOpacity(element) { 
    changeOpacityForAll();
    element.style.opacity = 1;
    element.style.transform = "scale(1.1)";
}

function changeOpacityForAll() { 
    const allCardBox = document.getElementsByClassName("cardBox");
    for (let i = 0; i < allCardBox.length; i++) {
        const element = allCardBox[i];
        element.style.opacity = 0.5;
    }
}

function resetOpacity() { 
    const allCardBox = document.getElementsByClassName("cardBox");
    for (let i = 0; i < allCardBox.length; i++) {
        const element = allCardBox[i];
        element.style.opacity = 1;
    }
}

function resetTransformScale(element) { 
    element.style.transform = "scale(1)";
}

function scrollToProjectMenu(menuElement) { 
    const workMenuElement = document.getElementsByClassName("projectSection")[0];
    window.scroll({
        top: workMenuElement.getBoundingClientRect().top - 100 + window.scrollY,
        behavior: 'smooth'
    }); console.log("Project Menu");
    
    setMenuElement(menuElement);
    resetMenuElement(document.getElementById("workMenu"));
    resetMenuElement(document.getElementById("skillMenu"));
}

function scrollToWorkMenu(menuElement){ 
    const workMenuElement = document.getElementsByClassName("workExperenceSection")[0];
    window.scroll({
        top: workMenuElement.getBoundingClientRect().top - 70 + window.scrollY,
        behavior: 'smooth'
    });

    setMenuElement(menuElement);
    resetMenuElement(document.getElementById("projectMenu"));
    resetMenuElement(document.getElementById("skillMenu"));
}

function scrollToSkillMenu(menuElement){ 
    const workMenuElement = document.getElementsByClassName("skillSection")[0];
    window.scroll({
        top: workMenuElement.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

    console.log(workMenuElement);

    setMenuElement(menuElement);
    resetMenuElement(document.getElementById("workMenu"));
    resetMenuElement(document.getElementById("projectMenu"));
}

function setMenuElement(element) { 
    element.style.color = "rgba(255, 255, 255, 1)";
    element.children[1].style.width = "60px";
    element.children[1].style.background = "rgba(255, 255, 255, 1)";
}

function resetMenuElement(element) { 
    element.style.color = "rgba(148, 148, 149, 1)";
    element.children[1].style.width = "30px";
    element.children[1].style.background = "rgba(148, 148, 149, 1)";
}
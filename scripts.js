// Funktion för att lägga till ett projekt
function addProject() {
    var projectName = document.getElementById("project-name").value;
    var projectDescription = document.getElementById("project-description").value;

    if (projectName && projectDescription) {
        // Skapa ett projektobjekt
        var project = {
            name: projectName,
            description: projectDescription
        };

        // Hämta befintlig projektlista eller skapa en ny tom lista
        var projectsList = JSON.parse(localStorage.getItem("projects")) || [];

        // Lägg till det nya projektet i listan
        projectsList.push(project);

        // Spara projektlistan i localStorage
        localStorage.setItem("projects", JSON.stringify(projectsList));

        // Uppdatera visningen av projektlistan
        displayProjects();

        // Clear formfälten
        document.getElementById("project-name").value = "";
        document.getElementById("project-description").value = "";
    } else {
        alert("Vänligen fyll i alla fält.");
    }
}

// Funktion för att visa projekten
function displayProjects() {
    var projectsList = JSON.parse(localStorage.getItem("projects")) || [];
    var projectListElement = document.getElementById("projects");

    // Rensa tidigare innehåll
    projectListElement.innerHTML = "";

    // Loopa genom projekten och lägg till dem i listan
    projectsList.forEach(function (project) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectListElement.appendChild(listItem);
    });
}

// Visa befintliga projekt när sidan laddas
displayProjects();
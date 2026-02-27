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


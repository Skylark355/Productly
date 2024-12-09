// hamburger code starts here
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "block";
}

function hideSidebar() {
  const hideSidebar = document.querySelector(".sidebar");
  hideSidebar.style.display = "none";
}

const navItems = document.querySelectorAll(".navbar-item"); // Select all navbar items
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    hideSidebar(); // Hide the sidebar on click
  });
});

// hamburger codes ends here


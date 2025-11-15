// Mobile menu (basic)
document.getElementById("mobileToggle")?.addEventListener("click", () => {
    alert("Mobile menu can be added here if needed.");
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

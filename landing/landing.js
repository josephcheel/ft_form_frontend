// Open the modal on button click
document.getElementById("popupButton").addEventListener("click", function () {
    const modal = new bootstrap.Modal(document.getElementById("popupModal"));
    modal.show();
});

// Redirect on "Proceed"
document.getElementById("redirectButton").addEventListener("click", function () {
    window.location.href = "/User/index.html";
});
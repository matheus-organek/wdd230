document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;

    var lastModified = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastModified.toLocaleDateString('en-US', options);
    document.getElementById("lastModified").textContent = formattedDate;
});
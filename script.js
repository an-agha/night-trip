let search = document.getElementById("search");
const icons = document.getElementsByClassName("icon");

function showSearch() {
    search.classList.toggle("searchhClass");
}



for (let icon of icons) {
    icon.addEventListener('click', function () {
        window.open(icon.getAttribute("data-link"))
    });
}
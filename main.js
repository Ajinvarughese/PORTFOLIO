const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamBurger.addEventListener("click", () => {
    hamBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
}))


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function downloadPDF() {
    var pdfUrl = 'resource/AJIN VARUGHESE.pdf';
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

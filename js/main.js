let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";
 
function toggleReviews() {
    if (modus === "one-two-three") {
        reviews[0].style.display = "none";
        reviews[1].style.display = "none";
        reviews[2].style.display = "none";
        reviews[3].style.display = "block";
        reviews[4].style.display = "block";
        reviews[5].style.display = "block";
        modus = "four-five-six";
    } else {
        reviews[0].style.display = "block";
        reviews[1].style.display = "block";
        reviews[2].style.display = "block";
        reviews[3].style.display = "none";
        reviews[4].style.display = "none";
        reviews[5].style.display = "none";
        modus = "one-two-three";
    }
}
 
for (let i = 0; i < arrowButtons.length; i++) {
    arrowButtons[i].onclick = toggleReviews;
}
 
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        toggleReviews();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var arrow = document.getElementById('scroll-arrow');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY + window.innerHeight;
        var bodyHeight = document.body.scrollHeight;

        // Considerando uma margem para ativar a ocultação da seta (20 pixels)
        if (scrollPosition >= bodyHeight - 20) {
            arrow.classList.add('hide-arrow');
        } else {
            arrow.classList.remove('hide-arrow');
        }
    });
});

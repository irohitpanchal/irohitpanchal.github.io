var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 5000);
}

function showPage() {
    document.getElementById("loadermain").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}


/* Open */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function smoothscroll() {

}

$(document).ready(function () {



    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });



    //    rotating logo

    var Rlogo = document.getElementById("Rlogo");

    window.addEventListener("scroll", function () {
        Rlogo.style.transform = "rotate(" + window.pageYOffset + "deg)";
    });


});

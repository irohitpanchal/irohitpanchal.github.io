var myVar;

    function myFunction() {
        myVar = setTimeout(showPage, 2500);
    }

    function showPage() {
        document.getElementById("loadermainA").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }
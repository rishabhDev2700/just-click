function toggleMenu(){
    console.log("Button clicked@");
    $(".menu").toggleClass("menu-open")
}

$("nav a").click(toggleMenu);







$("#menu-button").click(toggleMenu)
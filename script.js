function toggleMenu(){
    console.log("Button clicked@");
    $(".menu").toggleClass("menu-open")
}

function togglePopup(){
    console.log("Popup toggled");
    $(".popup").toggleClass("popup-hide")
}

$("#get-started").click(togglePopup);
$("#close-icon").click(togglePopup); 
$("nav a").click(toggleMenu);







$("#menu-button").click(toggleMenu)
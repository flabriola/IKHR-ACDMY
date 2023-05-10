// Script for about page

var aboutSections = ['about-facility', 'about-jiujitsu', 'about-ikhr'];
var aboutRefs = ['aboutFacility', 'aboutJiujitsu', 'aboutIkhr'];

function showAboutSection(id) {

    var facility = document.getElementById(id);
    facility.style.display = "block";
    aboutRefs.forEach(changeOpacity, id);
}

function changeOpacity(item, index, arr, id) {
    if(item != id){
        var facilityRef = document.getElementById(item);
        facilityRef.style.opacity = "0.1";
    }
}
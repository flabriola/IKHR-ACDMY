// Script for about page

var aboutSections = ['about-facility', 'about-jiujitsu', 'about-ikhr'];
var aboutRefs = ['aboutFacility', 'aboutJiujitsu', 'aboutIkhr'];

function showAboutSection(id) {

    var facility = document.getElementById(id);
    facility.style.display = "block";
    for(let i=0; i<3; i++){
        let sec = document.getElementById(aboutSections[i]);
        if(sec != facility){
            sec.style.display = "none";
        }
    }
}
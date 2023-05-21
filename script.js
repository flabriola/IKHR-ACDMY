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



// header side nav functions 

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

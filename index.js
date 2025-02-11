
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})


// function navFunction() {
//     var navList = document.getElementById("navLinks");
//     if (navList.style.display  == null || navList.style.display == "none") {
//       navList.style.display = "block";
//     } else {
//       navList.style.display = "none";
//     }
//   } 


function showHide(){
    var show = document.getElementById('visibility');
    
    if(show.style.display == null || show.style.display == "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    }
}
    



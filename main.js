function show(id){
    document.getElementById(id).style.visibility = "visible";
}

function hide(id){
    document.getElementById(id).style.visibility = "hidden";
}

function darkMode(){
    var element = document.body;
    element.classList.toggle("dark");
    var dark_button = getElementById('dark_mode');
    dark_button.innerHTML("Light Mode");
}

// var checkbox = document.getElementById('dark_mode');

// checkbox.addEventListener('change', ()=>{
//   document.body.classList.toggle('dark');
//   checkbox.innerText = "Light Mode";
// });

function activate(){
    var element = getElementById(id);
    element.classList.toggle("active");
}

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
var warning = document.getElementById("warning");
warning.style.display = "block";
}

//     //this function is triggered when someone presses the boat 

//     var boat_button = document.getElementById('boat_button');
//     var welcome_form = document.getElementById('welcome_form');

//     boat_button.addEventListener('click',() => {
//         welcome_form.classList.toggle("show");

// });





//     const boat = document.getElementById('boat');

//     boat.addEventListener('click',() => {
//         const form = document.getElementById('welcome_form');
//         if(form.style.display == 'none')
//             form.style.display = 'block';
//         else
//             form.style.display = 'none';

// })

    // function boatPopup() {
    //     document.getElementByID("boat").style.display = "block";
    // }

    // //This code is used to close the input form
    // function closeForm(){
    //     document.getElementById("myForm").style.display = "none";
    // }
 
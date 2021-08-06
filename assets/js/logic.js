//Function Definitions //

function dropdown() {
   var menu = document.getElementById("menu-list-items");
   if (menu.style.display === "none") {
       menu.style.display = "block";
   } else {
       menu.style.display = "none";
   }
}

//Function Definitions //

document.getElementById("menu-button").addEventListener("click", dropdown);

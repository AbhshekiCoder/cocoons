let courselist = function(){
    let courses_modal = document.getElementById("courseslist");
    courses_modal.style.display = "block";


}
let coursechange = function(){
    let courses_modal = document.getElementById("courseslist");
    courses_modal.style.display = "none";

}
let num = 1;
 let sidebar_button = document.getElementById("sidebar-button");
 let sidebar_model = document.getElementById("sidebar-modal");
 sidebar_model.onclick = function(){
    num++;
    if(num % 2 == 0){
        sidebar_button.style.display = "block";
    }
    else{
        sidebar_button.style.display = "none";
    }
 

 }
 let signupbutton = function(){
    window.location.href = "signup-form.html";

 }
 let explore_button = document.getElementById("explore-modal");
 let explore = document.getElementById("explore")
 explore.onmouseover = function(){
    explore_button.style.display = "block";

 }
 explore_button.onmouseleave = function(){
    explore_button.style.display = "none";
 }
 explore.onclick = function(){
    if(explore_button.style.display == "block"){
        explore_button.style.display = "none";
    }
    else{
        explore_button.style.display = "block";
    }
 }

 

window.addEventListener("load", function(){
    setTimeout(() =>{
        let ad = document.getElementById("ad");
        ad.style.display = "block";

    
    },2000)
    setTimeout(() =>{
        let ad = document.getElementById("ad");
        ad.style.display = "none";
    },4000)
})
let sidebarbutton = document.getElementById("sidebar-button");
let nums = 1;
let sidebar = function(){
    nums++;
    if(nums % 2 == 0){
      sidebarbutton.style.display = "block";

    }
    else{
      sidebarbutton.style.display = "none";
    }
      
   }
   let signup = document.getElementById("signup");
   signup.onclick = function(){
       window.location.href = "course.html";
   }
function showSkills(id) {

let contents = document.querySelectorAll(".skill-content");

contents.forEach(c => {
c.style.display = "none";
});

document.getElementById(id).style.display = "block";

}

// close when clicking outside

document.addEventListener("click", function(e){

if(!e.target.classList.contains("skill-btn")){
document.querySelectorAll(".skill-content").forEach(c=>{
c.style.display="none";
});
}

});
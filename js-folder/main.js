window.alert("Welcome to Science Fiction Movies!");
console.log(" Hello!");


const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

function showhide() {
  document.getElementById("hide-img").style.display = "none";
}
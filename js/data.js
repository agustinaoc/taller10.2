document.addEventListener('DOMContentLoaded', function(){
    let savedData = localStorage.getItem("datos")
    document.getElementById("data").innerText = savedData  
});
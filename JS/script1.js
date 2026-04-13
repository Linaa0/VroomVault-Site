function goTopage(){
    window.open("https://www.pinterest.com/pin/26740191530957353/", "_blank");
}
document.getElementById("search").addEventListener("keydown", function(ev){
    if (ev.key === "Enter"){
        goTopage();
    }
});
document.getElementById("srchbtn").addEventListener("click", goTopage);
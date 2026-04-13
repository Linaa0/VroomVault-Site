const text="Welcome to VroomVault"
const target= document.getElementById("typewriter");
let index=0;

function type() {
    if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 90);
    }else{
        setTimeout(()=>{
            target.innerHTML= "";
            index=0;
            type()
        },2000)
    }
}
type();

const obs=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
        }
    });
},{threshold: 0.15, rootMargin:"0px 0px -50px 0px"});

document.querySelectorAll(".unique1, .unique2").forEach(el => { obs.observe(el);
});

document.querySelectorAll(".unique1, .unique2").forEach(el => {
    el.addEventListener("animationend", () => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.animation = "none";  // hand control back to transition
    });
});
function goTopage(){
    window.open("https://www.pinterest.com/pin/26740191530957353/", "_blank");
}
document.getElementById("search").addEventListener("keydown", function(ev){
    if (ev.key === "Enter"){
        goTopage();
    }
});
document.getElementById("srchbtn").addEventListener("click", goTopage);

window.addEventListener('load', function() {
    const splashScreen = document.querySelector('.splash-screen');

    setTimeout(() => {
        splashScreen.classList.add('hide');
    }, 20000);
});
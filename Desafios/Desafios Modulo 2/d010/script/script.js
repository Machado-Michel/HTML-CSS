const btn = document.getElementById("btnTop")

btn.addEventListener("click", function(){
    window.scroll(0,0)
})

document.addEventListener('scroll', ocultar)

function ocultar(){
    if(window.scrollY > 400){
        btn.style.display = "flex"
    } else{
        btn.style.display = "none"
    }
}
ocultar()
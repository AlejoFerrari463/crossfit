document.addEventListener("click", () => {
    const encabezado = document.querySelector(".navbar-collapse");
    const navBar = document.querySelector(".navbar");
    if (encabezado && !navBar.contains(event.target)) {
        encabezado.classList.remove("show");
    }
  });


document.addEventListener("touchmove",()=>{

    const encabezado = document.querySelector(".encabezado")

    if (encabezado && encabezado.contains(event.target)){
        event.preventDefault();
    }


},{passive:false}
);
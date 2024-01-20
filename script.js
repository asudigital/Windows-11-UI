let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu= document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("I will win");
    if(startmenu.style.bottom == "50px")
    {       
        startmenu.style.bottom = "-850px"
    }

    else
    {
        startmenu.style.bottom = "50px"   
    }
})
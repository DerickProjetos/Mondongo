let info = document.querySelector(".info")
let BtnHamb = document.querySelector(".HambBtn")
let SubInfo = document.querySelector(".subinfo")


let IsShowingSubInfo = true;

BtnHamb.addEventListener("click", ()=>{
        if(IsShowingSubInfo){
            SubInfo.style.left = "0%"
            IsShowingSubInfo = false
        }
        else{
            SubInfo.style.left = "-140%"
            IsShowingSubInfo = true
        }
       
})



let info = document.querySelector(".info")
let BtnHamb = document.querySelector(".HambBtn")
let SubInfo = document.querySelector(".subinfo")


let IsShowingSubInfo = true;

BtnHamb.addEventListener("click", ()=>{
        if(IsShowingSubInfo){
            SubInfo.style.top = "7%"
            IsShowingSubInfo = false
        }
        else{
            SubInfo.style.top = "-50%"
            IsShowingSubInfo = true
        }
       
})



// temperature text change 
let units = document.querySelector(".units");
let active = true;
export const textChange = () => {
    if(active){
        units?.classList.add("transform");
        active = false;
        // temperature name change 
        units!.textContent = "F";
    }else{
        units?.classList.remove("transform");
        active = true;
        units!.textContent = "C";
    }
}

// footer change 


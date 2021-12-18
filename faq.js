let questionBtn = document.querySelectorAll(".Return-container-contentTxtQ");
let div = document.querySelector(".div");



questionBtn.forEach((element) => {
    let toogle = false;
    element.addEventListener("click", (event) => {
        // console.log(event.target.children[]);
        element.parentElement.children[1].style.display = "block";
        
        
        if (!toogle) {
            element.parentElement.children[1].style.display = "block";
            div.innerHTML = `
                <i class=" fas fa-minus Return-container-contentTxtQFont"></i> `
            
            toogle = true;
            
            
        }
        
        else{
            element.parentElement.children[1].style.display = "none";
            div.innerHTML = `
                <i class=" fas fa-plus Return-container-contentTxtQFont"></i> `
            toogle = false;

        }
    })
        
 });





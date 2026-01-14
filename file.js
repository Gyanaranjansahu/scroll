let input=document.getElementById("input");
let button=document.getElementById("btn");
let img=document.getElementById("image");
function generator(){
    if(input.value>0){
        img.src="https://barcode.orcascan.com/?data="+ input.value;
        console.log(input.value);
        
    }
    else{

    }
}
button.addEventListener("click",(e)=>{
    e.preventDefault();
    generator();
}

)

let ham=document.querySelector("body > div");
let a=false;
let hambtn=document.querySelector("body > header > div.size-5.md\\:hidden > img");
hambtn.addEventListener('click',()=>{
   if(a){
    ham.style.right="-500px"
    a=false;
    hambtn.src="align-left-svgrepo-com (2).svg"
   }
   else{ ham.style.right="24px"
    a=true;
     hambtn.src="cross-svgrepo-com (1).svg"
   }
})
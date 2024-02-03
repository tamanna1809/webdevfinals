const like = document.querySelector(".like");
const unlike= document.querySelector(".unlike");

myButton.addEventListener("click", function() {
  img.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
});




let addtask=true;

addBut.addEventListener('click', function(){
    if(addtask){
        img.src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"; 
    }
    else{
        img.src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
    }
    addtask=!addtask;
   
})

     
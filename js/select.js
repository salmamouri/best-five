
const ol = document.querySelector("ol")
 const allBtn = document.querySelectorAll("button")
const totalBtn = allBtn.length
 let totalPlayer = 0

 for(let i = 0; i < totalBtn ; i++){
    allBtn[i].addEventListener("click",function(event){
        console.log(event.target.parentNode.children[0].innerText);
        allBtn[i].disabled = true
        totalPlayer = totalPlayer + 1
         if( totalPlayer > 5 ){
      
      alert("You Cannot Select More Than 5")
         }
         else{
            const content = event.target.parentNode.children[0].innerText
            const liElement = document.createElement("li");
            liElement.innerText = content
            ol.appendChild(liElement) 
           
         }
    })
 }


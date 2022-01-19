document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


let newB = document.getElementsByTagName('button')
let forM = document.getElementById('create-task-form')
let taskk = document.getElementById('new-task-description')
let ultask = document.getElementById('tasks')


    

// function bouton(){
//   let newbtn = document.createElement('button')
//   newbtn.innerHTML ='remove'
//   document.newli.appendChild(newbtn)

//  newbtn.onclick = function (){
//    console.log('wowwwww')
 // }
// }


function creaT(){
let newli = document.createElement('li')
   newli.appendChild(document.createTextNode(taskk.value))
   ultask.appendChild(newli)
  
  let newbtn = document.createElement('button')
  newbtn.innerHTML ='remove'
  newbtn.className = 'btnclass'
  newli.appendChild(newbtn)

}




forM.addEventListener('submit', function(e){
   e.preventDefault();
   creaT();
  
   
   e.target.reset();
})

// function DLT(e){
//   e.remove();
// }

//let btn = document.getElementsByClassName('btnclass')

function showBtn(){
  console.log('deded')
}



//document.addEventListener('click', function(e){
  let btn = document.getElementsByClassName('btnclass')
  for (var i = 0 ; i < btn.length; i++) {
    btn[i].addEventListener('click' , showBtn())};
  
  
   
// I ll come back to this later 

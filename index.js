// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }
 let saveEl= document.getElementById("save-el")
 let countEl =document.getElementById("count-el")
 let wickets= document.getElementById("wickets")
let count=0
let out=0
 function increment(){
    count+=1
    countEl.textContent=count
 }
 function save(){
  wickets.textContent=0
   let countStr = count + " - "
   saveEl.textContent+=countStr
   count=0
   countEl.textContent=0
  //  if(out=10){
  //   console.log("All Out")
  //  }
   out+=1
   wickets.textContent=out
 }
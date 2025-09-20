//0-> 32
document.querySelector("#yell").addEventListener('click',convert)

function convert(){
  //need value
  let tem = document.querySelector("#sel").value
  //convert to fair
   tem =tem * 9/5 + 32
   //show result
   document.querySelector('#placeToYell').innerText = tem
}
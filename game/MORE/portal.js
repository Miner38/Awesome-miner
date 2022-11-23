// function tick (){
//  if (mouse over portal? || player touching portal) {
//    changeIsland()
//  }
//}

function changeIsland(){
  islandChangerForm.style.display
  islandChangerForm.addEventListener('formsubmit', ()=>{
    islandChangerForm.removeEventListener('formsubmit')
    islandChangerInput.value
    // let newIslandId = input value
    controlVars.changeIsland = true
    controlVars.islandChangeTo = newIslandId
  })
}

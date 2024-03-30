window.title="X & O | Game";const headTitle=document.querySelector("header h1");let turn=["X","O"][Math.floor(2*Math.random())];headTitle.textContent=`${turn} | Game`;const boxes=[...document.querySelectorAll(".row > div")];function winCheck(){boxes[0].children[0].textContent===boxes[1].children[0].textContent&&boxes[0].children[0].textContent===boxes[2].children[0].textContent&&""!==boxes[0].children[0].textContent&&(winnerCheck(0,1,2),disabledGame(boxes[0].children[0].textContent),resetGame()),boxes[3].children[0].textContent===boxes[4].children[0].textContent&&boxes[3].children[0].textContent===boxes[5].children[0].textContent&&""!==boxes[3].children[0].textContent&&(winnerCheck(3,4,5),disabledGame(boxes[3].children[0].textContent),resetGame()),boxes[6].children[0].textContent===boxes[7].children[0].textContent&&boxes[6].children[0].textContent===boxes[8].children[0].textContent&&""!==boxes[6].children[0].textContent&&(winnerCheck(6,7,8),disabledGame(boxes[6].children[0].textContent),resetGame()),boxes[0].children[0].textContent===boxes[3].children[0].textContent&&boxes[0].children[0].textContent===boxes[6].children[0].textContent&&""!==boxes[0].children[0].textContent&&(winnerCheck(0,3,6),disabledGame(boxes[0].children[0].textContent),resetGame()),boxes[1].children[0].textContent===boxes[4].children[0].textContent&&boxes[1].children[0].textContent===boxes[7].children[0].textContent&&""!==boxes[1].children[0].textContent&&(winnerCheck(1,4,7),disabledGame(boxes[1].children[0].textContent),resetGame()),boxes[2].children[0].textContent===boxes[5].children[0].textContent&&boxes[2].children[0].textContent===boxes[8].children[0].textContent&&""!==boxes[2].children[0].textContent&&(winnerCheck(2,5,8),disabledGame(boxes[2].children[0].textContent),resetGame()),boxes[0].children[0].textContent===boxes[4].children[0].textContent&&boxes[0].children[0].textContent===boxes[8].children[0].textContent&&""!==boxes[0].children[0].textContent&&(winnerCheck(0,4,8),disabledGame(boxes[0].children[0].textContent),resetGame()),boxes[2].children[0].textContent===boxes[4].children[0].textContent&&boxes[2].children[0].textContent===boxes[6].children[0].textContent&&""!==boxes[2].children[0].textContent&&(winnerCheck(2,4,6),disabledGame(boxes[2].children[0].textContent),resetGame())}function doneCheck(){boxes[0].classList.contains("active")&&boxes[1].classList.contains("active")&&boxes[2].classList.contains("active")&&boxes[3].classList.contains("active")&&boxes[4].classList.contains("active")&&boxes[5].classList.contains("active")&&boxes[6].classList.contains("active")&&boxes[7].classList.contains("active")&&boxes[8].classList.contains("active")&&resetGame()}function winnerCheck(e,t,n){boxes[e].classList.add("win"),boxes[t].classList.add("win"),boxes[n].classList.add("win")}function disabledGame(e){headTitle.textContent=`The winner is ${e} | Game`,boxes.forEach((e=>{e.style.pointerEvents="none"}))}function resetGame(){setInterval((()=>{headTitle.textContent+=".","X | Game...."!=headTitle.textContent&&"O | Game...."!=headTitle.textContent&&"The winner is X | Game...."!=headTitle.textContent&&"The winner is O | Game...."!=headTitle.textContent||location.reload()}),1e3)}boxes.forEach((e=>{e.addEventListener("click",(()=>{e.classList.add("active"),""==e.children[0].textContent&&("X"===turn?(e.children[0].textContent="X",turn="O"):(e.children[0].textContent="O",turn="X"),winCheck(),doneCheck())}))}));const year=document.querySelector("footer span#year");year.textContent=(new Date).getFullYear();
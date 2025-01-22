let boxex = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContaner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true;
let count = 0;

let winPartten=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = ()=>{
    turn0 = true;
    count = 0;
    enableboxes();
    msgContaner.classList.add("hide");

}



boxex.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn0){
            box.innerText= "O";
            
            turn0 = false;
            
        }
        else{
            box.style.color="black";
            box.innerText= "X";
            turn0 = true;
        }
        box.disabled = true;

        count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    })
})

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContaner.classList.remove("hide");
    disablboxes();
  };

const disablboxes=()=>{
    for(let box of boxex){
        box.disabled = true;
    }
}

const enableboxes=()=>{
    for(let box of boxex){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerHTML=`Congratulations, Winner is ${winner}`;
    msgContaner.classList.remove("hide");
    disablboxes();
}

const checkWinner = ()=>{
    for( let pattern of winPartten){

            let pos1val = boxex[pattern[0]].innerText;
            let pos2val = boxex[pattern[1]].innerText;
            let pos3val = boxex[pattern[2]].innerText;

        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                
                showWinner(pos1val);
                return true;
            }
        }

    }

}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


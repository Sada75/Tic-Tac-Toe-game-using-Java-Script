let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;

        let result = checkWinner();
        if(result===0){
            console.log("Player 1 is the Winner");
            disabledBoxes();
            showWinner("Player 1");
        }else if(result===1){
            console.log("Player 2 is the Winner");
            disabledBoxes();
            showWinner("Player 2");
        }
    })
})

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
}

const showWinner= (winner)=>{
    msg.innerText = `Congratulations Winner is ${winner}`
    msgContainer.classList.remove("hide")
}

const checkWinner = () =>{
    for(let pattern of winPatterns){

        //My logic for winning


    //    let i=0 , p1=0, p2=0;
    //    if(boxes[pattern[i]].innerText==="O"){
    //     p1++;
    //     i++;
    //    }else if( boxes[pattern[i]].innerText==="X"){
    //     p2++;
    //     i++;
    //    }

    //    if(p1===1){
    //     if(boxes[pattern[i]].innerText==="O"){
    //         p1++;
    //         i++;
    //     }else{
    //         continue;
    //     }
    //    }
    //    if(p2===1){
    //     if(boxes[pattern[i]].innerText==="X"){
    //         p2++;
    //         i++;
    //     }else{
    //         continue;
    //     }
    //    }
    //    if(p1===2){
    //     if(boxes[pattern[i]].innerText==="O"){
    //         return 0;
    //     }else{
    //         continue;
    //     }
    //    }
    //    if(p2===2){
    //     if(boxes[pattern[i]].innerText==="X"){
    //         return 1;
    //     }else{
    //         continue;
    //     }
    //    }


    let a=boxes[pattern[0]].innerText;
    let b=boxes[pattern[1]].innerText;
    let c=boxes[pattern[2]].innerText;
    if(a==="O" && b==="O" && c==="O"){
        return 0;
    }
    else if(a==="X" && b==="X" && c==="X" ){
        return 1;
    }


     }
}

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);


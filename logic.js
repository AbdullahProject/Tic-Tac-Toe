let boxes = document.querySelectorAll(".box");
let reSet = document.querySelector("#resetButton");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winPatterns=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turn0 = true;  
  count = 0;     
  enableBoxes(); 
  msgContainer.classList.add("hide"); 
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const winner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        disableAllBoxes();  
        return true;
      }
    }
  }
  return false;
};
const disableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
print = (event) => {
  const box = event.target;
  if(turn0){
    box.innerText = "O";
   turn0 = false;
  }
  else{
    box.innerText = "X"
    turn0 = true;
  }
  box.disabled=true;
  winner();
}
boxes .forEach((box)=>{
box.addEventListener("click" , print);
}
)
newGameBtn.addEventListener("click", resetGame);
reSet.addEventListener("click", resetGame);

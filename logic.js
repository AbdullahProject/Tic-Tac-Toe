let boxes = document.querySelectorAll(".box");
let reSet = document.querySelector("#resetButton");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let but = document.querySelector("#mode");
let Mode = "#FFFFFF";

const changeMode = () => {
  if (Mode === "#FFFFFF") {
    document.body.style.backgroundColor = "#0aadad";
    Mode = "#0aadad"; 
    document.querySelector("#msg").style.color="#FFFFFF";
  } 
  else if (Mode === "#0aadad") {
    document.body.style.backgroundColor = "#228B22";
    document.querySelector("#msg").style.color="#F5F5DC";
    Mode = "#228B22"; 
  } 
  else if (Mode === "#228B22") {
    document.body.style.backgroundColor = "#708090";
    document.querySelector("#msg").style.color="#ADD8E6";
    Mode = "#708090"; 
  } 
  else if (Mode === "#708090") { 
    document.body.style.backgroundColor = "#DC143C";
    document.querySelector("#msg").style.color="#FFD700";
    Mode = "#DC143C"; 
  } 
  else if (Mode === "#DC143C") { 
    document.body.style.backgroundColor = "#87CEEB";
    document.querySelector("#msg").style.color="#00008B";
    Mode = "#87CEEB";
  } 
  else {
    document.body.style.backgroundColor = "#FFFFFF";
    Mode= "#FFFFFF"
    document.querySelector("#msg").style.color="#c4330e";
  }
};

but.addEventListener("click", changeMode);


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
  msg.innerText = `Well done, ${winner}! You’re the winner!`;
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

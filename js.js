let gamespaces = document.querySelectorAll(".gamespace");
let clears = document.querySelector("#clear");
let newgame = document.querySelector("#newgame");
let winmsg = document.querySelector(".winmsg");
let msg = document.querySelector("#msg");
let count=0;
let turnO = true;

const winPat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

gamespaces.forEach ((gamespace) =>{
    gamespace.addEventListener("click",() => {
        if(turnO){ // hinglish= iss loop se ye pta chal rha hai ki turn kiski hai //
            gamespace.innerText ="O";
            count+=1;
            turnO = false;
        }else{
            gamespace.innerText ="X";
            turnO= true;
            count+=1;
        }
        gamespace.disabled = true;
        
        winnerCheck();
    });
});

const winnerCheck = () => {
    if(count===9)
    {
        showDraw();
    }
    for (pat of winPat){

            let pos1 = gamespaces[pat[0]].innerText;
            let pos2 = gamespaces[pat[1]].innerText;
            let pos3 =  gamespaces[pat[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 == pos2 && pos2 == pos3){
                    console.log("winner",pos1);
                    showWinner(pos1);
                    startConfetti();
                }
            }
            
    }
}

const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS, WINNER IS ${winner}`;
    winmsg.classList.remove("hide");
    disablebt();
}
const showDraw = () => {
    msg.innerText = `Game IS draw`;
    winmsg.classList.remove("hide");
    disablebt();
}
const resetGame = () => {
    turnO =true;
    enablebt();
    winmsg.classList.add("hide");
    stopConfetti();

}

const disablebt =()=> {
    for ( gs of gamespaces){
        gs.disabled = true;
    }
}
const enablebt =()=> {
    for ( gs of gamespaces){
        gs.disabled = false;
        gs.innerText= "";
    }
}

newgame.addEventListener("click",resetGame);
clears.addEventListener("click",resetGame);


canvas = document.createElement('canvas');

document.body.appendChild(canvas);



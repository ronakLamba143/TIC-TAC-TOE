let gamespaces = document.querySelectorAll(".gamespace");
let clears = document.querySelector("#clear");
let newgame = document.querySelector("#newgame");
let winmsg = document.querySelector(".winmsg");
let msg = document.querySelector("#msg");

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
        console.log("gamespace was clicked");
        if(turnO){ // hinglish= iss loop se ye pta chal rha hai ki turn kiski hai //
            gamespace.innerText ="O";
            turnO = false;
        }else{
            gamespace.innerText ="X";
            turnO= true;
        }
        gamespace.disabled = true;

        winnerCheck();
    });
});

const winnerCheck = () => {
    for (pat of winPat){

            let pos1 = gamespaces[pat[0]].innerText;
            let pos2 = gamespaces[pat[1]].innerText;
            let pos3 =  gamespaces[pat[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 == pos2 && pos2 == pos3){
                    console.log("winner",pos1);
                    showWinner(pos1);
                }
            }
            
    }
}

const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS, WINNER IS ${winner}`;
    winmsg.classList.remove("hide");
    disablebt();
}

const resetGame = () => {
    turnO =true;
    enablebt();
    winmsg.classList.add("hide");

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
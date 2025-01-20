let current_player = 0 ; 
let board ;
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let bloc_container = document.querySelector(".blocs");
let blocs = document.querySelectorAll(".blocs div[class^='bloc']");
let winner = document.querySelector(".winner");
const track = {
    "bloc1": 1,
    "bloc2": 2,
    "bloc3": 3,
    "bloc4": 4,
    "bloc5": 5,
    "bloc6": 6,
    "bloc7": 7,
    "bloc8": 8,
    "bloc9": 9
};
function GameBoard()
{
    let board = [null, null, null, null, null, null, null, null, null,null] ;
    return { board } ; 
}
function Reset() 
{
    bloc_container.classList.add("hidden");
    blocs.forEach( (bloc) => 
    {
        bloc.innerHTML = "";
    })
}
start.addEventListener("click",(e) => 
{
    winner.innerHTML = "";
    board = GameBoard().board;
    current_player = 0 ; 
    bloc_container.classList.remove("hidden");
})
reset.addEventListener("click",(e) =>
{
    Reset();
})
function CheckWinner() 
{
    if ( board[1] != null && (board[1] == board[5] && board[5] == board[9] 
        || board[1] == board[4] && board[4] == board[7] 
        || board[1] == board[2] && board[2] == board[3]) ) 
    {
        winner.innerHTML = ( board[1] == "x" ? "Player 1 (x)" : "Player2 (o) ") + " Wins!" ; 
        Reset();
    }
    else if ( board[3] != null && (board[3] == board[5] && board[3] == board[7] 
        || board[3] == board[6] && board[6] == board[9])  )
    {
        winner.innerHTML = ( board[3] == "x" ? "Player 1 (x)" : "Player2 (o) ") + " Wins!" ;
        Reset(); 
    }
    else if ( board[7] != null && (board[7] == board[8] && board[8] == board[9]) )
    {
        winner.innerHTML = ( board[7] == "x" ? "Player 1 (x)" : "Player2 (o) ") + " Wins!" ;
        Reset();
    }  
}
blocs.forEach( (bloc) => 
{
    bloc.addEventListener("click",(e) =>
    {
        if ( board[track[bloc.classList[0]]] == null )
        {
            if ( current_player % 2 == 0 ) 
            {
                board[track[bloc.classList[0]]] = "x" ; 
                bloc.innerHTML = "x" ; 
            }
            else
            {
                board[track[bloc.classList[0]]] = "o" ; 
                bloc.innerHTML = "o" ; 
            }
            current_player ^= 1 ;
            console.log(board); 
            CheckWinner();
        }
    })
})
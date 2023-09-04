let cell = document.querySelectorAll(".cell");
let player = "X";
let winner = document.querySelector(".winner")

function checkWinner(){
    const position = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    let winner = false;

    position.forEach(element => {
        const [a, b, c] = element;
        if(cell[a].innerHTML && cell[a].innerHTML === cell[b].innerHTML && cell[a].innerHTML === cell[c].innerHTML){  
            winner = true;
        }
    });
    return winner
}
function game(cell){
    if(cell.innerHTML === ""){
       cell.innerHTML = player;
       cell.style.backgroundColor = "rgba(0,0,0,0.7)";
       if(checkWinner()){
        setTimeout(function (){
            winner.style.display = "block"
            winner.textContent = `${player} é o vencedor`
        },200)
        
       }else{
        player = player === "X" ? "0" : "X";
       }
    }
}
function reset(){
    cell.forEach(element =>{
        element.innerHTML = "";
        element.style.backgroundColor = "transparent";
    })
    setTimeout(function(){
        winner.style.display = "none"
    },200)
}
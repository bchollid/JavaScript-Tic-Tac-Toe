let gameboard = [
  tile0 = {
    player1Mark: false,
    player2Mark: false,
  },
  tile1 = {
    player1Mark: false,
    player2Mark: false,
  },
  tile2 = {
    player1Mark: false,
    player2Mark: false,
  },
  tile3 = {
    player1Mark: false,
    player2Mark: false,
  },
  tile4 = {
    player1Mark: false,
    player2Mark: false,
  },
  tile5 = {
    player1Mark: false,
    player2Mark: false,
  },
  tile6 = {
    player1Mark: false,
    player2Mark: false,
  },
  tile7 = {
    player1Mark: false,
    player2Mark: false,
  },
  tile8 = {
    player1Mark: false,
    player2Mark: false,
  },
];

let playerNames = [
    player1 ={
        name: "",
    },
    player2 ={
        name: "",
    }
]

//Defined globally so that Player Move can probably increment turnCounter while Win Conditions can analyze when the game is over for a tie result.
let turnCounter = 0;

class Game {
    constructor(gameboard, playerNames){
        this.gameboard = gameboard;
        this.playerNames = playerNames;
    }
    renderGameboard(gameboard){
        const gridContainer = document.createElement("div");
        gridContainer.setAttribute('id', 'grid-container');
        document.body.appendChild(gridContainer);
        for(let i = 0; i<gameboard.length; i++){
            let tiles = document.createElement("div");
            tiles.setAttribute('class', 'grid-item');
            tiles.setAttribute('id', 'grid-item-' + i);
            gridContainer.appendChild(tiles);
        }
    }
    playerMove(gameboard, playerNumber){
        let tiles = document.querySelectorAll(".grid-item");
        tiles.forEach(function(tile){
            tile.onclick = function(){
                let tileToString = tile.id.replace('grid-item-', '');
                let tileNumber = parseInt(tileToString)
                if(playerNumber == 1 && gameboard[tileNumber].player2Mark == false && gameboard[tileNumber].player1Mark == false){
                    gameboard[tileNumber].player1Mark = true;
                    playerNumber = 2;
                    console.log(gameboard[tileNumber]);
                    tile.setAttribute('class', 'grid-item-clicked-player1')
                    turnCounter++;
                }
                else if(playerNumber == 2 && gameboard[tileNumber].player2Mark == false && gameboard[tileNumber].player1Mark == false){
                    gameboard[tileNumber].player2Mark = true;
                    playerNumber = 1;
                    console.log(gameboard[tileNumber]);
                    tile.setAttribute('class', 'grid-item-clicked-player2')
                    turnCounter++;
                }
            }
        })
    }
    winConditions(gameboard, playerNames){
        console.log(turnCounter);
        let winnerBanner = document.getElementById("winner-banner");
        let winnerBannerText = document.getElementById("winner-banner-text");
        winnerBanner.style.display = "none";
        let winner = false;
        function playerWin(playerName){
                winnerBanner.style.display = "block"
                winnerBannerText.innerText = `Winner! Congrats ${playerName}!`;
                winner = true;
        }
        let gridContainer = document.getElementById("grid-container");
        gridContainer.onclick = function(){
            //3 across the top.
            if(gameboard[0].player1Mark == true && gameboard[1].player1Mark == true && gameboard[2].player1Mark == true){
                playerWin(playerNames[0].name)
            }
            else if(gameboard[0].player2Mark == true && gameboard[1].player2Mark == true && gameboard[2].player2Mark == true){
                playerWin(playerNames[1].name)
            }
            //3 down the left
            if(gameboard[0].player1Mark == true && gameboard[3].player1Mark == true && gameboard[6].player1Mark == true){
                playerWin(playerNames[0].name)
            }
            else if(gameboard[0].player2Mark == true && gameboard[3].player2Mark == true && gameboard[6].player2Mark == true){
                playerWin(playerNames[1].name)
            }
            //3 diagonally from upper left
            if(gameboard[0].player1Mark == true && gameboard[4].player1Mark == true && gameboard[8].player1Mark == true){
                playerWin(playerNames[0].name)
            }
            else if(gameboard[0].player1Mark == true && gameboard[4].player1Mark == true && gameboard[8].player1Mark == true){
                playerWin(playerNames[1].name)
            }
            //3 down the middle
            if(gameboard[1].player1Mark == true && gameboard[4].player1Mark == true && gameboard[7].player1Mark == true){
                playerWin(playerNames[0].name)
            }
            else if(gameboard[1].player2Mark == true && gameboard[4].player2Mark == true && gameboard[7].player2Mark == true){
                playerWin(playerNames[1].name)
            }
            //3 down the right
            if(gameboard[2].player1Mark == true && gameboard[5].player1Mark == true && gameboard[8].player1Mark == true){
                playerWin(playerNames[0].name)
            }
            else if(gameboard[2].player2Mark == true && gameboard[5].player2Mark == true && gameboard[8].player2Mark == true){
                playerWin(playerNames[1].name)
            }
            //3 across the middle
            if(gameboard[3].player1Mark == true && gameboard[4].player1Mark == true && gameboard[5].player1Mark == true){
                playerWin(playerNames[0].name)
            }
            else if(gameboard[3].player2Mark == true && gameboard[4].player2Mark == true && gameboard[5].player2Mark == true){
                playerWin(playerNames[1].name)
            }
            //3 across the bottom
            if(gameboard[6].player1Mark == true && gameboard[7].player1Mark == true && gameboard[8].player1Mark == true){
                playerWin(playerNames[0].name)
            }
            else if(gameboard[6].player2Mark == true && gameboard[7].player2Mark == true && gameboard[8].player2Mark == true){
                playerWin(playerNames[1].name)
            }
            //3 diagonally from top right
            if(gameboard[2].player1Mark == true && gameboard[4].player1Mark == true && gameboard[6].player1Mark == true){
                playerWin(playerNames[0].name)
            }
            else if(gameboard[2].player2Mark == true && gameboard[4].player2Mark == true && gameboard[6].player2Mark == true){
                playerWin(playerNames[1].name)
            }
            //tie
            if(turnCounter == 9 && winner == false){
                winnerBanner.style.display = "block"
                winnerBannerText.innerText = `TIE!`;
            }   
            }
        }
    interfaceOptions(playerNames){
        let restart = document.getElementById("restart");
        restart.onclick = function(){
            location.reload();
        }
        let player1Submit = document.getElementById("player1-submit");
        let player2Submit = document.getElementById("player2-submit");
        let player1Name = document.getElementById("player1-name");
        let player2Name = document.getElementById("player2-name");
        player1Submit.onclick = function(){
            let player1Input = document.getElementById("player1-input").value;
            playerNames[0].name = player1Input;
            player1Name.innerText = player1Input;
        }
        player2Submit.onclick = function(){
            let player2Input = document.getElementById("player2-input").value;
            playerNames[1].name = player2Input;
            player2Name.innerText = player2Input;
        }
    }
    }


let game = new Game;
game.renderGameboard(gameboard);
game.playerMove(gameboard, 1);
game.winConditions(gameboard, playerNames)
game.interfaceOptions(playerNames);
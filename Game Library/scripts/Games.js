window.onload = function (event){
    window.games = new Games();
    window.games.showGamesToShow();
}

/**
 * Constructor function for game array/library
 */
function Games(){
    this.filteredGames = ALL_GAMES;
    this.beginIndex = 0;
    this.span = 4;

    //Returns the games in the array between the current begin index and defined span
    this.gamesToShow = function(){
        return this.filteredGames.slice(this.beginIndex,this.beginIndex + this.span);
    }    
}

/**
 * Adds a new game to array of games
 * @param {*} game 
 */
Games.prototype.addNewGame = function (game){
    if(game instanceof Game){
        ALL_GAMES.push(game);
        this.filteredGames = ALL_GAMES;
        //this.showGamesToShow();
    }
    else{
        console.log("Object not Game")
    }
}

/**
 * Removes a game from the array of games
 * @param {*} game 
 */
Games.prototype.removeGame = function(game){
    ALL_GAMES = ALL_GAMES.filter(g => game.name !== g.name);
    this.filteredGames = ALL_GAMES;
    console.log(ALL_GAMES);
    this.resetAndShow();
}

/**
 * Increments the begin index by the defined span 
 */
Games.prototype.incrementIndex = function(){
    this.beginIndex+=this.span;
}

/**
 * Decrements the begin index by the defined span 
 */
Games.prototype.decrementIndex = function(){
    this.beginIndex-=this.span;
}

/**
 * Outputs the games to show on the screen
 */
Games.prototype.showGamesToShow = function(){
    let gameList = document.getElementById("games");
    gameList.textContent = '';
    this.gamesToShow().forEach(game=>{         
        gameList.append(game.createGameCell());
    });    
}

/**
 * Resets the begin index to beginning of array and 
 */
Games.prototype.resetAndShow=function(){
    this.beginIndex=0;
    this.showGamesToShow();
}

/**
 * Gets user input and shows games according to that input
 */
Games.prototype.filter=function(){
    this.filteredGames=[];    

    let platform = document.getElementById("platform").value;
    let genre = document.getElementById("genre").value;

    ALL_GAMES.forEach(game => {
        if(game.isIncluded(platform, genre)){
            this.filteredGames.push(game);            
        }
    });
    this.sortByPrice();
    this.resetAndShow();
}

/**
 * Resets all game filtering user input
 */
Games.prototype.resetFilters = function(){
    document.getElementById("filters").childNodes.forEach(node=>{
        if(node.tagName === "SELECT"){
            node.selectedIndex="0"
        }
    })
    document.getElementById("search").value="";
    this.filteredGames=ALL_GAMES;
    this.resetAndShow();
}

/**
 * Shows previous page of games
 */
Games.prototype.showPrev = function(){
    this.decrementIndex();
    if(this.beginIndex<0){this.beginIndex=0}
    this.showGamesToShow();
}

/**
 * Shows next page of games
 */
Games.prototype.showNext = function(){  
    let gameCopy = {...this};
    gameCopy.beginIndex+=gameCopy.span;
    let arr = gameCopy.gamesToShow();
    if(arr.length===0){return;}
    this.incrementIndex();
    this.showGamesToShow();
}

/**
 * Orders the current games being shown to user by price
 */
Games.prototype.sortByPrice=function(){
    let direction=document.getElementById("price").value;
    if(direction==="none"){
        return;
    }

    let compare;

    if(direction==="ascending"){
        compare = function(a,b){
            if ( a.price < b.price ){
                return -1; 
            }
            else if ( a.price > b.price ){
                return 1; 
            }
            return 0;
        }
    } 
    else if (direction==="descending"){
        compare = function(a,b){
            if ( a.price > b.price ){
                return -1;
            }
            else if ( a.price < b.price ){
                return 1;
            }
            return 0;
        }
    }
    else{return}
      
    this.filteredGames.sort(compare);

    this.resetAndShow();
}
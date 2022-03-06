/**
 * Opens add game form
 */
function openAddGameForm(){
    document.getElementById("main").style.display = "none";
    document.getElementById("addGameForm").style.display="block";
}

/**
 * Hides the add game form and resets input fields
 */
function closeAddGameForm(){   
    let addGameForm = document.getElementById("addGameForm")
    addGameForm.style.display = "none";    
    addGameForm.reset();
    document.getElementById("main").style.display="initial";
}

/**
 * Gets data from add game form, creates new game and adds to game array
 */
function submitGame(){
    let fields = document.getElementById("addGameForm").elements;
    let title = fields.namedItem("title").value;
    let genre = fields.namedItem("genre").value;
    let release = fields.namedItem("release").value;
    let imgurl = fields.namedItem("imgurl").value;
    let price = fields.namedItem("price").value;
    let platforms = [];
    document.getElementById("platformChecks").childNodes.forEach(node => {
        if(node.tagName == "INPUT" && node.checked==true){
            platforms.push(node.value);
        }
    });

    let game = new Game(title,genre, platforms, imgurl, price, release);

    games.addNewGame(game);

    closeAddGameForm();    
}

/**
 * Closes game details pop-up
 */
function closeGameDetails(){
    document.getElementById('overlay').classList.remove('active');  
    document.getElementById("details").style.display="none";
}


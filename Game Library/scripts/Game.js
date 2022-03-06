/**
 * Constructor function for game objects
 */
function Game(name, genre, platforms, imgurl, price, launchYear){
    this.name=name;
    this.genre = genre;
    this.platforms = platforms;
    this.imgurl = imgurl;
    this.price = price;
    this.hasDiscount = false;
    this.launchYear = launchYear;
}

/**
 * Returns an html element designed to show this game after it is selected by the user
 */
Game.prototype.displaySolo = function(){
    cell = document.createElement("article");
    img = document.createElement("img");
    fig = document.createElement("figure");
    img.src = this.imgurl;
    let button = document.createElement("button");
    button.textContent = "Delete";  
    button.onclick = () => {
        let confirmed = confirm("Are you sure you want to delete this game from your library?");
        if(confirmed){
            games.removeGame(this);
            closeGameDetails();
        }
    }
    fig.append(img);
    fig.append(button);
    cell.append(fig);      
    let p = document.createElement("p");
    p.innerText="Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam labore voluptates beatae deleniti consequuntur sunt, vitae saepe voluptate ducimus alias sapiente autem porro fuga quam perferendis! Rem, distinctio. Corporis consequatur neque quo? Quaerat laudantium assumenda modi nobis harum adipisci inventore deleniti quam fugiat sapiente, labore sequi impedit nostrum quos, repellendus quod beatae consequuntur cumque" ;
    let textSection = this.createTextSection();
    textSection.append(p);
    cell.append(textSection);
    return cell
}

/**
 * Returns an html element do display this game in the dashboard
 */
Game.prototype.createGameCell = function(){
    cell = document.createElement("article");
    img = document.createElement("img");
    img.onclick = () => {
        document.getElementById("details-title").textContent=this.name;
        let body = document.getElementById("details-body");
        body.innerHTML='';
        let display = this.displaySolo();
        body.append(display);
        details.style.display = "block";  
        document.getElementById('overlay').classList.add('active');    
    }
    fig = document.createElement("figure");
    img.src = this.imgurl;
    fig.append(img);
    cell.append(fig);    
    cell.append(this.createTextSection());
    return cell
}

/**
 * Returns an html element with text info about this game
 */
Game.prototype.createTextSection = function(){
    let section = document.createElement("section");
    let p1 = document.createElement("p");
    p1.innerText="Name: "+this.name;
    let p2 = document.createElement("p");
    p2.innerText="Genre: "+this.genre;
    let p3 = document.createElement("p");
    p3.innerText="Price: "+this.price + "€";
    let p4 = document.createElement("p");
    p4.innerText="Year: "+this.launchYear;
    section.style.color="white"; 

    section.append(p1,p2,p3,p4)
    return section;
}

/**
 * Returns true if this game satisfies filter parameters
 */
Game.prototype.isIncluded = function(platform, genre){
    if((this.platforms.includes(platform) || platform === "all") && 
    (this.genre === genre || genre==="all") && this.includesTerm()===true){
        return true;
    }
    return false;
}

/**
 * Returns true if this game's name includes sequence of characters introduced by user
 */
Game.prototype.includesTerm= function(){
    let term = document.getElementById("search").value;
    term = term.toLowerCase();    
    return this.name.toLowerCase().includes(term);    
}


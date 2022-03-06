let g1 = new Game("Red Dead Redemption", "adventure", ["pc", "playstation", "xbox"], "./images/rdr.jpg", 60, 2017);
let g2 = new Game("Overwatch", "fps", ["pc", "playstation", "xbox"], "./images/overwatch.jpg", 30, 2017);
let g3 = new Game("Medieval 2: Total War","strategy", "pc", "./images/medieval2.png", 10, 2006);
let g4 = new Game("Breath of the Wild","adventure", "nintendo", "./images/zelda.jpg", 30, 2018);
let g5 = new Game("The Witcher 3","rpg", ["pc", "playstation", "xbox"], "./images/witcher.jpg", 15, 2015);
let g6 = new Game("Hearts of Iron 4","strategy", "pc", "./images/hoi4.jpg", 30, 2016);
let g7 = new Game("Underground 2","cars", ["pc", "playstation", "xbox"], "./images/underground2.jpg", 5, 2004);
let g8 = new Game("Grand Theft Auto IV","adventure", ["pc", "playstation", "xbox"], "./images/gta4.jpg", 5, 2007);
let g9 = new Game("Uncharted 2","adventure", "playstation", "./images/uncharted2.png", 20, 2009);
let g10 = new Game("Modern Warfare 2","fps", ["pc", "playstation", "xbox"], "./images/mw2.png", 10, 2009);
let g11 = new Game("Hell Let Loose","fps", "pc", "./images/hll.jpg", 40, 2021);
let g12 = new Game("Pro Evolution Soccer 6","sport", ["pc", "playstation", "xbox"], "./images/pes6.jpg", 5, 2006);
let g13 = new Game("FIFA 10","sport", ["pc", "playstation", "xbox"], "./images/fifa10.jpg", 5, 2009);
let ALL_GAMES = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13];

function getAllGames(){
    return ALL_GAMES;
}


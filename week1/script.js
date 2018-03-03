// 1 + 2 + 3

/*let books = ["nineteen_eighty_four","the_stranger","one_hundred_years_of_solitude","the_gambler","animals_farm","fahrenheit_451","brave_new_world","crime_and_punishment","the_prince","clash_of_the_civilizations"];
console.log(books);
function booksList(){
    let booksUl = document.createElement("ul");
    document.body.appendChild(booksUl);
    for (let i = 0; i < books.length ; i++ ) {
        let booksLi = document.createElement("li");
        booksUl.appendChild(booksLi);
        booksLi.innerHTML = books[i];
        }
}
console.log(booksList());*/

// 4 
let booksInfoObj = {
    nineteen_eighty_four : { Title: "Nineteen Eighty-Four", Language: "English", Author: "George Orwell"},
    the_stranger: {Title: "The Stranger", Language: "French", Author: "Albert Camus"},
    one_hundred_years_of_solitude: {Title: "One Hundred Years of Solitude", Language: "Spanish", Author: "Gabriel García Márquez"},
    the_gambler: {Title: "The Gambler", Language: "Russian", Author: "Fyodor Dostoyevsky"},
    animals_farm: {Title: "Animal Farm", Language: "English", Author: "George Orwell"},
    fahrenheit_451:{Title: "Fahrenheit 451", Language: "English", Author: "Ray Bradbury"},
    brave_new_world: {Title: "Brave New World", Language: "English", Author: "Aldous Huxley"},
    crime_and_punishment: {Title: "Crime and Punishment", Language: "Russian", Author: "Fyodor Dostoyevsky"},
    the_prince: {Title: "The Prince", Language: "Italian", Author: "Niccola Machiavelli"},
    clash_of_the_civilizations: {Title: "Clash of Civilizations", Language: "English", Author: "Samuel P. Huntington"}
};
    

// 5 ****


function booksList(){
    let booksInfo = document.createElement("ul");
    document.body.appendChild(booksInfo);
    for (let bookId in booksInfoObj ) {
        let booksLi = document.createElement("li");
        booksLi.setAttribute("id",bookId);
        booksInfo.appendChild(booksLi);
        let booksTitle = document.createElement("h2");
        booksLi.appendChild(booksTitle);
        booksTitle.innerHTML = booksInfoObj[bookId].Title ;
        let booksLan = document.createElement("p");
        booksLi.appendChild(booksLan);
        booksLan.innerHTML = booksInfoObj[bookId].Language;
        let booksAuth = document.createElement("p");
        booksLi.appendChild(booksAuth);
        booksAuth.innerHTML = booksInfoObj[bookId].Author;
        };
}
console.log(booksList());


// 7 
booksImgObj = {
    "nineteen_eighty_four" : "img/1984first.jpg",
    "the_stranger": "img/thestranger.jpg",
    "one_hundred_years_of_solitude": "img/onehundred.jpg",
    "the_gambler": "img/The_GamblerFyodorDostoyevsky.jpg",
    "animals_farm":"img/Animal_Farm_-_1st_edition.jpg",
    "fahrenheit_451":"img/Fahrenheit_451_1st_ed_cover.jpg",
    "brave_new_world":"img/BraveNewWorld_FirstEdition.jpg",
    "crime_and_punishment": "img/Crimeandpunishmentcover.png",
    "the_prince": "img/Machiavelli_Principe_Cover_Page.jpg",
    "clash_of_the_civilizations":"img/Clash_civilizations.jpg" 
};

function booksListImg(){
    for (let bookId in booksImgObj ) {
        let booksImg = document.createElement("img");
        booksImg.setAttribute("src", booksImgObj[bookId]);
        let x = document.getElementById(bookId);
        x.appendChild(booksImg);
        booksImg.innerHTML;
    }
}
console.log(booksListImg());

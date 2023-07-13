let cats = [
    "Milo",
    "Otis",
    "Garfield"
    //test 1
]
function destructivelyAppendCat(name){
    cats.push(name);
    //test 2 
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    //test 3
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
    //test4
}
//test 5
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
//test 6
function appendCat(name){
    let newCats = [...cats, name];
    return newCats
}

//test 7
function prependCat(name) {
    return [name, ...cats]
}

//test 8
function removeLastCat(name) {
    cats.pop(name)
}


function removeLastCat() {
  let newCats = cats.slice(0, -1);
  return newCats;
}

let newCatsArray = removeLastCat();
console.log(newCatsArray);
console.log(cats);

function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
  }
 



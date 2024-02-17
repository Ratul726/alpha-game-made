function hideElementById(e){
    const el =document.getElementById(e)
    el.classList.add('hidden')
}

function showElementById(e){
    const el =document.getElementById(e);
    el.classList.remove('hidden')
}
function addBackGroundcolor(e){
 const el = document.getElementById(e);
 el.classList.add('bg-orange-600')
}

function removeBackGroundById(e){
 const el =document.getElementById(e);
 el.classList.remove('bg-orange-600')
}

function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetws = 'abcdefghijklmnopqrstuvwxyz'
    const string = alphabetws.split('')
    
    // get a random number of an array
    const randomNumber =Math.random()*25
    const index =Math.round(randomNumber)
// console.log(index)

const alphabet = alphabetws[index];
// console.log(alphabet);
return alphabet
}
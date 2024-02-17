// function play (){
//     // console.log('play start now')
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList)
//     homeSection.classList.add('hidden')

//     // ?show the playground
//     const playGroundSection = document.getElementById('play-ground')
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(){
    console.log('add button')
}
document.addEventListener('keyup',function(e){
    const gamerPressed =e.key;
    console.log('player pressed',gamerPressed);
    const currentAlphabeByElement = document.getElementById('current-alphabet');
    console.log(currentAlphabeByElement,innerText)

    // ?get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet ;
    const expectedAlphabet = currentAlphabet.toLowerCase()

    console.log(gamerPressed)
})

function continueGame(){
    // generate alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet);

    // set alphabet

    const currentAlphabeByElement = document.getElementById('current-alphabet');
    currentAlphabeByElement.innerText =alphabet;
    // addbackgroundcolor
    addBackGroundcolor(alphabet)
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame('')
}
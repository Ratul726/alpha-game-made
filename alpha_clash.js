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

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet)
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame('')
}
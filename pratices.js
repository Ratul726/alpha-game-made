function play(){
    const homeSection = document.getElementById('section-container');
    homeSection.innerText = 'hello world!'
    // console.log(homeSection)

    const addElement = document.createElement('section');
     addElement.innerText = 'coffe'
     document.appendChild(addElement)

}

play()


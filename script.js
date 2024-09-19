function changeColors() {
    const body = document.querySelector('body');
    const random = Math.floor(Math.random()*16777215).toString(16); //stole equation from : https://css-tricks.com/snippets/javascript/random-hex-color/
    body.style.backgroundColor = '#' + random;
    console.log(random);
}

function changeText() {
    const paragraph = document.querySelector('#body-of-text');
    paragraph.textContent = "Witchcraft! Now it's different!";
}


const colorButton = document.querySelector('#change-color');
colorButton.addEventListener('click', changeColors);

const hover= document.getElementById('#hover-event');
hover.addEventListener('mouseover', (event) => {
    event.target.style.color = '#' + (Math.floor(Math.random()*16777215).toString(16));
});

const textChange = document.getElementById('change-text');
textChange.addEventListener('click', changeText);
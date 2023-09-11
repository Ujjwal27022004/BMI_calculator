function bmi() {
    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    var bmi = weight / (height * height)
    document.querySelector('#result').innerHTML="Your bmi is "+bmi;
}

const button = document.querySelector('#btn');
button.addEventListener('click', bmi)

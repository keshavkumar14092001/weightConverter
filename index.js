const inputData = document.querySelector('#input-weight');

const visibility = document.querySelector('.output');
visibility.style.visibility = 'hidden';

inputData.addEventListener('input', (e) => {
    const typed = e.target.value;

    visibility.style.visibility = 'visible';

    const weightInGram = document.querySelector('.gramsOutput');
    const weightInKilogram = document.querySelector('.kgOutput');
    const weightInOunces = document.querySelector('.ouncesOutput');
    const weightInPounds = document.querySelector('.poundsOutput');

    weightInGram.innerHTML = typed * 1000;
    weightInKilogram.innerHTML = typed;
    weightInOunces.innerHTML = typed * 35.274;
    weightInPounds.innerHTML = typed * 2.20462;
});
const { from, of } = require('rxjs');
const { delay, concatMap, map } = require('rxjs/operators');

const animals = ['cocodrilo', 'elefante', 'perro', 'gato'];

const animalsObservable = from(animals)
    .pipe(
        concatMap(animal => of(animal).pipe(delay(1000)))
    );

// Conversion previa mediante pipe
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const addNumber = (animal) => {
    const number = randomNumber(0, 3);
    return (number === 1) ? `1 ${animal}` : `${number} ${animal}s`;
}

const animalsWithNumberObservable = animalsObservable.pipe(map(addNumber));

animalsWithNumberObservable.subscribe((animal) => {
    console.log(`He visto ${animal}`);
});


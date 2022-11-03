const { from, of, zip } = require('rxjs');
const { delay, concatMap } = require('rxjs/operators');

const animals = ['cocodrilo', 'elefante', 'perro', 'gato'];
const colors = ['verde', 'gris', 'marrón', 'naranja'];

const animalsObservable = from(animals)
    .pipe(
        concatMap(animal => of(animal).pipe(delay(1000)))
    );

const colorsObservable = from(colors);

// Union de dos streams mediante zip (una forma de combinar observables), concat, merge, forkJoin, race... https://rxjs.dev/guide/operators
const animalsAndColors = zip(animalsObservable, colorsObservable);

animalsAndColors.subscribe((animalAndColor) => {
    console.log(`He visto un ${animalAndColor}`);
});


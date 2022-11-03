const { from, of, zip } = require('rxjs');
const { delay, concatMap, map } = require('rxjs/operators');

const animals = ['cocodrilo', 'elefante', 'perro', 'gato'];
const colors = ['verde', 'gris', 'marrón', 'naranja'];

const animalsObservable = from(animals)
    .pipe(
        concatMap(animal => of(animal).pipe(delay(1000)))
    );

const colorsObservable = from(colors);

const verboseAnimalColor = (color) => {
    return ` de color ${color}`;
};

const animalsAndColorsObservable = zip(animalsObservable, colorsObservable.pipe(map(verboseAnimalColor)));

animalsAndColorsObservable.subscribe((animalAndColor) => {
    console.log(`He visto un ${animalAndColor}`);
});


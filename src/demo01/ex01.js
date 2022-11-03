const { from, of } = require('rxjs');
const { delay, concatMap } = require('rxjs/operators');

const animals = ['cocodrilo', 'elefante', 'perro', 'gato'];

const animalsObservable = from(animals) // from convierte array en observable todo a la vez
    .pipe(
        concatMap(animal => of(animal).pipe(delay(1000)))
    );

animalsObservable.subscribe((animal) => {
    console.log(`He visto un ${animal}`);
});

// Asíncrona, por lo que el código sigue mientras se queda suscrito
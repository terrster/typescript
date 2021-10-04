import { from, map } from 'rxjs';

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));
result.pipe(map(x => x*10)).subscribe(console.log);
//Observables es para info asincrona

// Logs:
// 10
// 20
// 30
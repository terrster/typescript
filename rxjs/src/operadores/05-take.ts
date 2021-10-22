import { from, take, tap } from "rxjs"

let numberlist: number[] = [1,2,3,4,5,6,7,8,9,10]

const sub1 = from(numberlist).pipe(
    // tap((t) => console.log(t)),
    take(5)
); 

sub1.subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Este arroz ya se coció')
})


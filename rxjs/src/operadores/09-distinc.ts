import { distinct, from } from "rxjs";

let numberlist: any[] = [
    1,
    1,
    2,
    3,
    2,
    "1",
    23,
    45,
    "5",
    3,
    2,
    "2",
    1,
    2,
    3,
    4,
    5,
  ];
   
  from(numberlist)
    .pipe(distinct()) // ===
    .subscribe({
      next: (numero) => console.log(numero),
    });
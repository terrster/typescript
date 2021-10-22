import { asyncScheduler, fromEvent, } from "rxjs";
import { throttleTime, withLatestFrom } from 'rxjs/operators';

const clisck$ = fromEvent(document, 'click');

const trotllconfig = {
    leading: false,
    trailing: true
};

clisck$.pipe(throttleTime(400, asyncScheduler, trotllconfig)).subscribe({
    next: (value: Event) => console.log(`dos clicks, tiempo:${value.timeStamp}`)
})
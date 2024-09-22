import { Injectable, NgZone } from '@angular/core';
import { auditTime, fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollEventListenerService {
  public readonly scrolled: Observable<Event> = new Observable((observer) => {
    this.ngZone.runOutsideAngular(() => {
      // スクロール開始直後はスキップし、
      // しばらくしてから発火する
      fromEvent(window, 'scroll').pipe(auditTime(250)).subscribe(observer);
    });
  });

  constructor(private ngZone: NgZone) {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IncrementService {
  count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  incrementValue() {
    const curr = this.count.value;
    this.count.next(curr + 1);
  }
  decrementValue() {
    const curr = this.count.value;
    this.count.next(curr - 1);
  }

  clearCount() {
    this.count.next(0);
  }
}

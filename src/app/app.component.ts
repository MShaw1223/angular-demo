import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncrementService } from './increment.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-demo';
  count = 0;

  constructor(private inc: IncrementService) {}

  ngOnInit(): void {
    this.inc.count$.subscribe((newCount) => {
      this.count = newCount;
    });
  }

  incValue(): void {
    this.inc.incrementValue();
  }
  decValue(): void {
    this.inc.decrementValue();
  }

  clearVal(): void {
    this.inc.clearCount();
  }
}

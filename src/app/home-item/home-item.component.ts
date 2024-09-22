import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { LazyLoadModule } from '../lazy-load/lazy-load.module';

@Component({
  selector: 'app-home-item',
  standalone: true,
  imports: [LazyLoadModule, AsyncPipe],
  templateUrl: './home-item.component.html',
  styleUrl: './home-item.component.scss',
})
export class HomeItemComponent {
  @Input()
  public number: number = 0;

  readonly title$ = new Subject<string>();

  onLazyLoad(): void {
    this.title$.next('Hello, '.repeat(this.number) + 'Lazy loaded.');
  }
}

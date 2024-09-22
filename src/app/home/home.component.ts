import { Component } from '@angular/core';
import { HomeItemComponent } from '../home-item/home-item.component';
import { LazyLoadModule } from '../lazy-load/lazy-load.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items = Array(100)
    .fill(undefined)
    .map((_, i) => i + 1);

  lazyLoad() {}
}

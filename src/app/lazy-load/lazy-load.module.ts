import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollEventListenerService } from './scroll-event-listener.service';
import { LazyLoadDirective } from './lazy-load.directive';

@NgModule({
  imports: [CommonModule, LazyLoadDirective],
  providers: [ScrollEventListenerService],
  exports: [LazyLoadDirective],
})
export class LazyLoadModule {}

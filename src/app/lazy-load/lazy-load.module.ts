import { NgModule } from '@angular/core';
import { LazyLoadDirective } from './lazy-load.directive';
import { ScrollEventListenerService } from './scroll-event-listener.service';

@NgModule({
  declarations: [LazyLoadDirective],
  providers: [ScrollEventListenerService],
  exports: [LazyLoadDirective],
})
export class LazyLoadModule {}

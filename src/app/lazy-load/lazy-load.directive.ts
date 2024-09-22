import {
  afterNextRender,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { first, Subscription } from 'rxjs';
import { ScrollEventListenerService } from './scroll-event-listener.service';

@Directive({
  selector: '[lazyLoad]',
  standalone: true,
})
export class LazyLoadDirective implements OnDestroy {
  private subscription?: Subscription;

  /**
   * Callback function
   */
  @Output()
  public lazyLoad = new EventEmitter();

  constructor(
    private element: ElementRef<HTMLElement>,
    private scrollEventListenerService: ScrollEventListenerService,
  ) {
    afterNextRender(() => {
      if (this.isInViewPort()) {
        this.lazyLoad.emit();
      } else {
        console.debug('Subscribe scroll event.');

        this.subscription = this.scrollEventListenerService.scrolled
          .pipe(first(() => this.isInViewPort()))
          .subscribe(() => {
            console.debug('Emit scroll event.');
            this.lazyLoad.emit();
          });
      }
    });
  }

  ngOnDestroy(): void {
    console.debug('Unsubscribe scroll event.');

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private isInViewPort(): boolean {
    const top = this.element.nativeElement.getBoundingClientRect().top;
    return top >= 0 && top <= document.documentElement.clientHeight;
  }
}

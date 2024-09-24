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
        console.debug('The content is in viewport, Emit lazyLoad.');
        this.lazyLoad.emit();
      } else {
        console.debug('Subscribe scroll event.');
        this.subscribeScrollEvent();
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

  private subscribeScrollEvent(): void {
    this.subscription = this.scrollEventListenerService.scrolled
      .pipe(first(() => this.isInViewPort()))
      .subscribe(() => {
        console.debug('Emit lazyLoad.');
        this.lazyLoad.emit();
      });
  }
}

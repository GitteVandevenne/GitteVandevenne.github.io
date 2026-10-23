import {
  Component,
  ElementRef,
  afterNextRender,
  input,
  signal,
  viewChild,
} from '@angular/core';
import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';

@Component({
  selector: 'app-project-gallery',
  template: `
    <div class="relative max-w-[80%] justify-self-center pb-4">
      <div class="overflow-hidden" #viewport>
        <div class="flex touch-pan-y">
          @for (img of images(); track img) {
            <div class="min-w-0 shrink-0 grow-0 basis-1/2 px-2 sm:basis-1/2 lg:basis-1/3">
              <button
                type="button"
                (click)="open(img)"
                class="block aspect-square w-full overflow-hidden bg-card rounded-2xl"
              >
                <img
                  [src]="img"
                  alt=""
                  class="cursor-pointer h-full w-full object-scale-down transition duration-300 hover:scale-105"
                />
              </button>
            </div>
          }
        </div>
      </div>

      @if (canScrollPrev() || canScrollNext()) {
        <button
          type="button"
          aria-label="Previous images"
          (click)="scrollPrev()"
          [disabled]="!canScrollPrev()"
          class="cursor-pointer absolute left-0 top-1/2 -ml-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition disabled:cursor-not-allowed disabled:opacity-30 hover:not-disabled:text-accent"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next images"
          (click)="scrollNext()"
          [disabled]="!canScrollNext()"
          class="cursor-pointer absolute right-0 top-1/2 -mr-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition disabled:cursor-not-allowed disabled:opacity-30 hover:not-disabled:text-accent"
        >
          ›
        </button>
      }
    </div>

    @if (lightboxIndex(); as index) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-6"
        (click)="close()"
      >
        <button
          type="button"
          aria-label="Close"
          (click)="close()"
          class="cursor-pointer absolute right-6 top-6 text-3xl leading-none text-white/80 transition hover:text-white"
        >
          ×
        </button>

        <button
          type="button"
          aria-label="Previous image"
          (click)="lightboxPrev($event)"
          class="cursor-pointer absolute left-4 flex h-12 w-12 items-center justify-center rounded-full text-3xl text-white/80 transition hover:text-white sm:left-8"
        >
          ‹
        </button>

        <img
          [src]="images()[index - 1]"
          alt=""
          (click)="$event.stopPropagation()"
          class="max-h-[85vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
        />

        <button
          type="button"
          aria-label="Next image"
          (click)="lightboxNext($event)"
          class="cursor-pointer absolute right-4 flex h-12 w-12 items-center justify-center rounded-full text-3xl text-white/80 transition hover:text-white sm:right-8"
        >
          ›
        </button>

        <p class="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
          {{ index }} / {{ images().length }}
        </p>
      </div>
    }
  `,
})
export class ProjectGalleryComponent {
  images = input.required<string[]>();

  private readonly viewport = viewChild.required<ElementRef<HTMLElement>>('viewport');
  private embla: EmblaCarouselType | undefined;

  protected readonly canScrollPrev = signal(false);
  protected readonly canScrollNext = signal(false);

  protected readonly lightboxIndex = signal<number | null>(null);

  constructor() {
    afterNextRender(() => {
      this.embla = EmblaCarousel(this.viewport().nativeElement, {
        align: 'start',
        containScroll: 'trimSnaps',
        slidesToScroll: 1,
      });
      this.embla.on('select', () => this.updateScrollState());
      this.embla.on('reInit', () => this.updateScrollState());
      this.updateScrollState();
    });
  }

  private updateScrollState(): void {
    if (!this.embla) return;
    this.canScrollPrev.set(this.embla.canScrollPrev());
    this.canScrollNext.set(this.embla.canScrollNext());
  }

  protected scrollPrev(): void {
    this.embla?.scrollPrev();
  }

  protected scrollNext(): void {
    this.embla?.scrollNext();
  }

  protected open(img: string): void {
    this.lightboxIndex.set(this.images().indexOf(img) + 1);
  }

  protected close(): void {
    this.lightboxIndex.set(null);
  }

  protected lightboxPrev(event: Event): void {
    event.stopPropagation();
    const total = this.images().length;
    this.lightboxIndex.update((i) => (i === null ? i : ((i - 2 + total) % total) + 1));
  }

  protected lightboxNext(event: Event): void {
    event.stopPropagation();
    const total = this.images().length;
    this.lightboxIndex.update((i) => (i === null ? i : (i % total) + 1));
  }
}

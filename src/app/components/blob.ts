import { Component, input } from '@angular/core';

@Component({
  selector: 'app-blob',
  template: `
    @if (variant() === 'hero') {
      <img src="/Blob.svg" alt="" aria-hidden="true" class="h-full w-full object-fill" />
    } @else {
      <img src="/Footer-blob.svg" alt="" aria-hidden="true" class="h-full w-full object-fill" />
    }
  `,
})
export class BlobComponent {
  variant = input<'hero' | 'footer'>('hero');
}

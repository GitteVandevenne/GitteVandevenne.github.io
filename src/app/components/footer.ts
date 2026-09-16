import { Component } from '@angular/core';
import { BlobComponent } from './blob';

@Component({
  selector: 'app-footer',
  imports: [BlobComponent],
  template: `
  <footer class="relative pt-16">
   <div class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 text-accent md:h-64 w-full">
      <app-blob variant="footer" />
        </div>                                                                                                                                                              
           <p class="relative pb-8 text-center font-sans text-sm text-white">
              Gitte Vandevenne {{ currentYear }}
            </p>                                                                                                                                                          
     </footer>                                                                                                                                                             
   `,
})
export class FooterComponent {
 protected readonly currentYear = new Date().getFullYear();
}

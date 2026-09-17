import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section class="relative overflow-x-hidden pb-24">

      <div class="max-w-xl px-6 pt-8 md:px-16">
        <p
          class="inline-block  font-sans text-xs font-semibold uppercase tracking-widest text-accent"
        >
          UI/UX Designer - Frontend Developer
        </p>
        <h1 class="mt-3 font-serif text-5xl leading-tight text-ink md:text-6xl">Hi, I'm Gitte</h1>
        <p class="mt-4 max-w-md text-ink/70">
          Short text with details about you, what you do or your professional career. You can add
          more information on the about page.
        </p>
      </div>
    </section>
  `,
})
export class HeroComponent {}

import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="relative z-10 flex items-center gap-3 px-6 py-6 flex-row md:items-center justify-between md:px-16 bg-accent md:bg-transparent"
    >
      <a routerLink="/" class="font-nav text-lg text-white md:text-ink">Gitte Vandevenne</a>
      <nav
        class="flex items-center gap-8 font-nav text-sm text-white md:text-ink"
      >
        <a href="/#projects" class="transition hover:underline hover:underline-offset-4" [class.text-white]="onBlob()">
          Projects
        </a>
        <a
          routerLink="/about"
          routerLinkActive="underline underline-offset-4"
          class="transition hover:underline hover:underline-offset-4"
          [class.text-white]="onBlob()"
        >
          About
        </a>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  onBlob = input(false);
}

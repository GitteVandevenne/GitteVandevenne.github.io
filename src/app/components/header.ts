import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="relative z-10 flex flex-col items-center gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-16"
    >
      <a routerLink="/" class="font-nav text-lg text-ink">Gitte Vandevenne</a>
      <nav
        class="flex items-center gap-8 font-nav text-sm text-ink"
        [class.md:text-white]="onBlob()"
      >
        <a href="/#projects" class="transition hover:underline hover:underline-offset-4">
          Projects
        </a>
        <a
          routerLink="/about"
          routerLinkActive="underline underline-offset-4"
          class="transition hover:underline hover:underline-offset-4"
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

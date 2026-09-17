import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { HeaderComponent } from '../components/header';
import { FooterComponent } from '../components/footer';
import { BlobComponent } from '../components/blob';

export const routeMeta: RouteMeta = {
  title: 'About — Gitte Vandevenne',
};

@Component({
  selector: 'app-about',
  imports: [HeaderComponent, FooterComponent, BlobComponent],
  template: `
    <div class="flex min-h-screen flex-col overflow-x-hidden">
      <app-header />
      <section class="relative mx-auto max-w-4xl px-6 pb-24 pt-8 md:px-16">
        <div
          class="pointer-events-none absolute -right-24 -top-16 -z-10 hidden h-72 w-72 text-accent opacity-15 md:block lg:h-96 lg:w-96"
        >
          <app-blob variant="hero" />
        </div>

        <p class="text-xs font-semibold uppercase tracking-widest text-accent">About me</p>
        <h1 class="mt-3 font-serif text-4xl text-ink md:text-5xl">Hi, I'm Gitte</h1>

        <div class="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div class="border-l-2 border-line/60 pl-6">
            <p class="font-serif text-2xl leading-snug text-ink md:text-3xl">
              Placeholder: an extended version of your bio. Talk about your background, how you
              got into UI/UX design and frontend development, and what drives you professionally.
            </p>
          </div>
          <p class="text-ink/70">
            Placeholder: add a second paragraph with more detail — your design process, the
            industries you've worked in, or what you're currently focused on learning or building.
          </p>
        </div>

        <h2 class="mt-20 font-serif text-2xl text-ink md:text-3xl">Skills &amp; Tools</h2>
        <span class="mt-3 block h-0.5 w-16 bg-line"></span>
        <ul class="mt-8 flex flex-wrap gap-3">
          @for (skill of skills; track skill) {
            <li
              class="rounded-full border border-ink/20 px-5 py-2 text-sm text-ink transition hover:border-accent hover:text-accent"
            >
              {{ skill }}
            </li>
          }
        </ul>
      </section>
      <app-footer class="mt-auto" />
    </div>
  `,
})
export default class AboutPage {
  protected readonly skills = [
    'Figma',
    'UI/UX Design',
    'Design Systems',
    'User Research',
    'Prototyping',
    'Angular',
    'TypeScript',
    'Tailwind CSS',
    'HTML/CSS',
    'Responsive Design',
  ];
}

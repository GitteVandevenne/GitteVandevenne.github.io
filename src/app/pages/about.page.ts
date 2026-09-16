import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { HeaderComponent } from '../components/header';
import { FooterComponent } from '../components/footer';

export const routeMeta: RouteMeta = {
  title: 'About — Gitte Vandevenne',
};

@Component({
  selector: 'app-about',
  imports: [HeaderComponent, FooterComponent],
  template: `
    <div class="flex min-h-screen flex-col">
      <app-header />
      <section class="mx-auto max-w-3xl px-6 pb-24 pt-8 md:px-16">
        <h1 class="font-serif text-4xl text-ink md:text-5xl">About</h1>
        <p class="mt-6 text-ink/80">
          Placeholder: an extended version of your bio. Talk about your background, how you got
          into UI/UX design and frontend development, what kind of projects you enjoy working on,
          and what drives you professionally.
        </p>
        <p class="mt-4 text-ink/80">
          Placeholder: add a second paragraph with more detail — your design process, the
          industries you've worked in, or what you're currently focused on learning or building.
        </p>

        <h2 class="mt-16 font-serif text-2xl text-ink md:text-3xl">Skills &amp; Tools</h2>
        <span class="mt-3 block h-0.5 w-16 bg-line"></span>
        <ul class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          @for (skill of skills; track skill) {
            <li class="rounded-full border border-ink/20 px-4 py-2 text-center text-sm text-ink">
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

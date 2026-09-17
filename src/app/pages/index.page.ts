import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { injectContentFiles } from '@analogjs/content';
import { HeroComponent } from '../components/hero';
import { ProjectCardComponent } from '../components/project-card';
import { FooterComponent } from '../components/footer';
import type { ProjectAttributes } from '../models/project';
import {BlobComponent} from "../components/blob";
import {HeaderComponent} from "../components/header";

export const routeMeta: RouteMeta = {
  title: 'Gitte Vandevenne — Portfolio',
};

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProjectCardComponent, FooterComponent, BlobComponent, HeaderComponent],
  template: `
    <div class="relative flex min-h-screen flex-col overflow-x-hidden">
    <div
        class="pointer-events-none absolute -z-5 text-accent -top-20 -right-55 lg:-right-50 lg:-top-45 md:h-150 lg:h-200 2xl:h-300 2xl:-top-130 2xl:-right-80 hidden md:block"
    >
      <app-blob variant="hero" />
    </div>
      <app-header [onBlob]="true" />
    <app-hero />
    <section id="projects" class="relative overflow-hidden px-6 pb-24 md:px-16">
      <div
        class="pointer-events-none absolute -left-28 top-116 -z-5 hidden h-64 w-64 -rotate-12 text-accent opacity-10 md:block lg:h-80 lg:w-80"
      >
        <app-blob variant="hero" />
      </div>
      <div
        class="pointer-events-none absolute -right-24 bottom-118 -z-5 hidden h-56 w-56 rotate-45 text-accent opacity-10 md:block lg:h-72 lg:w-72"
      >
        <app-blob variant="hero" />
      </div>

      <div class="mb-16 text-center">
        <h2 class="font-serif text-4xl text-ink">Projects</h2>
        <span class="mx-auto mt-3 block h-0.5 w-16 bg-line"></span>
      </div>
      <div class="relative mx-auto flex max-w-5xl flex-col gap-20">
        @for (project of projects; track project.slug; let i = $index) {
          <app-project-card [project]="project" [reversed]="i % 2 === 1" />
        }
      </div>
    </section>
    <app-footer class="mt-auto" />
    </div>
  `,
})
export default class HomePage {
  protected readonly projects = injectContentFiles<ProjectAttributes>((file) =>
    file.filename.includes('/content/project-entries/'),
  ).sort((a, b) => a.attributes.order - b.attributes.order);
}

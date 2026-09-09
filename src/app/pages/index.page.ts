import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { injectContentFiles } from '@analogjs/content';
import { HeroComponent } from '../components/hero';
import { ProjectCardComponent } from '../components/project-card';
import { FooterComponent } from '../components/footer';
import type { ProjectAttributes } from '../models/project';
import {BlobComponent} from "../components/blob";

export const routeMeta: RouteMeta = {
  title: 'Gitte Vandevenne — Portfolio',
};

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProjectCardComponent, FooterComponent, BlobComponent],
  template: `
    <div class="relative overflow-x-hidden">
    <div
        class="pointer-events-none absolute -top-20 -right-20 h-75 w-75 text-accent opacity-90 md:h-105 md:w-105 lg:right-0 lg:-top-45 lg:h-200 lg:w-180 -z-5"
    >
      <app-blob variant="hero" />
    </div>
    <app-hero />
    <section id="projects" class="px-6 pb-24 md:px-16">
      <div class="mb-16 text-center">
        <h2 class="font-serif text-4xl text-ink">Projects</h2>
        <span class="mx-auto mt-3 block h-0.5 w-16 bg-line"></span>
      </div>
      <div class="mx-auto flex max-w-3xl flex-col gap-10 items-center">
        @for (project of projects; track project.slug) {
          <app-project-card [project]="project" />
        }
      </div>
    </section>
    <app-footer />
    </div>
  `,
})
export default class HomePage {
  protected readonly projects = injectContentFiles<ProjectAttributes>((file) =>
    file.filename.includes('/content/project-entries/'),
  ).sort((a, b) => a.attributes.order - b.attributes.order);
}

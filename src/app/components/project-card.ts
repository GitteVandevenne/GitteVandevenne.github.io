import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ContentFile } from '@analogjs/content';
import type { ProjectAttributes } from '../models/project';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  template: `
    <article class="overflow-hidden rounded-3xl bg-white shadow-sm">
      <div class="flex h-64 items-center justify-center bg-card md:h-72 lg:h-80">
        @if (project().attributes.coverImage) {
          <img
            [src]="project().attributes.coverImage"
            alt=""
            class="h-full w-full object-cover"
          />
        }
      </div>
      <div class="px-6 py-8 md:px-10">
        <h3 class="font-serif text-2xl text-ink md:text-3xl">
          {{ project().attributes.title }} - {{ project().attributes.client }}
        </h3>
        <p class="mt-3 text-sm text-ink/70">{{ project().attributes.summary }}</p>
        <a
          [routerLink]="['/projects', project().slug]"
          class="mt-6 inline-block rounded-full border border-ink/30 px-6 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
        >
          View Project
        </a>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  project = input.required<ContentFile<ProjectAttributes>>();
}

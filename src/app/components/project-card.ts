import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ContentFile } from '@analogjs/content';
import type { ProjectAttributes } from '../models/project';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  template: `
    <article
      class="group grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16"
    >
      <a
        [routerLink]="['/projects', project().slug]"
        class="block overflow-hidden rounded-3xl bg-card shadow-lg shadow-ink/5"
        [class.md:order-2]="reversed()"
      >
        <div class="aspect-4/3 w-full">
          @if (project().attributes.coverImage) {
            <img
              [src]="project().attributes.cardImage ?? project().attributes.coverImage"
              alt=""
              class="h-full w-full object-scale-down transition duration-500 group-hover:scale-105 p-3"
            />
          }
        </div>
      </a>

      <div [class.md:order-1]="reversed()">
        <p class="text-xs font-semibold uppercase tracking-widest text-accent">
          {{ project().attributes.role }}
        </p>
        <h3 class="mt-3 font-serif text-3xl text-ink md:text-4xl">
          {{ project().attributes.title }}
        </h3>
        <p class="mt-1 text-sm text-ink/50">{{ project().attributes.client }}</p>
        <p class="mt-4 text-ink/70">{{ project().attributes.summary }}</p>
        <div class="mt-5 flex flex-wrap gap-2">
          @for (tag of project().attributes.tags; track tag) {
            <span class="rounded-full border border-line/80 px-3 py-1 text-xs text-line">
              {{ tag }}
            </span>
          }
        </div>
        <a
          [routerLink]="['/projects', project().slug]"
          class="mt-6 inline-flex items-center gap-2 font-semibold text-ink transition hover:text-accent"
        >
          View project
          <span class="transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  project = input.required<ContentFile<ProjectAttributes>>();
  reversed = input(false);
}

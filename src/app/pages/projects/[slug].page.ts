import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouteMeta } from '@analogjs/router';
import { injectContent, injectContentFiles, MarkdownComponent } from '@analogjs/content';
import { HeaderComponent } from '../../components/header';
import { FooterComponent } from '../../components/footer';
import { ProjectGalleryComponent } from '../../components/project-gallery';
import type { ProjectAttributes } from '../../models/project';
import { BlobComponent } from '../../components/blob';

export const routeMeta: RouteMeta = {
  title: (route) => {
    const slug = route.paramMap.get('slug');
    const entry = injectContentFiles<ProjectAttributes>(
      (file) => file.filename.includes('/project-entries/') && file.slug === slug,
    )[0];
    return `${entry?.attributes.title ?? 'Project'}`;
  },
};

@Component({
  selector: 'app-project-detail',
  imports: [HeaderComponent, FooterComponent, MarkdownComponent, ProjectGalleryComponent, BlobComponent],
  template: `
 <div class="flex min-h-screen flex-col relative overflow-x-hidden">
   <div
       class="pointer-events-none absolute -z-5 text-accent -top-20 -right-55 lg:-right-50 lg:-top-45 md:h-150 lg:h-200 2xl:h-300 2xl:-top-130 2xl:-right-80 hidden md:block"
   >
     <app-blob variant="hero" />
   </div>
    <app-header [onBlob]="true"/>
   @if (project(); as p) {
      <section class="mx-auto px-6 pb-24 md:px-16 text-center justify-center">
        <h1 class="mt-3 font-serif text-4xl text-ink md:text-5xl">
          {{ p.attributes.title }}
        </h1>
        <p class="mt-2 text-lg text-ink/60">{{ p.attributes.client }}</p>
        <div class="mt-5 flex flex-wrap gap-2 justify-center">
          @for (tag of p.attributes.tags; track tag) {
            <span class="rounded-full border border-line/80 px-4 py-1 text-xs text-line">
              {{ tag }}
            </span>
          }
        </div>

          @if (p.attributes.coverImage) {
            <div class="mt-10 overflow-hidden">
            <img
              [src]="p.attributes.coverImage"
              alt=""
              class="w-full object-cover max-w-6xl m-auto"
            />
            </div>
          }

        <analog-markdown [content]="p.content" classes="analog-markdown mx-auto mt-16 text-left max-w-5xl" />

        @if (p.attributes.gallery?.length) {
          <h2 class="mb-6 mt-16 text-center font-serif text-2xl text-ink">Gallery</h2>
          <app-project-gallery [images]="p.attributes.gallery!" />
        }
      </section>
    }
    <app-footer class="mt-auto" />
 </div>
  `,
})
export default class ProjectDetailPage {
  protected readonly project = toSignal(
    injectContent<ProjectAttributes>({ param: 'slug', subdirectory: 'project-entries' }),
  );
}

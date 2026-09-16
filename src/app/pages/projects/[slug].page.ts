import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouteMeta } from '@analogjs/router';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { HeaderComponent } from '../../components/header';
import { FooterComponent } from '../../components/footer';
import type { ProjectAttributes } from '../../models/project';
import {BlobComponent} from "../../components/blob";

export const routeMeta: RouteMeta = {
  title: 'Project — Gitte Vandevenne',
};

@Component({
  selector: 'app-project-detail',
  imports: [HeaderComponent, FooterComponent, MarkdownComponent, BlobComponent],
  template: `
 <div class="flex min-h-screen flex-col">
    <app-header />
    @if (project(); as p) {
      <section class="mx-auto max-w-[75%] px-6 pb-24 pt-8 md:px-16">
        <p class="text-xs font-semibold uppercase tracking-widest text-accent">
          {{ p.attributes.role }}
        </p>
        <h1 class="mt-3 font-serif text-4xl text-ink md:text-5xl">
          {{ p.attributes.title }} - {{ p.attributes.client }}
        </h1>
        <div class="mt-4 flex flex-wrap gap-2">
          @for (tag of p.attributes.tags; track tag) {
            <span class="rounded-full border border-ink/20 px-4 py-1 text-xs text-ink/80">
              {{ tag }}
            </span>
          }
        </div>

        <div class="mt-10 flex h-72 items-center justify-center rounded-3xl  md:h-96">
          @if (p.attributes.coverImage) {
            <img
              [src]="p.attributes.coverImage"
              alt=""
              class="w-full rounded-3xl object-cover"
            />
          }
        </div>

        <analog-markdown [content]="p.content" classes="analog-markdown mt-10" />

        @if (p.attributes.gallery?.length) {
          <h2 class="font-serif text-2xl mt-8 mb-2">Gallery</h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            @for (img of p.attributes.gallery; track img) {
              <img [src]="img" alt="" class="aspect-square w-full rounded-2xl object-cover" />
            }
          </div>
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

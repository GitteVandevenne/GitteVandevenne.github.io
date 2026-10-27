import {Component} from '@angular/core';
import {RouteMeta} from '@analogjs/router';
import {HeaderComponent} from '../components/header';
import {FooterComponent} from '../components/footer';
import {BlobComponent} from '../components/blob';

export const routeMeta: RouteMeta = {
    title: 'About — Gitte Vandevenne',

};

@Component({
    selector: 'app-about',
    imports: [HeaderComponent, FooterComponent, BlobComponent],
    template: `
        <div class="relative isolate flex min-h-screen flex-col overflow-x-hidden">
            <div
                    aria-hidden="true"
                    class="pointer-events-none absolute right-0 top-0 -z-10 aspect-715/807 w-[clamp(16rem,45vw,40rem)] translate-x-1/3 -translate-y-1/4 text-accent opacity-0 md:opacity-15"
            >
                <app-blob variant="hero"/>
            </div>
            <app-header/>
            <section class="relative mx-auto max-w-4xl px-6 pb-24 pt-8 md:px-16">
                <p class="text-xs font-semibold uppercase tracking-widest text-accent">About me</p>
                <h1 class="mt-3 font-serif text-4xl text-ink md:text-5xl">Hi, I'm Gitte</h1>

                <div class="mt-10 gap-10">
                    <div class="border-l-2 border-line/60 pl-6">
                        <p class="font-serif text-2xl leading-snug text-ink md:text-3xl">
                            I'm a frontend developer and designer who is very interested in the psychology behind what
                            makes a good UI/UX, and I want to keep learning about this and continue my career in this
                            field.
                        </p>
                    </div>
                    <div class="space-y-4 text-ink/70 mt-10">
                        <p>
                            I studied industrial engineering in computer science at UHasselt and KU Leuven, then spent a
                            semester in Finland studying service design and doing an internship at a startup.
                        </p>
                    </div>
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
            <app-footer class="mt-auto"/>
        </div>
    `,
})
export default class AboutPage {
    protected readonly skills = [
        'Figma',
        'UI/UX Design',
        'Design Systems',
        'Prototyping',
        'User Research',
        'Service Design',
        'Angular',
        'React',
        'Vue',
        'TypeScript',
        'Tailwind CSS',
        'HTML/CSS',
        'Responsive Design',
    ];
}

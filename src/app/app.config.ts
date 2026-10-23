import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideFileRouter, requestContextInterceptor } from '@analogjs/router';
import {provideContent, withMarkdownRenderer} from "@analogjs/content";
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideFileRouter(),
    provideContent(withMarkdownRenderer()),
    provideHttpClient(
      withInterceptors([requestContextInterceptor])
    ),
    provideClientHydration(withEventReplay()),
    {
      provide: APP_BASE_HREF,
      useValue: import.meta.env.BASE_URL || '/',
    },
  ],
};

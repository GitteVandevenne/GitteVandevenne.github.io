import { ApplicationConfig } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

export const envConfig: ApplicationConfig = {
    providers: [{ provide: APP_BASE_HREF, useValue: '/portfolio/' }],
};
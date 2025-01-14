import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './core/middlewares/auth.interceptor';
import { LoadingInterceptor } from './core/middlewares/loading.interceptor';
import { CachingInterceptor } from './core/middlewares/caching.interceptor';
import { ErrorInterceptor } from './core/middlewares/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([
        // AuthInterceptor,
        // LoadingInterceptor,
        // CachingInterceptor,
        // ErrorInterceptor,
      ])
    ),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
  ],
};

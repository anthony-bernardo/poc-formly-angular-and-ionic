import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { FormlyModule } from '@ngx-formly/core';
import { InputFieldType } from './app/home/form/input.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    importProvidersFrom([
      FormlyModule.forRoot({
        validationMessages: [{ name: 'required', message: 'aaaa field is required' }],
        types: [
          { name: 'app-input', component: InputFieldType, },
        ],
      }),
    ])
  ],
});

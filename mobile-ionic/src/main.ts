import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { FormlyModule } from '@ngx-formly/core';
import { StateSelectFieldType } from './app/home/form/state-select.component';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import messages from '../../server/messages.json';
import { CallFormSelectFieldType } from './app/home/form/call-form-select.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    importProvidersFrom([
      FormlyIonicModule,
      FormlyModule.forRoot({
        types: [
          { name: 'call-form-select', component: CallFormSelectFieldType, },
          { name: 'state-select', component: StateSelectFieldType, },
        ],
        validationMessages: messages.config,
      }),
    ])
  ],
});

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FormlyModule } from '@ngx-formly/core';
import { StateSelectFieldType } from './home/form/state-select.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import messages from '../../../server/messages.json';
import { CallFormFieldType } from './home/form/call-form-select.component';

export const formlyConfig = {
  types: [
    { name: 'call-form-select', component: CallFormFieldType, },
    { name: 'state-select', component: StateSelectFieldType, },
  ],
  validationMessages: messages.config
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom([
    FormlyModule.forRoot(formlyConfig),
  ]), provideAnimations()]
};



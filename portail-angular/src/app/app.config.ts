import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FORMLY_CONFIG, FormlyModule } from '@ngx-formly/core';
import { InputFieldType } from './home/form/input.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom([
    FormlyModule.forRoot({
      types: [
        { name: 'app-input', component: InputFieldType, },
      ],
      validationMessages: [{ name: 'required', message: 'aaaa field is required' }],
    }),
  ])]
};



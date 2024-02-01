import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FormlyModule } from '@ngx-formly/core';
import { StateSelectFieldType } from './home/form/types/state-select.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import messages from '../../../server/messages.json';
import { CallFormFieldType } from './home/form/types/call-form-select.component';
import { PanelFieldWrapper } from './home/form/wrappers/panel-wrapper.component';
import { CheckBoxWrapper } from './home/form/wrappers/check-box-wrapper.component';
import { InputFormFieldWrapper } from './home/form/wrappers/input-form-wrapper.component';

export const formlyConfig = {
  types: [
    { name: 'call-form-select', component: CallFormFieldType, },
    { name: 'state-select', component: StateSelectFieldType, },
  ],
  wrappers: [
    { name: 'panel', component: PanelFieldWrapper },
    { name: 'checkbox-wrapper', component: CheckBoxWrapper },
    { name: 'input-wrapper', component: InputFormFieldWrapper },
  ],
  validationMessages: messages.config
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom([
    FormlyModule.forRoot(formlyConfig),
  ]), provideAnimations()]
};



import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FormlyModule } from '@ngx-formly/core';
import { StateSelectFieldType } from './home/form/types/state-select.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import messages from '../../../server/config/messages.json';
import { CallFormFieldType } from './home/form/types/call-form-select.component';
import { PanelFieldWrapper } from './home/form/wrappers/panel-wrapper.component';
import { GreenBoxWrapper } from './home/form/wrappers/green-box-wrapper.component';
import { FullLineWrapperFormFieldWrapper } from './home/form/wrappers/full-line-wrapper.component';
import { LocalityService } from './services/locality.service';
import { CountryService } from './services/country.service';
import { StreetService } from './services/street.service';

export const selectFactoryConfig = {
  "locality": LocalityService,
  "street": StreetService,
  "country": CountryService,
}

export const wrappersForFields = [
  { field: 'isInOtherCountry', wrappers: ['green-box-wrapper'] },
  { field: 'zip', wrappers: ['full-line-wrapper'] },
  { field: 'locality', wrappers: ['full-line-wrapper'] },
  { field: 'street', wrappers: ['full-line-wrapper'] },
  { field: 'country', wrappers: ['full-line-wrapper'] },
  { field: 'countryLocality', wrappers: ['full-line-wrapper'] },
  { field: 'isFixed', wrappers: ['green-box-wrapper'] },
  { field: 'estimatedDamageAmount', wrappers: ['full-line-wrapper'] },
  { field: 'damageAmount', wrappers: ['full-line-wrapper'] },
]

export const formlyConfig = {
  types: [
    { name: 'call-form-select', component: CallFormFieldType, },
    { name: 'state-select', component: StateSelectFieldType, },
  ],
  wrappers: [
    { name: 'panel-wrapper', component: PanelFieldWrapper },
    { name: 'green-box-wrapper', component: GreenBoxWrapper },
    { name: 'full-line-wrapper', component: FullLineWrapperFormFieldWrapper },
  ],
  validationMessages: messages.config
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom([
    FormlyModule.forRoot(formlyConfig),
  ]), provideAnimations()]
};



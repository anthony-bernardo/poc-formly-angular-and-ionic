import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import fields from '../../../../server/fields.json'
import model from '../../../../server/model.json';
import { FormlyIonicModule } from '@ngx-formly/ionic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
    ReactiveFormsModule,
    FormlyIonicModule,
    FormlyModule,
    FormlyBootstrapModule
  ],

})
export class HomePage {
  constructor() { }
  form = new FormGroup({});
  model = model.config;
  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'form-group',
    fieldGroup: fields.config
  }];

  onSubmit(model: any) {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

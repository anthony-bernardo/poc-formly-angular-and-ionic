import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import fields from '../../../../fields.json'
import model from '../../../../model.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule
  ],

})
export class HomePage {
  constructor() { }
  form = new FormGroup({});
  model = model.config;
  fields: FormlyFieldConfig[] = fields.config;

  onSubmit(model: any) {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

}

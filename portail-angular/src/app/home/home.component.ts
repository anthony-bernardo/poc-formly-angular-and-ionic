import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import model from '../../../../server/model.json';
import { overrideFormStyle } from './override-form-style';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  form = new FormGroup({});
  model = model.config;
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-group',
      fieldGroup: overrideFormStyle().config,
    }
  ];

  onSubmit(model: any) {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

}

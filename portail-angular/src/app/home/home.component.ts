import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import model from '../../../../server/config/model.json';
import { UserPreferencesService } from '../services/user.preferences.service';
import { FormlyJsonschema } from "@ngx-formly/core/json-schema";
import { overrideFormStyle } from './override-form-style';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule
  ],
  providers: [UserPreferencesService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  form = new FormGroup({});
  model = model.config as any;
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-group',
      fieldGroup: overrideFormStyle().config,
    }
  ];

  constructor(private userPreferencesService: UserPreferencesService, private formlyJsonschema: FormlyJsonschema) { }

  ngOnInit() {
    this.userPreferencesService.getData().then((data: any) => {
      this.model = { ...this.model, ...data };
    });

  }

  onSubmit(model: any) {
    if (this.form.valid) {
      console.log(JSON.stringify(this.model, null, 2));
      alert("Sucessfully submitted! (see console)");
    }
  }
}
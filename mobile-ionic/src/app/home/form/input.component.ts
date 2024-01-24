import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
    selector: 'app-input',
    imports: [
        FormlyModule,
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        FormlyBootstrapModule
    ],
    standalone: true,
    template: `
  <ion-item>
    <ion-input label="Default input"></ion-input>
  </ion-item>
  `,
})
export class InputFieldType extends FieldType<FieldTypeConfig> { }


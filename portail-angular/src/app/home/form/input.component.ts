import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
    selector: 'app-input',
    imports: [
        FormlyModule,
        CommonModule,
        ReactiveFormsModule,
        FormlyBootstrapModule
    ],
    standalone: true,
    template: `<input type="text" [formControl]="formControl" [formlyAttributes]="field">
  `,

})
export class InputFieldType extends FieldType<FieldTypeConfig> { }


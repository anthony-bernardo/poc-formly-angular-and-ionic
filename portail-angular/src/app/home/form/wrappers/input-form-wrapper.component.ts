

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-input-form-field',
  imports: [
    FormlyModule,
    CommonModule
  ],
  standalone: true,
  styles: [
    `
      .custom-field {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  template: `
    <div>
        <ng-template #labelTemplate>
            <label *ngIf="props.label && props.hideLabel !== true" [attr.for]="id" class="form-label">
            {{ props.label }}
            <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true">*</span>
            </label>
        </ng-template>
    
        <div class="custom-field" [class.form-floating]="props.labelPosition === 'floating'" [class.has-error]="showError">
            <ng-container *ngIf="props.labelPosition !== 'floating'">
            <ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
            </ng-container>
            
            <ng-template #fieldComponent></ng-template>
            
            <ng-container *ngIf="props.labelPosition === 'floating'">
            <ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
            </ng-container>
            
            <div *ngIf="showError" class="invalid-feedback" [style.display]="'block'">
                <formly-validation-message
                    id="{{ id }}-formly-validation-error"
                    [field]="field"
                    role="alert"
            />
            </div>
            
            <small *ngIf="props.description" class="form-text text-muted">{{ props.description }}</small>
        </div>
    </div>
  `,
})
export class InputFormFieldWrapper extends FieldWrapper {
}


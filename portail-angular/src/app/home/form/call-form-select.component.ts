

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

type Option = { label: string, value: string };

@Component({
    selector: 'call-form-select',
    imports: [
        FormlyModule,
        CommonModule,
        ReactiveFormsModule,
        FormlyBootstrapModule
    ],
    standalone: true,
    template: `
    <div *ngFor="let item of items">
        <input type="radio" id="call-form" name="gender" [value]="item.value">
        <label>{{ item.label }}</label>
    </div>
  `,
})
export class CallFormFieldType extends FieldType<FieldTypeConfig> implements OnInit {
    items: Option[] = [];

    ngOnInit(): void {
        const options = this.props.options as Option[];
        this.items = options.map((option) => {
            return {
                label: option.label,
                value: option.value
            }
        });
    }
}


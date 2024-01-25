

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

type Option = { label: string, value: string };

@Component({
    selector: 'call-form-select',
    imports: [
        FormlyModule,
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        FormlyBootstrapModule
    ],
    standalone: true,
    template: `
        <ion-select [label]="props.label" [placeholder]="props.placeholder">
            <ion-select-option  *ngFor="let item of items" [value]="item.value">{{ item.label }}</ion-select-option>
        </ion-select>
  `,
})
export class CallFormSelectFieldType extends FieldType<FieldTypeConfig> implements OnInit {
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


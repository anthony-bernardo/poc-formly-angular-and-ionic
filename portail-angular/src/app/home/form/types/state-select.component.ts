import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { Observable, filter, of, tap } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SelectItemServiceFactory } from '../../../services/factory/factory.service';
import { ISelectService, SelectItem } from '../../../services/factory/ISelectService';
import { resetIfEmpty } from '../../../../utils/resetIfEmpty';

@Component({
    selector: 'state-select',
    imports: [
        MatInputModule,
        MatAutocompleteModule,
        FormlyModule,
        CommonModule,
        ReactiveFormsModule,
        FormlyBootstrapModule,
    ],
    standalone: true,
    providers: [SelectItemServiceFactory],
    styles: [
        `
        input {
            display: flex;
            width: 100%;
            flex-direction: column;
        }
    `,
    ],
    template: `
    <div>
        <input
            matInput
            [matAutocomplete]="auto"
            [formControl]="formControl"
            [formlyAttributes]="field"
            [placeholder]="props.placeholder || 'Selectionnez'"
        />
        <mat-autocomplete #auto="matAutocomplete" [displayWith]="display"
            (optionSelected)="handleOptionSelected($event.option.value)">
            <mat-option *ngFor="let value of filter | async" [value]="value" >
                {{ value.title }}
            </mat-option>
        </mat-autocomplete>
    </div>
  `,
})
export class StateSelectFieldType extends FieldType<FieldTypeConfig> implements OnInit {
    // service + factory
    factory: SelectItemServiceFactory = new SelectItemServiceFactory();
    service: ISelectService | null = null

    filter: Observable<any> | undefined;

    ngOnInit() {
        // create service from factory
        this.service = this.factory.create(this.field.key as string);

        this.formControl.valueChanges.subscribe(async (value) => {
            const isValueSelected = typeof value === 'object' || value === undefined
            if (isValueSelected) return []

            const result = await this.service?.getData(value, { formModel: this.model })
            this.filter = of(result)
            return result
        })

        // Improve: this can be injected through a service
        resetIfEmpty(this.field, this.props, this.form)
    }

    display(item: SelectItem): string {
        return item && item.title ? item.title : '';
    }

    handleOptionSelected(value: SelectItem) {
        this.field.formControl.setValue({ ...value, id: value.id })
    }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { Observable, of, startWith, switchMap } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const states = [
    'Valais',
    'Vaud',
    'Genève',
    'Fribourg',
    'Neuchâtel',
    'Jura',
    'Berne',
    'Zurich',
    'Tessin',
    'Grisons',
    'Saint-Gall',
    'Argovie',
    'Lucerne',
    'Schwytz',
    'Zoug',
    'Obwald',
    'Nidwald',
    'Uri',
    'Glaris',
    'Bâle-Ville',
    'Bâle-Campagne',
    'Appenzell Rhodes-Extérieures',
    'Appenzell Rhodes-Intérieures',
    'Thurgovie',
    'Schaffhouse',
];

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
    template: `
    <input
    matInput
    [matAutocomplete]="auto"
    [formControl]="formControl"
    [formlyAttributes]="field"
    [placeholder]="props.placeholder || 'Selectionnez'"
  />
  <mat-autocomplete #auto="matAutocomplete">
    <mat-option *ngFor="let value of filter | async" [value]="value">
      {{ value }}
    </mat-option>
  </mat-autocomplete>
  `,
})
export class StateSelectFieldType extends FieldType<FieldTypeConfig> implements OnInit {
    filter: Observable<any> | undefined;

    ngOnInit() {
        this.filter = this.formControl.valueChanges.pipe(
            startWith(''),
            switchMap((term) => this.search(term)),
        );
    }

    search(term: string) {
        return of(term ? this.filterStates(term) : states.slice())
    }

    filterStates(name: string) {
        return states.filter((state) => state.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
}

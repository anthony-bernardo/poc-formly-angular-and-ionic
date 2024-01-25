import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

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
        FormlyModule,
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        FormlyBootstrapModule
    ],
    standalone: true,
    template: `
        <ion-searchbar [placeholder]="props.placeholder" type="text" debounce="500" (ionInput)="getItems($event)"></ion-searchbar>
        <ion-list *ngIf="isItemAvailable">
            <ion-item *ngFor="let item of items">{{ item }}</ion-item>
        </ion-list>
  `,
})
export class StateSelectFieldType extends FieldType<FieldTypeConfig> {

    isItemAvailable = false;
    items: string[] = [];

    initializeItems() {
        this.items = states;
    }

    getItems(ev: any) {
        this.initializeItems();
        const val = ev.target.value;
        if (!val && val.trim() === '') return

        this.isItemAvailable = true;
        this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    }

}


import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-checkbox',
  styles: [
    `
      .card {
        display: flex;
        background-color: #32CD32;
        color: white;
        border: 1px dashed black;
        margin-top: 10px;
      }
    `,
  ],
  template: `
    <div class="card">
      <div class="card-body">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,
})
export class GreenBoxWrapper extends FieldWrapper {
}


import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  styles: [
    `
      .card {
        display: flex;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        
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
export class PanelFieldWrapper extends FieldWrapper {
}


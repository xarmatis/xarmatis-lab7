import { CommonModule, NgIf } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.scss'
})
export class FormModalComponent {


  /* formModalData: any;

  onFormDataReceived(data: any) {
    this.formModalData = data;
  }
 */

  @Input() receivedData: any;
}

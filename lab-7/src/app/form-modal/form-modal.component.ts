import { CommonModule, NgIf } from '@angular/common';
import { Component, input, Input, Inject} from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  //@Input() receivedData: any;
  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeModal() {
    this.dialogRef.close(this.data);
  }
}

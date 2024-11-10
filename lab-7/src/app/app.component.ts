import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SurveyFormComponent,FormModalComponent, CommonModule, MatDialogModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab-7';
  constructor(private dialog: MatDialog) {}

  onFormDataReceived(data: any) {
    this.openFormModal(data);
  }

  openFormModal(formData: any) {
    this.dialog.open(FormModalComponent, {
      width: '20%',
      height: '50%',
      data: formData,
      position: {
        top: '10%',
        left: '50%',
        
      }
      
    });
  }
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SurveyFormComponent,FormModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab-7';
  
  formModalData: any;

  onFormDataReceived(data: any) {
    this.formModalData = data;
  }
}

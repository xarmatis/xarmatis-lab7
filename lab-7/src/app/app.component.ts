import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SurveyFormComponent,FormModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab-7';
}

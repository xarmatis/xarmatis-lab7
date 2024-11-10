import { Component, ChangeDetectionStrategy, signal, Output, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.scss'
})
export class SurveyFormComponent {

  @Output() formData = new EventEmitter<any>();
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  nameControl = new FormControl('', [Validators.required]);
  ageControl = new FormControl('', [Validators.required]);
  feedback = new FormControl('', [Validators.required]);
  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  submitForm() {
   
    if (this.nameControl.valid && this.ageControl.valid && this.feedback.valid) {
      const formValues = {
        email: this.email.value,
        name: this.nameControl.value,
        age: this.ageControl.value,
        feedback: this.feedback.value
      };
      this.formData.emit(formValues);
    } else {

      alert('Please fill out all required fields')
    }
    
    



}
}

import { Component, Input, ViewChild, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { AnchorDirective } from 'src/app/anchor.directive';
import { ChoiceComponent } from 'src/app/form-element/choice/choice.component';
import { DateComponent } from 'src/app/form-element/date/date.component';
import { EmailComponent } from 'src/app/form-element/email/email.component';
import { RatingComponent } from 'src/app/form-element/rating/rating.component';
import { TextComponent } from 'src/app/form-element/text/text.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent {
  constructor(private _snackBar: MatSnackBar) { }

  @Input() snackbarMessage!: string;
  @Input() snackbarAction!: string;
  @Input() snackbarButton!: string;
  @Input() snackbarDuration!: number;
  @Input() question!: string;
  @Input() showClipboard!: boolean;
  @Input() elementType!: string;
  @Input() formTarget!: AnchorDirective;
  @Input() questionNumber!: number;

  durationInSeconds!: number;

  openSnackBar() {
    this.durationInSeconds = this.snackbarDuration || 3;
    const snackbarInstance = this._snackBar.openFromComponent(
      CustomSnackbarComponent,
      {
        duration: this.durationInSeconds * 1000,
        panelClass: ['purple-snackbar']
      }
    );
    snackbarInstance.instance.snackbarMessage = this.snackbarMessage;
    snackbarInstance.instance.snackbarAction = this.snackbarAction;
    snackbarInstance.instance.question = this.question;
    snackbarInstance.instance.showClipboard = this.showClipboard;
  }

  createElement() {
    this.questionNumber++;
    const viewContainerRef = this.formTarget.viewContainerRef;

    switch (this.elementType) {
      case 'Text': const textRef = viewContainerRef.createComponent(TextComponent);
        textRef.instance.questionNumber = this.questionNumber;
        textRef.instance.formTarget = this.formTarget;
        textRef.instance.question = this.question;
        break;
      case 'Choice': const choiceRef = viewContainerRef.createComponent(ChoiceComponent);
        choiceRef.instance.questionNumber = this.questionNumber;
        choiceRef.instance.formTarget = this.formTarget;
        choiceRef.instance.question = this.question;
        break
      case 'Email': const emailRef = viewContainerRef.createComponent(EmailComponent);
        emailRef.instance.questionNumber = this.questionNumber;
        emailRef.instance.formTarget = this.formTarget;
        emailRef.instance.question = this.question;
        break
      case 'Date': const dateRef = viewContainerRef.createComponent(DateComponent);
        dateRef.instance.questionNumber = this.questionNumber;
        dateRef.instance.formTarget = this.formTarget;
        dateRef.instance.question = this.question;
        break
      case 'Rating': const ratingRef = viewContainerRef.createComponent(RatingComponent);
        ratingRef.instance.questionNumber = this.questionNumber;
        ratingRef.instance.formTarget = this.formTarget;
        ratingRef.instance.question = this.question;
        break
    }
  }
}

@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  templateUrl: './custom-snackbar-component.html',
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-between;
      }

      .custom-snackbar-message {
        color: white;
      }

      .custom-snackbar-action {
        border-radius: 3px;
      }
    `,
  ],
})
export class CustomSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
  snackbarMessage!: string;
  snackbarAction!: string;
  snackbarDuration!: number;
  question!: string;
  showClipboard!: boolean;
}

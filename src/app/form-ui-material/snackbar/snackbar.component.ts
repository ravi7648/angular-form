import { Component, Input, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent {
  constructor(private _snackBar: MatSnackBar) {}

  @Input() snackbarMessage!: string;
  @Input() snackbarAction!: string;
  @Input() snackbarButton!: string;
  @Input() snackbarDuration!: number;
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
}

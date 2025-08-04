import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-ask-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButton, MatDialogClose],
  templateUrl: './ask-dialog.component.html',
  styleUrl: './ask-dialog.component.scss',
})
export class AskDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      text: string;
      variants: { yes: string; no: string };
    },
  ) {}
  close(b?: boolean) {
    this.dialogRef.close(b);
  }
}

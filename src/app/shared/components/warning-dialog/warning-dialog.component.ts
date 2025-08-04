import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { CdkScrollable } from '@angular/cdk/scrolling';

export interface DialogData {
  text: string;
  href: string | undefined;
  href_text: string | undefined;
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'warning-dialog.component.html',
  standalone: true,
  imports: [
    CdkScrollable,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
})
export class WarningDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  close() {
    this.dialogRef.close();
  }
}

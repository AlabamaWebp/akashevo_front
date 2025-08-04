import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-text-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    FormsModule,
    MatFormFieldModule,
    MatInput,
  ],
  templateUrl: './text-dialog.component.html',
  styleUrl: './text-dialog.component.scss',
})
export class TextDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      text: string;
      variants: { yes: string; no: string };
      number?: boolean;
    },
  ) {}
  ngOnInit() {
    setTimeout(() => {
      (document.querySelector('#inpDialog') as HTMLElement).click();
    }, 100);
  }
  close(b?: string) {
    this.dialogRef.close(b);
  }
}
